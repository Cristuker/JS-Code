/*
Crie um array com 5 items (tipos variados).
*/
// ?
var arr = ['oi',25,true,function soma(x,y){return x+y},{carro: 'preto'}];
/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
// ?
function addItem(item){
    arr.push(item);
    return arr;
}
/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
// ?
var arr2 = ['teste',true,'moto'];
arr.push(arr2)
arr
/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
// ?
console.log('O segundo elemento desse Array é '+arr[6][1])
/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
// ?
console.log('O primeiro array tem '+arr.length)
/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
// ?
console.log('O segundo array tem '+arr2.length)
/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var n = 10;
while(n <=20){
n%2 ==0? console.log( 'Números pares entre 10 e 20:'+n ) : ''; 
n++
}

// ?

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
var n = 10;
while(n <=20){
n%2 ==1? console.log( 'Números ímpares entre 10 e 20:' ) : ''; 
n++
}

// ?

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/

for(var n =100; n <=120;n++){
n%2 ==0? console.log( 'Números pares entre 100 e 120: '+n ) : ''; 
}

// ?
for(var n = 100; n<=120; n++){
n%2==1?console.log( 'Números ímpares entre 111 e 125: '+n) :'';
}

// ?