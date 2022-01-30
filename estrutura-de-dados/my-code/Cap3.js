// @ts-check

const tamanho = 5;
const int16 = new Int16Array(tamanho);
let array16 = [];
let rico = true;

// rico.forEach(element => {
    // console.log(element)
// });

array16.length = tamanho;

for (let index = 0; index < tamanho; index++) {
    int16[index] = index + 1
    
    
    
}

console.log(int16, rico)
const numbers = [0,0,0,0,0,0].fill(1);
console.log(numbers)
const iterator = numbers[Symbol.iterator]();

let averageTemp = [];

averageTemp[0] = [];
averageTemp[0][0] = 72;
averageTemp[0][1] = 75;
averageTemp[0][2] = 79;
averageTemp[0][3] = 79;
averageTemp[0][4] = 81;
averageTemp[0][5] = 81;

averageTemp[1] = [];
averageTemp[1][0] = 81;
averageTemp[1][1] = 79;
averageTemp[1][2] = 75;
averageTemp[1][3] = 75;
averageTemp[1][4] = 73;
averageTemp[1][5] = 73;

console.table(averageTemp)
console.table(numbers)