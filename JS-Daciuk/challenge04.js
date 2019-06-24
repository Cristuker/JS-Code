function addPessoas(nPessoas){

    if(carro.quantidadePessoas >= 5 ){
        console.log('o carro esta lotado, o maimo são 5');

    }else{
        //atribuindo pessoas ao carro
        if(nPessoas <= carro.assentos){
            carro.quantidadePessoas = carro.quantidadePessoas+nPessoas;
            carro.assentos = carro.assentos-nPessoas;
        }else{
            console.log('atribua menos pessoas para esse veiculo');
        }
        //mostrando quantas pessoas tem
        console.log('Já temos '+carro.quantidadePessoas+' pessoas no carro');
        //verificando se o carro esta lotado
        if(carro.quantidadePessoas >= 5){
            console.log('o carro esta lotado');
        }
        //mostrando quantas pessoas cabem no carro
        
            console.log('Só cabe mais '+carro.assentos+' pessoa(s)');
    }
    
}

