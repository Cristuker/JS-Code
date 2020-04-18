(function(){
 'use strict';
    
    var obj = {
        prop1:{
            prop2:{
                prop3:{
                    prop31: 'prop31',
                    prop32: 'prop32',
                    prop33: 'prop33'
                }
            }
        }
    }

    console.log()
    // with(obj.prop1.prop2.prop3){
    //     console.log(prop31,prop32,prop33)
    // }


    let obj2 = {
        teste1: 'teste1',
        teste1: 'teste2',
        teste3: 'teste3'
    }
    console.log(obj2)

})();
