let x = 3;
let y = 5;
let aux;

aux = x;
x = y;
y = aux;

console.log("x = %i\ny = %i", x, y);

// Destructuring

[x, y] = [y, x];

console.log("x = %i\ny = %i", x, y);
