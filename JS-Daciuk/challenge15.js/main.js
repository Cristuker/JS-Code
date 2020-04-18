(function(){/*
Envolva todo o código desse desafio em uma IIFE.
Crie um arquivo chamado index.html e adicione esse script ao HTML.
*/

/*
Crie uma função construtora chamada "Person". Esse construtor deve ter
as seguintes características:
- Deve receber 3 parâmetros: `name`, `lastName` e `age`;
- Deverá ter 3 propriedades:
  - `name` - que receberá o valor do parâmetro `name`;
  - `lastName` - que receberá o valor do parâmetro `lastName`;
  - `age` - que receberá o valor do parâmetro `age`;
- Deverá ter 3 métodos:
  - `getFullName` - que deve retornar o nome completo do objeto criado,
  no formato:
    - "[NAME] [LASTNAME]"
  - `getAge` - que deverá retornar a idade (age);
  - `addAge` - esse método não deverá ter nenhum parâmetro, mas ao invocá-lo
  iremos passar um único argumento, que é a quantidade de anos que devem ser
  adicionados à idade original (age). Esse método deverá retornar o objeto
  que será instanciado.
*/
// ?

function Person (name, lastname, age){
    this.name = name;
    this.lastname = lastname;
    this.age = age

    this.getFullname = () => {
        return `${this.name} ${this.lastname}`
    }

    this.getAge = () => {
        return this.age
    }

    this.addAge = function() {
        return arguments[0] + this.age
    }
}

/*
Crie 3 novos objetos usando o construtor acima. Os objetos serão novas
pessoas. As variáveis deverão ser o primeiro nome da pessoa. Passe os
parâmetros corretamente para o construtor para criar as novas pessoas.
Mostre as 3 novas pessoas criadas no console (Um console.log por pessoa).
*/

let Cristian = new Person('Cristian','Silva',21)
let Laiane = new Person('Laiane','Matias',21)
let Joao = new Person('João','Silva',52)

console.log( 'Novas pessoas criadas à partir de Person: ',Cristian );
console.log( 'Novas pessoas criadas à partir de Person:' ,Laiane );
console.log( 'Novas pessoas criadas à partir de Person:',Joao  );

// ?

/*
Mostre no console o nome completo de cada pessoa.
*/
console.log( '\nNomes das pessoas:', Cristian.getFullname());
console.log( '\nNomes das pessoas:', Laiane.getFullname());
console.log( '\nNomes das pessoas:', Joao.getFullname());
// ?

/*
Mostre no console as idades de cada pessoa, com a frase:
- "[NOME COMPLETO] tem [IDADE] anos."
*/
console.log( '\nIdade das pessoas:',`${Cristian.getFullname()} tem ${Cristian.getAge()} anos.` );
console.log( '\nIdade das pessoas:',`${Laiane.getFullname()} tem ${Laiane.getAge()} anos.` );
console.log( '\nIdade das pessoas:',`${Joao.getFullname()} tem ${Joao.getAge()} anos.` );

// ?

/*
Adicione alguns anos à cada pessoa, e mostre no console a nova idade de
cada um. A frase deverá ser no formato:
- "[NOME COMPLETO] agora tem [NOVA IDADE] anos."
*/
console.log( '\nNova idade das pessoas:', `${Cristian.getFullname()} agora tem ${Cristian.addAge(10)} anos.` );
console.log( '\nNova idade das pessoas:', `${Laiane.getFullname()} agora tem ${Laiane.addAge(5)} anos.` );
console.log( '\nNova idade das pessoas:', `${Joao.getFullname()} agora tem ${Joao.addAge(3)} anos.` );


// ?
})()