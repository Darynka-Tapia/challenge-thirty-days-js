function printTriangle(size, character) {
    // Tu código aquí 👈
    let triangulo = '';
    for(let i = 1; i <= size; i++){
        let line = '';
        const blanckcharacter = size - i;
        for(let n = 1; n <= size; n++){
            line += n <= blanckcharacter ? " " : `${character}`;
        }
        const addLineBrak = i < size ? '\n' : '';
        triangulo += `${line}${addLineBrak}`
    }
    return triangulo;
}

console.log(printTriangle(7, "#"))
