/*Reduz um array
reduceRight faz a mesma coisa que o reduce porém da direita para esquerda
*/

let arr = [1,2,3,4,5];

let reduce = arr.reduce((acumulado, atual, indice, array)=>{ 
    return acumulado + atual
},0);//valor acumulado inicial, caso não passe nenhum valor o acumulado é o primeiro valor
/*
1 - 0 + 1 = 1
2 - 1 + 2 = 3
3 - 3 + 3 = 6
4 - 6 + 4 = 10
5 - 10 + 5 = 15
*/
console.log(reduce) //15

let arry = ['C','r','i','s','t','i','a','n'];

console.log(arry.reduce((acumulado,atual)=>{
    return acumulado + atual;
}))

console.log(arry.reduceRight((acumulado,atual)=>{
    return acumulado + atual;
}))

console.log('----indexof----')

console.log( arry.indexOf('i',3) );

/**
 * o indexOf procura pelo conteudo que passei e retorna a posição dele
 * O segundo parametro é de qual posição ele deve começar a busca
 * 
 * lastIndexOf  - faz a mesma coisa que o indexOf, mas ele procura do final para o inicio
 * 
 * Array.isArray() testa se é um array msm
 * 
 */

console.log( `last index of ${arry.indexOf('i')}` );
