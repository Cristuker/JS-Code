//.map();
/*
ele retorna um novo array
*/
var arr = [1,2,3,4,5];

var map = arr.map(function(item, index, array){
    return item+1;
});

console.log(map);
console.log(arr)

/*.filter() -> ele filtra o array e retorna apenas a condição, não modifica o array principal


*/
var filter = arr.filter(function(item,index,array){
    return item > 2
})
console.log(filter)
