// Find the prime number of given numbers "n"

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  if (n % 2 === 0) {
    return false;
  }
  return true;
}

console.log(isPrime(1)); //false
console.log(isPrime(5)); //true
console.log(isPrime(4)); // false

// time : O(n)
//Space : O(1)
