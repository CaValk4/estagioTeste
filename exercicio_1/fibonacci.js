function checkFibonacci (num){
    let a = 0;
    let b = 1;
    while (b < num){
        let varTemp = b;
        b += a;
        a = varTemp;
    }

    return b === num;
}

console.log(checkFibonacci(13)); //saida true
console.log(checkFibonacci(145)); //saida false