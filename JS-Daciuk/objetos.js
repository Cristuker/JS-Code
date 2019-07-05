//Mutáveis, tem como modificar o valor, diferente de strings
//Manipulados por referencia = 
//comando delete
var obj = {
    prop1: '1',
    prop2: '2'
}

var obj2 = {
    prop1: '1',
    prop2: '2'
}
console.log(obj+''+obj2)





var objCopy = obj
objCopy === obj //retorna true por ter uma referencia de obj, se eu mudar algum dos dois objetos o outro muda automaticamente
//por ser referencia

//Crianção de objetos=========
/*
Literais var obj = {}
Como construtor (new) var newObj = new Object(); // Criar com literal ou construtor tanto faz, eles fazem a mesma coisa
com Object.create()

Object.prototyoe = prototipo do objeto que é criado, todo objeto que é criado ele herda do objeto prototipo
*/ 