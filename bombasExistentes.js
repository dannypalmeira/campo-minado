export default function bombasExistentes(tamanho, campoJogo, linha, coluna) {
    let contandoBombas = 0;

    const direcao = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    for (const [dx, dy] of direcao) {
        const newRow = linha + dx;
        const newCol = coluna + dy;

        if (newRow >= 1 && newRow <= tamanho &&
            newCol >= 1 && newCol <= tamanho &&
            campoJogo[newRow][newCol] === 'B') {
            contandoBombas++;
        }
    }

    return contandoBombas;
}


