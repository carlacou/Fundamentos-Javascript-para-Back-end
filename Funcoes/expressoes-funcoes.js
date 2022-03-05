//declaração de função

// function minhaFunção(param) {
//   // bloco de código
// }

// minhaFunção('param');

//----------------------------------------------------

// expressão de função

// const soma = function(num1, num2) {return num1 + num2}
// console.log(soma(3, 7));

//----------------------------------------------------

// diferença principal: HOINSTING
// funções e var são 'listadas' no topo do arquivo

console.log(apresentar())
function apresentar() {
  return 'olá';
}

console.log(soma(3, 7)); // não consegue acessar soma antes de ser inicializada
const soma = function(num1, num2) {return num1 + num2}