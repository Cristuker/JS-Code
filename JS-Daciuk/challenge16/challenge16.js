(function () {
    'use strict';
    /*
    1. Envolva todo o conteúdo desse desafio em uma IIFE.
    2. Adicione a diretiva 'use strict';
    3. Crie um arquivo index.html e adicione esse script à ele.
    */

    /*
    Declare uma variável chamada `name` que receba seu primeiro nome.
    Mostre no console todas as letras do seu nome separadas, com a frase:
    - "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
    Ex: no caso do nome ser "Fernando", deve mostrar as frases:
    - "F é a 1ª letra do meu nome."
    - "e é a 2ª letra do meu nome."
    E assim por diante, até a última.
    */
    let name = 'Cristian'
    let letters = name.split('')
    letters.map((letter, index) => {
        console.log(`${letter} é a ${index + 1}ª letra do meu nome.`)
    })
    console.log('As letras do seu nome:');
    // ?

    /*
    - Declare uma variável chamada `fullName`, que receba seu nome completo,
    escrito no formato de slug (caixa baixa e palavras separadas por um traço).
    Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
    - Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço
    por um espaço.
    - Detalhe: o código que você escrever abaixo deve funcionar para qualquer
    nome, então fique à vontade para usar as artimanhas que já viu até agora no
    curso para fazer isso funcionar corretamente :)
    - Mostre no console o nome no formato slug, e o resultado final. Use um
    console.log para cada formato.
    */
    let fullName = 'cristian-magalhães-da-silva'
    let nameWhitSpace = fullName.split('-');

    let nameComplete = nameWhitSpace.map((name, index) => {
        let newName;
        return newName = name[0].toUpperCase() + name.slice(1)
    })

    const reduceName = nameComplete.reduce((name, next) => {
        return name + ' ' + next
    })

    console.log('\nNome convertido à partir de um slug:', reduceName);
    // ?

    /*
    - Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
    cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
    ser um "e". No final, concatene com a frase: " são meus amigos.".
    O resultado final deve ficar mais ou menos assim:
    - "João, Maria, Roberto, Pedro e Marcos são meus amigos."
    - Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
    5 nomes foi somente uma sugestão ;)
    */
    const friends = ['Doutor estranho', 'Capitão América', 'Thor', 'Homem de Ferro', 'Homem Aranha'];

    let oneStringFriend = friends.reduce((name, next, index) => {
        if (friends.length - index === 1) {
            return name + ' e ' + next
        }

        return name + ' , ' + next
    })
    oneStringFriend += ' são meus amigos.'
    console.log('\nMeus amigos:', oneStringFriend);
    // ?

    /*
    Usando o replace(), faça a string "Roberto" virar "Roberta".
    Mostre o resultado no console.
    */
    let ro = 'Roberto'
    ro = ro.split('')
    const lastO = ro.lastIndexOf('o')
    ro = ro.map((letter, index) => {
        if (index === lastO) return 'a'

        return letter
    })
    ro = ro.reduce((acc, next) => {
        return acc + next
    })
    console.log('\nEra "Roberto", agora é: ', ro);
    // ?

    /*
    Mostre no console a parte "nando" da string "Fernando". Use o método que
    faz a busca do final para o início da string.
    */
    let fer = 'fernando'
    let lastA =fer.lastIndexOf('a')
    
    console.log('\nParte de uma string: ',fer.slice(--lastA));
    // ?

    /*
    Declare uma variável chamada `myName`, que receba o seu primeiro nome,
    escrito de forma natural.
    Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
    e minúsculas.
    - Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
    de qualquer tamanho, escrito de qualquer forma.
    Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
    */
   const myName = 'gabriEla'
   const myArrayName = myName.split('');
   const newMyname = myArrayName.map((letter, index ) =>{
       if(index % 2 === 0 ){
           return letter.toUpperCase();
       }

       return letter.toLowerCase()
   })

   let end = newMyname.reduce((acc, next) =>{
        return acc + next;
   })
    console.log('\nNome com letras intercaladas entre caixa alta e baixa: ',end);
    // ?
})();