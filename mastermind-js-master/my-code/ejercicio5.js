let month = "Febrero";

switch (month.toLowerCase()) {
    case "enero": case "marzo": case "mayo": case "julio": case "agosto": case "octubre": case "diciembre":
        console.log("El mes %s tiene 31 días", month);
        break;
    case "febrero":
        console.log("El mes %s tiene 28 días", month);
        break;
    case "abril": case "junio": case "septiembre": case "noviembre":
        console.log("El mes %s tiene 30 días", month);
        break;
    default:
        console.log("No has introducido un mes correcto");
}