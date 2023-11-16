// Problem 3: Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the given number?
//for this question i took same help from internet


function largestPrimeFactor(number) {
  let max=-1;
  
  while(number%2==0){
    max=2
    number=number/2
  }
  
  while(number%3==0){
    max=3
    number=number/3
  }
  
  for(let i=5;i<Math.sqrt(number);i=i+6){
    while(number%i==0){
      max=i
      number=number/i
    }
    
    while(number%(i+2)==0){
      max=i+2
      number=number/(i+2)
    }
  }
  
  if(number>4){
    max=number
  }
  
  console.log(max)
  return max;
}

largestPrimeFactor(13195);
