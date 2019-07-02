/*O que é?
Valores primitivos não são objetos == String, boolean, number...

Wrapper == Involtorio(involver){
    Quando eu uso name.length sem ter atribuido como um objeto usando o new String
    o JS 'envolve essa string' e a trata como um objeto para que eu possa usar a propriedade
    length e depois disso descarta
}

Se tem propriedades e metodos é objeto, se não tiver, não é objeto

======
Construtores em JS são os que criam novos objetos;
 
var name = new String('Cristian')

var age = new Number(20)

var ninja = new Boolean(true)

Para usar contrtutor vc usa a palavra chave ->new<- e depois o construtor ^

--------
Qaudno vc cria assim -> var name = new String('Cristian')
Sempre vai ser um objeto nunca uma String literal

valueOf() -> valor real

======================
Quando usado sem o new

Ex: var name = String(30) <- Serve para conversor de tipo

*/



var name = 'Cristian'
console.log('Literal')
console.log(name)
console.log(name.length)
console.log('--------------------')
var nome = new String('Silva')
console.log('Objetos')
console.log(nome)
console.log(nome.length)