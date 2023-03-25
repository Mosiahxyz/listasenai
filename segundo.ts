var entrada = require("readline-sync");

var l: number = parseFloat(entrada.question("Quanto custa o litro de gasolina?: "));
var rs: number = parseFloat(entrada.question("Quantos reais voce pretende gastar?: "));

console.log("Você pode abastecer: " + (l*rs) + (" litros"));


