(function () {
    /*
    Envolva todo o código desse desafio em uma IIFE.
    */

    /*
    Crie um array e mostre no console a representação em String desse array,
    usando o método visto na aula 13.
    */
    const myVar = [1, 'oi', true, {}];

    console.log('O array em formato de string é: ', myVar.toString());
    // ?

    /*
    Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
    Cada array deve conter os estados dessa região.
    */
    // ?
    let sul = ['Paraná', 'Rio Grande do Sul', 'Santa Catarina'];
    let suldeste = ['São Paulo', 'Rio de Janeiro', 'Espírito Santo', 'Minas Gerais'];

    /*
    Crie uma variável chamada `brasil`, que irá receber as duas regiões
    concatenadas. Mostre o `brasil` no console.
    */
    let Brasil = sul.concat(suldeste)
    console.log('\nAlguns Estados do Brasil: ', Brasil);
    // ?


    /*
    Adicione 3 novos estados da região Norte no início do array e mostre no console.
    */
    let norte = ['Amazonas', 'Roraima', 'Amapá', 'Pará', 'Tocantins', 'Rondônia', 'Acre'];
    Brasil = Brasil.concat(norte);
    console.log('\nMais estados adicionados: ', Brasil);
    // ?

    /*
    Remova o primeiro estado do array `brasil` e mostre-o no console.
    */
    Brasil.shift();
    console.log('\nEstado removido: ', Brasil);
    // ?

    /*
    Crie um novo array chamado `newSul`, que receba somente os estados do sul,
    pegando do array `brasil`. Não remova esses itens de `brasil`.
    */
    // ?
    let newSul = Brasil.slice(0, 2);

    /*
    Mostre no console os estados que estão em `newSul`.
    */
    console.log('\nEstados do Sul do Brasil: ', newSul);
    // ?

    /*
    Mostre no console todos os estados que estão em `brasil`.
    */
    console.log('\nAlguns Estados do Brasil: ', Brasil);
    // ?

    /*
    Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
    */
    // ?
    let nordeste = ['Maranhão', 'Piauí', 'Ceará', 'Rio Grande do Norte', 'Pernambuco', 'Paraíba', 'Sergipe', 'Alagoas', 'Bahia'];

    /*
    Mostre no console os estados do nordeste.
    */
    console.log('\nEstados do Nordeste: ', nordeste);
    // ?

    /*
    Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
    chamada `newSudeste`.
    */
    // ?
    let newSudeste = [];
    for (state in suldeste) {
        newSudeste.push(state);
    }
    Brasil.slice(2, 6);

    /*
    Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
    ficar no mesmo nível que os estados já existentes, não em um array separado.
    */
    // ?
    Brasil.concat(nordeste);

    /*
    Mostre no console os estados em `newSudeste`.
    */
    console.log('\nEstados em newSudeste: ', newSudeste);
    // ?

    /*
    Mostre no console os estados do `brasil`.
    */
    console.log('\nAlguns estados do Brasil: ', Brasil);
    // ?

    /*
    usando forEach, percorra o array `brasil` e gere um novo array chamado
    `newBrasil`. Esse array deve ter cada item como um objeto, com as
    propriedades:
    - `id`: que será o índice do array `brasil`,
    - `estado`: que será o estado do array `brasil`.
    */
    // ?
    let newBrasil = [];

    Brasil.forEach((state, index) => {
        newBrasil.push({
            id: index,
            estado: state
        })
    })

    /*
    Mostre o array `newBrasil` no console
    */
    console.log('\nnewBrasil: ', newBrasil);
    // ?

    /*
    Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
    atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
    - "Sim, todos os estados tem mais de 7 letras!"
    Senão, mostre no console:
    - "Nem todos os estados tem mais de 7 letras!"
    */
    console.log('\nTodos os estados de `brasil` tem mais de 7 letras?');

    const every = Brasil.every(state => {
        return state.length >= 7;
    })
    // ?
    console.log(every ? "Sim, todos os estados tem mais de 7 letras!" : "Nem todos os estados tem mais de 7 letras!");
    /*
    Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
    resultado à uma variável. Se esse estado existir no array, mostrar a frase no
    console:
    - "Ceará está incluído!"
    Senão, mostrar a frase:
    - "Ceará não foi incluído :("
    */
    const hasCeara = Brasil.every(state => {
        return state === 'Ceará';
    })
    console.log('\nCeará está incluído em `brasil`?', hasCeara ? 'Ceará está incluído!' : 'Ceará não foi incluído :(');
    // ?

    /*
    Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
    objeto desse array, e adicione a frase abaixo na propriedade `estado`:
    - "[ESTADO] pertence ao Brasil."
    Atribua o novo array a uma variável chamada `map`.
    */
    // ?
    let map2 = newBrasil.map((state, index) => {
        state.id++;
        state.estado = `${state.estado} pertence ao Brasil.`
        return state;
    })
    /*
    Mostre no console o array criado acima:
    */
    console.log('\nnewBrasil agora com mais informações: ', map2);
    // ?

    /*
    Filtre o array criado acima, retornando somente os estados que tiverem
    ID par. Atribua o valor à uma variável chamada `filter`.
    */
    // ?
    let map3 = map2.filter(state => {
        return state.id % 2 === 0;
    })
    /*
    Mostre o array filtrado acima no console.
    */
    console.log('\nEstados com ID par: ', map3);
    // ?
})();