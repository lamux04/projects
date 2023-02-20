let vector = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const productoEscalar = (array, number) => {
    let i;
    for (i = 0; i < array.length; i++) array[i] *= number;
}

productoEscalar(vector, 3);

console.log(vector);