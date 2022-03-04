// var => funciona em qualquer parte do código - global
// var pode ser usado antes de ser declarado
// atualmente a variavel var, não é mais utilizada.

var altura = 5;
var comprimento = 7;

area = altura * comprimento;

console.log(area); // 35
var area; // pode ser usado antes de ser declarado.

//---------------------------------------------

// let só consegue ser utilizado depois que nós declaramos,
// antes disso o código não é executado e informa um erro

let forma = "retângulo";
let altura2 = 3;
let comprimento2 = 8;

if (forma === "retângulo") {
  area2 = altura2 * comprimento2;
} else {
  area2 = (altura2 * comprimento2) / 2;
}

area2 = altura2 * comprimento2;

console.log(area2);
//let area2; =>  não pode ser usado antes de ser iniciada.

// ----------------------------------------------------------

// const => sempre quando cria essa variável ela deve ser criada com um valor inicial.

const forma1 = 'quadrado';
const altura3 = 5;
const comprimento3 = 7;

// const area3;  => deve ser declarada com um valor inicial, 
//se não apresenta erro de sintaxe.

if(forma1 === 'quadrado') {
  area3 = altura3 * comprimento3;
} else {
  area3 = (altura3 * comprimento3) / 2;
}

// const area3 = altura3 * comprimento3;
console.log(area3);
