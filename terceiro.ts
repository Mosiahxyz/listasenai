var entrada = require("readline-sync");

var cavalos: number = parseFloat(entrada.question("Quantos cavalos voce tem?: "));
console.log("A compra do mês fica em: " + (36*cavalos));


