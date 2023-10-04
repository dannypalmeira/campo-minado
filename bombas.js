export default function montaBombas(tamanho, bombas) {
    if (bombas > tamanho * tamanho) {
      console.log('Número de bombas não pode ser maior que o número de células no campo.');
      process.exit(1);
    }
  
    const campo = [];
  
    for (let linha = 0; linha <= tamanho; linha++) {
      campo[linha] = [];
      for (let coluna = 0; coluna <= tamanho; coluna++) {
        campo[linha][coluna] = '-';
      }
    }
  
    let celulaBomba = 0;
    while (celulaBomba < bombas) {
      const linha = Math.floor(Math.random() * tamanho) + 1;
      const coluna = Math.floor(Math.random() * tamanho) + 1;
  
      if (campo[linha][coluna] !== 'B') {
        campo[linha][coluna] = 'B';
        celulaBomba++;
      }
    }
    return campo;
  }
  
