import prompt from 'prompt-sync';
import montaCampo from './campo.js';
import bombasExistentes from './bombasExistentes.js';
import ganhou from './bombasExistentes.js';
const pergunte = prompt();

export default function jogar(tamanho, campoJogo, campoRevelado) {
    console.log('Jogar:');
    const linha = Number(pergunte('Informe a linha: '));
    const coluna = Number(pergunte('Informe a coluna: '));
    const move = pergunte('Informe a jogada (livre, bomba, or desmarcar): ');
  
    if (
      isNaN(linha) ||
      isNaN(coluna) ||
      linha < 1 ||
      linha > tamanho ||
      coluna < 1 ||
      coluna > tamanho
    ) {
      console.log('Coordenadas inválidas. Tente novamente.');
      console.log('');
    } else {
      if (campoRevelado[linha][coluna] !== '-' && move !== 'desmarcar') {
        console.log('Essa célula já foi revelada.');
        console.log('');
      } else {
        if (move === 'livre') {
          if (campoJogo[linha][coluna] === 'B') {
            console.log('Você encontrou uma bomba! Fim de jogo.');
            
            const result = montaCampo(tamanho, campoJogo);
            console.log(result);
            process.exit(0);
          } else {
            
            const contandoBombas = bombasExistentes(tamanho, campoJogo, linha, coluna);
            campoRevelado[linha][coluna] = contandoBombas || '0';
          }
        } else if (move === 'bomba') {
          campoRevelado[linha][coluna] = 'X'; 
        } else if (move === 'desmarcar') {
          if (campoRevelado[linha][coluna] === 'X') {
            campoRevelado[linha][coluna] = '-'; 
          } else {
            console.log('Você só pode desmarcar células marcadas com "X".');
          }
        } else {
          console.log('Jogada inválida. Use "livre," "bomba," or "desmarcar."');
        }
      }
    }
  
    const result = montaCampo(tamanho, campoRevelado);
    console.log(result);
  
    if (ganhou(tamanho, campoJogo, campoRevelado)) {
      console.log('Parabéns! Você venceu o jogo!');
      
      const result = montaCampo(tamanho, campoJogo);
      console.log(result);
      process.exit(0);
    } else {
      jogar(tamanho, campoJogo, campoRevelado);
    }
  }


  