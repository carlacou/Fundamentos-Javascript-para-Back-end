// log => registro
// podemos colocar qualquer informação dentro desse registro, podendo ser um número, uma string, uma variável, o que quisermos.

minhaVar = true;

console.log(245);
console.log("Sou um texto");
console.log(minhaVar);

// tratamento de erro!
// É sempre uma boa prática nós utilizarmos o console,
// tanto quanto log quanto error, para sair da nossa aplicação,
// para sempre sabermos o que está acontecendo dentro dela.

console.error("deu erro!");

/*
  Entre os outros métodos, existem:

console.error() para exibir mensagens de erro;
console.table() para visualizar de forma mais organizada informações tabulares;
console.time() e console.timeEnd() para temporizar período que uma operação de código leva para ser iniciada e concluída;
console.trace() para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.
*/
