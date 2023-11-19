// Problem 9: Special Pythagorean triplet
// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.

function specialPythagoreanTriplet(n) {
 let sumOfabc = n;
 for(let i=1;i<=n-2;i++){
   for(let j=i+1;j<=n-1;j++){
     for(let k=j+1;k<=n;k++){
       if(i+j+k==n){
            if(i*i+j*j==k*k){
              return i*j*k
            }
       }
     }
   }
 }
}

specialPythagoreanTriplet(1000);
