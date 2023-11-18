// Problem 5: Smallest multiple
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

function isPrime(n){
  if(n==2 || n==3){
    return true;
  }
  if(n<2 || n%2==0){
    return false;
  }
  for(let i=5;i<Math.sqrt(n);i=i+6){
      if(n%i==0 || n%i+2==0){
        return false;
      }
  }
  return true;
}

function smallestMult(n) {
  let product=1
  for(let i=1;i<=n;i++){
    if(isPrime(i)){
      let power=Math.floor(Math.log(n)/Math.log(i))
      if(product%i!=0){
        product*=Math.pow(i,power)
      }
      
    }
  }
  console.log(product)
  return product;
}

smallestMult(1);
