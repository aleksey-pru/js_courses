function factorial(n) {
    let fact = 1;
    if (n==0) return fact;
    for(let i=1; i<=n; i++) {
        fact *= i;
    }
    return fact;
}
let a = factorial(5);
console.log(a);