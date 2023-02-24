// CALCULADORA DE LA MASA CORPORAL
// masa/estatura²

let i, j;

for (i = 165; i <= 195; i += 5) 
for (j = i - 165 + 60; j <= i - 165 + 80; j += 10)
    console.log(`${i}cm --> ${j}kg --> ${j/(i*i)}`);