/* function adder(x) {
    function addOther(y) {
        return x + y;
    };
    return addOther;
}

var teste = adder(7)

console.log(adder(4)(5)) */


//=========Passando Objetos como parametros============

/* var car = {
    color: 'yellow'
};

function getCarColor(mycar) {
    return mycar.color;
}

console.log(getCarColor(car)) */

function showOtherFunction(func) {
    return (func());
}

function oi() {
    return 'retornando';
}

console.log(showOtherFunction(function() {
    return 'Functional JS'
}));