// function soma() {
//   return 2 + 2;
// }

// console.log(soma());

// function somaOutroNumero() {
//   return 50 + 25;
// }

// console.log(somaOutroNumero());
//------------------------------------

//Parametros de função
function soma(num1, num2) {
  return num1 + num2;
}
// console.log(soma(36, 39))
// console.log(soma(15, 60))
// console.log(soma(-8, 50))

//------------------------------------

// parametros x argumentos
// Parâmetros x argumentos: Na prática se referem ao mesmo tipo de dado; 
// algumas documentações se referem a parâmetros no momento em que a função é definida
// e argumentos como os dados que utilizamos para executar a função

// ordem dos parametros

function nomeIdade(nome, idade) {
  return `meu nome é ${nome} e minha idade é ${idade}`;
}
// console.log(nomeIdade(40, "Luciana")) // meu nome é 40 e minha idade é Luciana

//------------------------------------

function soma(numero1, numero2) {
  return numero1 + numero2;
}
function multiplica(numero1, numero2) {
  return numero1 * numero2;
}

// console.log(multiplica(soma(4, 5), soma(3, 3))); // 54
console.log(multiplica(soma(4, 5))); // NaN