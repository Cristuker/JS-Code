/*
Para o forEach() vc passa uma função como parametro e nessa função vc passa 3 parametros e dentro da função vc faz o código de repetição
só passa os parametros que vc vai ultilizar pq n da erro nenhum
*/ 
var arr = [1,2,3,4,5,6,7];

arr.forEach(function(item, index,array){
    console.log(`Posição: ${index} número: ${item}`)
});

/* 
.every() -> retorna sempre true ou false baseado no retorno da função que vc passa pra ele, sempre recebe um parametro
serve para testar itens de um array

*/

var every = arr.every(function(item){
    //ele testou se todos os itens do array são menores que 5, se sim ele retorna true, se n false
    return item < 20;
})

console.log(every)

/* 
.some() -> faz a mesma coisa do metodo every, se pelo menos um item for true ele retorna true, diferente do every que precisa que todos os itens sejam trues

*/

var some = arr.some(function(item){
    return item % 2 === 0;
})