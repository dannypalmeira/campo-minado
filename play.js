import prompt from 'prompt-sync';
import jogar from './funcoes.js';
import montaCampo from './campo.js';
import montaBombas from './bombas.js';
const pergunte = prompt();

console.log(':: CAMPO MINADO ::');



console.log('Informe o tamanho do campo:');
const tamanho = Number(pergunte());

console.log('Informe o número de bombas:');
const bombas = Number(pergunte());

if (!isNaN(tamanho) && tamanho > 0 && !isNaN(bombas) && bombas > 0) {
  const campoJogo = montaBombas(tamanho, bombas);
  const campoRevelado = Array.from({ length: tamanho + 1 }, () =>
    Array(tamanho + 1).fill('-')
  );
  const result = montaCampo(tamanho, campoRevelado);
  console.log(result);
  jogar(tamanho, campoJogo, campoRevelado);
} else {
  console.log('Por favor, informe números válidos para o tamanho e as bombas.');
}
