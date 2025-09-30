//Problem: The sum of the squares of the first ten natural numbers is,
//1² + 2² + ... + 10² = 385
//The square of the sum of the first ten natural numbers is,
//(1 + 2 + ... + 10)² = 55² = 3025
//Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
//Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

//solution

function sumSquareDifference(n) 
  {
  //The two variables will contain the sum of the square, and the square of the sum
    let sumOfTheS=0;
  
    let sqrOfTheS=0;
    //We simply calculate the sums with this loop
    for(let i=1; i<=n; i++)

      {
        
        sumOfTheS+=i*i;
        
        sqrOfTheS+=i;

      }
    //This calculates the square of the sum
    sqrOfTheS=sqrOfTheS * sqrOfTheS;
    //and this one calculates the difference
    let diff=sqrOfTheS-sumOfTheS
  
  return diff;
}
