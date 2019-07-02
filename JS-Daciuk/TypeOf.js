//TypeOf operador unario === só ele e um operando

console.log('Undefined: ' + typeof undefined);
console.log('Number: ' + typeof 10);
console.log('String: ' + typeof 'cristian')
    //Qualquer outro objeto que não uma function ele vai retornar um object
console.log('Objeto: ' + typeof {});
console.log('Array: ' + typeof []);
console.log('Null: ' + typeof null); //retorna objeto mas é um erro de implementação
//NaN tbm é um numero
console.log('NaN: ' + typeof NaN);
//Só confiar para valores primitivos