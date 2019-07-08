/*
    Mutáveis, tem como modificar o valor, diferente de strings
    Manipulados por referencia = 
    comando delete
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

    por ser referencia

    Crianção de objetos=========

    Literais var obj = {}
    Como construtor (new) var newObj = new Object(); // Criar com literal ou construtor tanto faz, eles fazem a mesma coisa
    com Object.create()

    Object.prototype = prototipo do objeto que é criado, todo objeto que é criado ele herda do objeto prototipo

    Quando vc criar um objeto passando um outro objeto para o Object.create() o novo objeto herda as propriedades do que foi passado por parametro
    e quando vc muda o prinicpal o segundo obj tbm muda e se vc mudar uma propriedade do objeto secundario a do principal permanece a mesma

    Pensar em objto pai -> filho -> filho


    hasOwnProperty() == testa se a propriedade é do objeto mesmo e não herdada , se for ele retorna true caso contrario false, a prop tem que
    ser passada como string ex: hasOwnProperty('x')


    =================================Outros metodos=====================
    Object.keys(obj) ele retorna um array com as propriedades do objeto
    obj.isPrototypeOf(ob2) = ele verifica se o parametro é um prototipo do primeiro obj e retorna um booleano
    var str = JSON.stringify(obj) = transforma o objeto em uma String no formato JSON
    JSON.parse(str) = transforma o JSON em objeto dnv

*/