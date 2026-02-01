// Fibonacci dequence - give a number "n" find the first "n" elemnet of the fibinacci sequence.

function fibonacci(n) {
  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));

// Time O(n)
// Space O(1)
