function adder(x) {
    function addOther(y) {
        return x + y;
    };
    return addOther;
}

var teste = adder(7)

console.log(adder(4)(5))