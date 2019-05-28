function main(){
    var n1 =45;
    var n2 =54;
    var n3 =65;

    TipoTriangulo(n1,n2,n3);

}
function TipoTriangulo(l1,l2,l3){
    if(l1==l2==l3){
        console.log('Equilatero');
    }
    if(l1==l2 || l2 == l3 || l3 == l1){
        console.log('isoceles');
    }
    if(l1 != l2 && l2 != l3){
        console.log('escaleno');
    }
}

main();