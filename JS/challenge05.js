function book(bookName){
    var allbooks ={
        'Segredos do ninja ':{
            quantidadedePaginas:220,
            autor:'Não fui eu',
            editora:'alfabooks'
        },
        'Agora vai':{
            quantidadedePaginas:488,
            autor:'EU',
            editora:'Novatec'
        },
        'Ultimato':{
            quantidadedePaginas:'270',
            autor:'alguem ai',
            editora:'photoshop'
        }
    };

    return !bookName? allbooks: allbooks[bookName]; 
 
}