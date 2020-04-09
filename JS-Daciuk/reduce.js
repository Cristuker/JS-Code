/*Reduz um array
*/

let arr = [1,2,3,4,5];
let reduce = arr.reduce((acumulado, atual, indice, array)=>{ 
    return acumulado + atual
},0);//valor acumulado
/*
1 - 0 + 1 = 1
2 - 1 + 2 = 3
3 - 3 + 3 = 6
4 - 6 + 4 = 10
5 - 10 + 5 = 15
*/
console.log(reduce)//15