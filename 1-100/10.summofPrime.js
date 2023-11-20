// Problem 10: Summation of primes
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below n.

function isPrime(n){
  if (n<2 || !isFinite(n) || isNaN(n)) {
    return false;
  }
  let x=Math.sqrt(n);
  for(let i=2;i<=x;i++){
    if(n%i==0){
      return false
    }
  }
  return true
  
}

function primeSummation(n) {
  let sum=0
  for(let i=1;i<n;i++){
    if(isPrime(i)){
       sum+=i
    }
  }
  return sum;
}

primeSummation(17);
