/*
Array em JS é um objeto disfarçado

.pop() -> remove item do final do array

.join('') -> junta os itens do array em uma string, cada item separado por virgula -> se eu passar algo por parametro, esse sera o separador dos itens
que por padrão é a virgula

.reverse() -> ele altera a ordem do array e caso queira que ele volte ao normal o reverse() tem que ser usado novamente

.sort() -> inverte o array principal / ordena por ordem alfabetica 

.toString() -> converte objeto para String funciona para objeto e para array, porém quando usado com array ele RETORNA os itens do array em string
separados por virgula, porém ele n muda o array em si, só retorna ele em String separado por virgula

.concat(x) -> concatena o parametro ao array, ele não modifica o array principal, ele gera um novo array com o parametro passado
diferente do .push(x) que modifica o array principal, tbm posso usar para concatenar array tudo em um só e n quebra array multidimensionais

.unshift() -> adiciona um item ao inicio do array, modifica o array principal

.shift() -> remove o primeiro item do array

slice(x,y) or .slice(x) -> retorna um pedaço do array que a gente selecionar primeiro parametro é o inicio da onde vai pegar o segundo o final
não modifica o array principal ele retorna outro array com os itens selecionados e o ultimo parametro ele n retorna, apenas um antes
se usar numeros negativos .slice(-2) ele pega os dois ultimos itens do array

.splice() -> ele modifica o array principal, ele modifica e adiciona itens do array se vc usar um unico parametro nesse metodo 
ele retorna e remove os itens desse ponto em diante do array e com 2 parametros vc escolhe onde começa e termina a remoção de itens do array 




*/