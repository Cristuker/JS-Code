// Immediately-invoked function expression == Função auto executavel
/*function sum() {
    return 1 + 2;
}

console.log(sum())

var sum2 = function() {
    return 3 + 2;
}

console.log(sum2())

var sum3 = function otherSum() {
    return 5 + 8;
}

console.log(sum3())*/
//console.log(otherSum())

//para executar uma função ela tem que se tornar uma expressão, envolvendo ela de ()

//JS le a função e a executa automaticamente
//Vantagem força escopo local
(function() {
    console.log(1 + 2);
})();

//Também funciona assim
//Escopo local em JS você compartilha info com todos os outros arquivos em JS

(function() {
    console.log(8 + 2);
}());