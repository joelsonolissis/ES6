function soma(a){
    return function(b){
        return a + b;
    }
}

const somaC = soma(2);

console.log(somaC(3));
console.log(somaC(4));
console.log(somaC(5));
