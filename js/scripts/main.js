function reverse (number) {
    number += '';
    let reverseNumber = '';
    for (let i=number.length-1; i>=0; i--) {
        reverseNumber += number[i];
    }
    return +reverseNumber
}
console.log(reverse(5493));