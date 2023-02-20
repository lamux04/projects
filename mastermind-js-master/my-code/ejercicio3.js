let a = 25, b = 215; c = 0; d = 10;

const haySolape = (a, b, c, d) => {
    return !(a < b && c < d && (b < c || d < a))
}

console.log(haySolape (a, b, c, d));