import { Activity } from '@/data/activities';

// Função para gerar o conteúdo HTML das atividades
export function generateActivityHTML(
  activities: Activity[],
  studentName?: string,
  colorMode: 'colorido' | 'pb' = 'colorido'
): string {
  const date = new Date().toLocaleDateString('pt-BR');
  const isColorful = colorMode === 'colorido';
  
  const styles = `
    <style>
      @page {
        size: A4;
        margin: 20mm;
      }
      
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 1.6;
        color: ${isColorful ? '#333' : '#000'};
      }
      
      .header {
        text-align: center;
        padding: 20px;
        background: ${isColorful ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#f0f0f0'};
        color: ${isColorful ? 'white' : '#000'};
        border-radius: 10px;
        margin-bottom: 30px;
      }
      
      .activity {
        page-break-inside: avoid;
        margin-bottom: 40px;
        padding: 20px;
        border: 2px solid ${isColorful ? '#e2e8f0' : '#000'};
        border-radius: 10px;
      }
      
      .activity-title {
        font-size: 18px;
        font-weight: bold;
        color: ${isColorful ? '#4a5568' : '#000'};
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .difficulty {
        padding: 3px 10px;
        border-radius: 5px;
        font-size: 12px;
        font-weight: normal;
      }
      
      .difficulty-facil {
        background: ${isColorful ? '#48bb78' : '#e0e0e0'};
        color: ${isColorful ? 'white' : '#000'};
      }
      
      .difficulty-medio {
        background: ${isColorful ? '#4299e1' : '#b0b0b0'};
        color: ${isColorful ? 'white' : '#000'};
      }
      
      .difficulty-dificil {
        background: ${isColorful ? '#f56565' : '#808080'};
        color: ${isColorful ? 'white' : '#000'};
      }
      
      .instructions {
        font-weight: 500;
        margin-bottom: 15px;
        color: ${isColorful ? '#2d3748' : '#000'};
      }
      
      .exercise-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
        margin-top: 15px;
      }
      
      .exercise-item {
        padding: 10px;
        background: ${isColorful ? '#f7fafc' : '#f9f9f9'};
        border: 1px solid ${isColorful ? '#cbd5e0' : '#666'};
        border-radius: 5px;
      }
      
      .blank-line {
        display: inline-block;
        width: 100px;
        border-bottom: 2px solid ${isColorful ? '#718096' : '#000'};
        margin-left: 10px;
      }
      
      .color-box {
        width: 60px;
        height: 60px;
        border: 3px dashed ${isColorful ? '#a0aec0' : '#000'};
        display: inline-block;
        margin: 10px;
        border-radius: 8px;
        text-align: center;
        line-height: 60px;
        font-size: 36px;
        color: ${isColorful ? '#e2e8f0' : '#ccc'};
      }
      
      .crossword-grid {
        display: inline-block;
        margin: 20px auto;
      }
      
      .crossword-cell {
        width: 30px;
        height: 30px;
        border: 1px solid ${isColorful ? '#718096' : '#000'};
        display: inline-block;
        text-align: center;
        line-height: 30px;
      }
      
      .maze-container {
        width: 100%;
        height: 300px;
        border: 2px solid ${isColorful ? '#4a5568' : '#000'};
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${isColorful ? '#edf2f7' : '#f5f5f5'};
      }
      
      .sequence-box {
        width: 50px;
        height: 50px;
        border: 2px solid ${isColorful ? '#4a5568' : '#000'};
        display: inline-block;
        margin: 5px;
        text-align: center;
        line-height: 50px;
        font-size: 24px;
        border-radius: 5px;
      }
      
      .visual-card {
        padding: 20px;
        border: 4px solid ${isColorful ? '#805ad5' : '#666'};
        border-radius: 10px;
        text-align: center;
        margin: 10px;
        background: ${isColorful ? '#faf5ff' : '#fafafa'};
      }
      
      .emoji-large {
        font-size: 48px;
        margin-bottom: 10px;
      }
      
      .footer {
        text-align: center;
        margin-top: 40px;
        padding-top: 20px;
        border-top: 2px solid ${isColorful ? '#e2e8f0' : '#666'};
        color: ${isColorful ? '#718096' : '#666'};
      }
      
      .watermark {
        position: fixed;
        bottom: 10px;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 10px;
        color: #999;
        opacity: 0.7;
      }
      
      .watermark a {
        color: #999;
        text-decoration: none;
      }
      
      .watermark a:hover {
        text-decoration: underline;
      }

      @media print {
        .header { display: none !important; }
        .activity { border: 0; padding: 0; margin: 0 0 10mm; }
        img { display: block; width: 100%; height: auto; break-inside: avoid; page-break-inside: avoid; }
      }
    </style>
  `;
  
  const header = `
    <div class="header">
      <h1>Atividades Escolares</h1>
      ${studentName ? `<h2>Aluno(a): ${studentName}</h2>` : ''}
      <p>Data: ${date}</p>
    </div>
  `;
  
  const activitiesHTML = activities.map((activity, index) => {
    const difficultyClass = `difficulty-${activity.difficulty}`;
    let content = '';
    
    // Renderizar conteúdo baseado no tipo de atividade
    switch (activity.type) {
      case 'exercicios':
        content = renderExerciseContent(activity.content);
        break;
      case 'colorir':
        content = renderColoringContent(activity.content);
        break;
      case 'cruzadinhas':
        content = renderCrosswordContent(activity.content);
        break;
      case 'ligar-pontos':
        content = renderConnectDotsContent(activity.content);
        break;
      case 'sequencias':
        content = renderSequenceContent(activity.content);
        break;
      case 'labirintos':
        content = renderMazeContent(activity.content);
        break;
      case 'adaptadas':
        content = renderAdaptedContent(activity.content);
        break;
      default:
        content = `<p>${JSON.stringify(activity.content)}</p>`;
    }
    
    return `
      <div class="activity">
        <div class="activity-title">
          <span>${index + 1}. ${activity.title}</span>
          <span class="difficulty ${difficultyClass}">${activity.difficulty}</span>
        </div>
        ${content}
      </div>
    `;
  }).join('');
  
  const watermark = `
    <div class="watermark">
      <p>Copyright 2025 | Todos direitos reservados | <a href="https://atividadeseducacaoinfantil.com" target="_blank">https://atividadeseducacaoinfantil.com</a></p>
    </div>
  `;
  
  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Atividades Escolares - ${studentName || 'Aluno'}</title>
      ${styles}
    </head>
    <body>
      ${header}
      ${activitiesHTML}
      ${watermark}
    </body>
    </html>
  `;
}

// Funções auxiliares para renderizar cada tipo de conteúdo
function renderExerciseContent(content: any): string {
  // Folha do Maternal (50 folhas de Português)
  if (content && content.folhaMaternal) {
    return renderFolhaMaternal(content);
  }

  // Se houver imageUrl, renderizar apenas a imagem
  if (content.imageUrl) {
    return `<div style="text-align: center; margin: 20px 0;">
      <img src="${content.imageUrl}" style="max-width: 100%; height: auto;" alt="Atividade" />
    </div>`;
  }
  
  let html = `<p class="instructions">${content.instructions || ''}</p>`;
  
  if (content.letters) {
    html += '<div style="display: flex; gap: 15px; flex-wrap: wrap; justify-content: center; margin: 20px 0;">';
    content.letters.forEach((letter: string) => {
      html += `<div style="width: 60px; height: 60px; border: 2px solid #666; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; font-size: 32px; font-weight: bold;">${letter}</div>`;
    });
    html += '</div>';
  }
  
  if (content.items) {
    html += '<div>';
    content.items.forEach((item: any) => {
      html += `<div style="margin: 15px 0; font-size: 24px;">
        ${item.objects} = <span class="blank-line"></span>
      </div>`;
    });
    html += '</div>';
  }
  
  if (content.words) {
    html += '<div class="exercise-grid">';
    content.words.forEach((item: any) => {
      html += `<div class="exercise-item">${item.word} <span class="blank-line"></span></div>`;
    });
    html += '</div>';
  }
  
  if (content.problems) {
    html += '<div class="exercise-grid">';
    content.problems.forEach((item: any) => {
      html += `<div class="exercise-item">${item.problem} <span class="blank-line"></span></div>`;
    });
    html += '</div>';
  }
  
  if (content.questions) {
    if (content.text) {
      html += `<div style="padding: 15px; background: #f7fafc; border-radius: 5px; margin-bottom: 15px;">
        <p>${content.text}</p>
      </div>`;
    }
    
    content.questions.forEach((q: any, idx: number) => {
      html += `<div style="margin-bottom: 15px;">
        <p style="font-weight: 500;">${idx + 1}. ${q.question}</p>
        <div style="margin-left: 20px; margin-top: 5px;">`;
      q.options.forEach((opt: string) => {
        html += `<label style="display: block; margin: 5px 0;">
          <input type="radio" name="q${idx}" style="margin-right: 8px;"> ${opt}
        </label>`;
      });
      html += '</div></div>';
    });
  }
  
  return html;
}

function renderColoringContent(content: any): string {
  let html = `<p class="instructions">${content.instructions}</p>`;
  html += '<div style="text-align: center;">';
  
  if (content.letters) {
    content.letters.forEach((letter: string) => {
      html += `<div class="color-box">${letter}</div>`;
    });
  }
  
  html += '</div>';
  return html;
}

function renderCrosswordContent(content: any): string {
  let html = `<p class="instructions">${content.instructions}</p>`;
  html += '<div style="text-align: center;">';
  
  // Criar grid simplificado
  const { size } = content.grid;
  html += '<div class="crossword-grid">';
  for (let i = 0; i < size.height; i++) {
    html += '<div>';
    for (let j = 0; j < size.width; j++) {
      html += '<div class="crossword-cell"></div>';
    }
    html += '</div>';
  }
  html += '</div>';
  
  // Dicas
  html += '<div style="margin-top: 20px; text-align: left;">';
  html += '<p style="font-weight: bold;">Dicas:</p>';
  content.grid.words.forEach((word: any, idx: number) => {
    const arrow = word.direction === 'horizontal' ? '→' : '↓';
    html += `<p>${idx + 1}. ${word.hint} ${arrow}</p>`;
  });
  html += '</div>';
  
  html += '</div>';
  return html;
}

function renderConnectDotsContent(content: any): string {
  return `
    <p class="instructions">${content.instructions}</p>
    <div class="maze-container">
      <p>Ligue os pontos de 1 a ${content.maxNumber} para formar: ${content.shape}</p>
    </div>
  `;
}

function renderSequenceContent(content: any): string {
  let html = `<p class="instructions">${content.instructions}</p>`;
  
  content.sequences.forEach((seq: any, idx: number) => {
    html += '<div style="margin: 15px 0;">';
    seq.pattern.forEach((item: string) => {
      html += `<div class="sequence-box">${item}</div>`;
    });
    html += '</div>';
  });
  
  return html;
}

function renderMazeContent(content: any): string {
  return `
    <p class="instructions">${content.instructions}</p>
    <div class="maze-container">
      <p>Labirinto ${content.mazeSize}: ${content.theme}</p>
    </div>
  `;
}

function renderAdaptedContent(content: any): string {
  let html = `<p class="instructions" style="font-size: 18px;">${content.instructions}</p>`;
  
  if (content.cards) {
    html += '<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">';
    content.cards.forEach((card: any) => {
      html += `
        <div class="visual-card">
          <div class="emoji-large">${card.image}</div>
          <p style="font-size: 20px; font-weight: bold;">${card.text}</p>
          <div style="width: 40px; height: 40px; border: 2px solid #666; margin: 10px auto;"></div>
        </div>
      `;
    });
    html += '</div>';
  }
  
  if (content.pairs) {
    html += '<div style="margin: 20px 0;">';
    content.pairs.forEach((pair: any) => {
      html += `
        <div style="display: flex; align-items: center; justify-content: space-between; max-width: 400px; margin: 15px auto;">
          <span style="font-size: 36px;">${pair.left}</span>
          <div style="flex: 1; border-bottom: 3px dashed #666; margin: 0 20px;"></div>
          <span style="font-size: 36px;">${pair.right}</span>
        </div>
      `;
    });
    html += '</div>';
  }
  
  if (content.sequence) {
    html += '<div style="text-align: center; margin: 20px 0;">';
    content.sequence.forEach((item: string) => {
      html += `<div class="sequence-box" style="width: 70px; height: 70px; line-height: 70px; font-size: 32px;">${item}</div>`;
    });
    html += `<p style="margin-top: 15px; color: #666;">Observe por ${content.showTime / 1000} segundos e depois repita</p>`;
    html += '</div>';
  }
  
  return html;
}

// Função utilitária para transformar todas as imagens do HTML em data URLs e garantir carregamento no print
async function inlineImagesInHTML(html: string): Promise<string> {
  const imgSrcRegex = /<img\s+[^>]*src=["']([^"']+)["'][^>]*>/gi;
  const srcs: string[] = [];
  let match: RegExpExecArray | null;
  while ((match = imgSrcRegex.exec(html)) !== null) {
    const src = match[1];
    if (src && !src.startsWith('data:')) {
      try {
        const abs = new URL(src, window.location.href).href;
        srcs.push(abs);
      } catch {
        // ignora URLs inválidas
      }
    }
  }

  const uniqueSrcs = Array.from(new Set(srcs));
  const map = new Map<string, string>();

  await Promise.all(uniqueSrcs.map(async (url) => {
    try {
      const res = await fetch(url, { mode: 'cors', credentials: 'omit', cache: 'force-cache' });
      const blob = await res.blob();
      const dataUrl = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
      map.set(url, dataUrl);
    } catch (e) {
      console.warn('Falha ao embutir imagem no PDF:', url, e);
    }
  }));

  // Substitui todas as ocorrências
  let out = html;
  const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  map.forEach((dataUrl, abs) => {
    // substitui tanto absoluto quanto relativo equivalente
    const rel = abs.replace(window.location.origin, '');
    const absPattern = new RegExp(`src=("|')${esc(abs)}\\1`, 'g');
    const relPattern = new RegExp(`src=("|')${esc(rel)}\\1`, 'g');
    out = out.replace(absPattern, `src="${dataUrl}"`).replace(relPattern, `src="${dataUrl}"`);
  });

  return out;
}

