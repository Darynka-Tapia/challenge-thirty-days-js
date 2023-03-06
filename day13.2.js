function searchValue(array, value) {
    // Tu código aquí 👈
    const ubicacion = {
        row: null, 
        column: null
    }
    array.forEach((item, row) => {
        item.forEach((subitem, col) => {
            if(subitem === value) {
                ubicacion.row = row;
                ubicacion.column = col;
            }
        });
    });
    if(ubicacion.row === null || ubicacion.column === null){
        throw new Error("Valor no encontrado");
    }
    return ubicacion;
}

const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

const value = 45
console.log(searchValue(array, value))
