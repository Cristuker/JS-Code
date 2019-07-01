//hoisting = elevação, algo que esta levando pra cima
// funciona com funções literais, não funções atribuidas a variaveis
//o JS vai jogar a declaração de variaveis pra cima porém ele atribui elas como undefined e a atribuição fica no mesmo lugar


function myFunction() {

    console.log('Antes de criar', num1)
    var num1 = 10;
    console.log('Depois de criar', num1)

}
// no caso da função acima ele faz o hoisting e coloca como undefined
//para a execução desse código o JS move a declaração da função sum para cima do chamado na hora da execução

console.log(myFunction())