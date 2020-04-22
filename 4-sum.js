/*
Sum
If we sum all even numbers between 50 and 100 what is the result?
Build a function, that calculates the sum of all even numbers between a start number and end number
*/
function sumAllEven(number) {
    sum = 0;
    for (i = number; i <= 100; i++) {
        if (i % 2 === 0) {
            sum += i;

        }
    }
    return sum;
}

console.log(sumAllEven(50));