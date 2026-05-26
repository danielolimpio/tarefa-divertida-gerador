// Native PWA install trigger. No custom UI.
// - Android/Chrome & Desktop: capture `beforeinstallprompt`, fire on first user gesture.
// - iOS Safari: cannot be triggered programmatically; the browser exposes
//   "Compartilhar → Adicionar à Tela de Início" natively in its share sheet.

type BIPEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

let deferred: BIPEvent | null = null;
let triggered = false;

const isStandalone = () =>
  window.matchMedia?.("(display-mode: standalone)").matches ||
  // iOS
  (navigator as any).standalone === true;

const fire = async () => {
  if (triggered || !deferred) return;
  triggered = true;
  try {
    await deferred.prompt();
    await deferred.userChoice.catch(() => {});
  } catch {
    // ignore — user gesture may already be consumed; will retry on next click
    triggered = false;
  } finally {
    deferred = null;
    removeListeners();
  }
};

const onFirstClick = () => fire();

const addListeners = () => {
  window.addEventListener("click", onFirstClick, { once: true, capture: true });
  window.addEventListener("touchend", onFirstClick, { once: true, capture: true });
  window.addEventListener("keydown", onFirstClick, { once: true, capture: true });
};

const removeListeners = () => {
  window.removeEventListener("click", onFirstClick, true);
  window.removeEventListener("touchend", onFirstClick, true);
  window.removeEventListener("keydown", onFirstClick, true);
};

export function setupPwaInstall() {
  if (typeof window === "undefined") return;
  if (isStandalone()) return;

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferred = e as BIPEvent;
    addListeners();
  });

  window.addEventListener("appinstalled", () => {
    deferred = null;
    triggered = true;
    removeListeners();
  });
}
