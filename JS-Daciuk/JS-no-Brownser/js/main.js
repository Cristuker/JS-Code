// (function(){
//     function myFunc(){
//         return this
//     }
//     var obj = {
//         hi: this
//     }
//     function MyConstructor (){
//         this.prop1 = 'prop1',
//         this.prop2 ='prop2'
//     } 
//     var cont = new MyConstructor()
//     console.log('new', cont)
//     /**
//      * arguments = array like, funciona como um array mas n é uma rray
//      */
// })();

(function(){
function myArgs(arg1,arg2){
    return arguments
}
console.log(myArgs(12,34,21))
})();