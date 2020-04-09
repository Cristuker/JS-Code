//do while
var cont = 1
console.log('===== do - while =====')
do{
    console.log( cont ++)
}while( cont < 10);
console.log('===== For ====')
for(var i =0; i <=10; i++){
    console.log(i)
}
//for
console.log('==== for in ====')
var car ={
    brand: 'VW',
    model: 'gol',
    year: 2013
};
// for in serve para percorrer propriedades de objetos e é mais lento que o for normal
for(var prop in car){
    console.log('props de carro '+car[prop])
}
//=====outra forma de usar o in
console.log('year in car?', 'year' in car)
console.log('doors in car?', 'doors' in car)

//outros tipo de loops


for(prop in car){
    console.log('prop: ', car[prop])
}