// tipo de dado
// booleanos


// conversao implícita

const numero = 456;
const numeroString = '456';

console.log(numero === numeroString);
console.log(numero == numeroString);

console.log(numero + numeroString);


// conversao explícita
// Number() => conversão de string para numero
// String()

console.log(numero + Number(numeroString));