// Função para imprimir o PDF (abre janela de impressão)
export async function printPDF(htmlContent: string): Promise<void> {
  // Embute imagens como data URLs para evitar bloqueios/CORS e garantir carregamento no print
  const htmlWithInlinedImgs = await inlineImagesInHTML(htmlContent);

  const printWindow = window.open('', '_blank');
  if (!printWindow) return;

  printWindow.document.open();
  printWindow.document.write(htmlWithInlinedImgs);
  printWindow.document.close();

  // Garante que todas as imagens estejam carregadas antes de imprimir
  const waitForImages = () => {
    const imgs = Array.from(printWindow.document.images || []);
    if (imgs.length === 0) return Promise.resolve();
    return Promise.all(
      imgs.map((img) =>
        img.complete && img.naturalWidth > 0
          ? Promise.resolve()
          : new Promise<void>((resolve) => {
              img.addEventListener('load', () => resolve(), { once: true });
              img.addEventListener('error', () => resolve(), { once: true });
            })
      )
    );
  };

  try {
    await waitForImages();
  } catch {}

  // Pequeno atraso para layout estabilizar
  setTimeout(() => {
    try {
      printWindow.focus();
      printWindow.print();
    } catch {}
  }, 200);
}

// Função para fazer download do PDF como arquivo
export async function downloadPDF(htmlContent: string, filename: string = 'atividades.pdf'): Promise<void> {
  // Embute imagens como data URLs
  const htmlWithInlinedImgs = await inlineImagesInHTML(htmlContent);

  // Cria um blob com o conteúdo HTML
  const blob = new Blob([htmlWithInlinedImgs], { type: 'text/html' });
  const url = URL.createObjectURL(blob);

  // Cria um link temporário para download
  const a = document.createElement('a');
  a.href = url;
  a.download = filename.replace('.pdf', '.html');
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
