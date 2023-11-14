function multiplesOf3and5(number) {
  
  let n3=Math.floor((number-1)/3)
  
  let n5=Math.floor((number-1)/5)
  
  let n15=Math.floor((number-1)/15)

  let sum3=3*n3*(n3+1)/2

  let sum5=5*n5*(n5+1)/2

  let sum15=15*n15*(n15+1)/2

  let sum=sum3+sum5-sum15
  
  return sum
}

multiplesOf3and5(1000);
