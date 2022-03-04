// comparação implícita => ==

const numero = 5;
const texto = "5";

console.log(numero == texto); // true
console.log(numero === texto); // false

// typeof => operador para descobrir o tipo de dado que está sendo salvo na variável

console.log(typeof numero); // number
console.log(typeof texto); // string

// == só compara o valor
// === compara o valor e o tipo de dado => boas práticas

// boas práticas é utilizar a conversão explícita
Number()
String()