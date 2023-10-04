
export default function ganhou(tamanho, campoJogo, campoRevelado) {
    for (let linha = 1; linha <= tamanho; linha++) {
        for (let coluna = 1; coluna <= tamanho; coluna++) {
            if (campoJogo[linha][coluna] === 'B' && campoRevelado[linha][coluna] !== 'X') {
                return false;
            }
        }
    }
    return true;
}
