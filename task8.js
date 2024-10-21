function fibonacciReverse(n) {
    let fibo = [1, 2];
    
    // Fibonacci series
    for (let i = 2; i < n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }


    for (let i = fibo.length - 1; i >= 0; i--) {
        console.log(fibo[i]);
    }
}

fibonacciReverse(15);