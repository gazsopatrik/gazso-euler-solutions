// Problem: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000. 

// Solution:

function multiples(number) {
  //We need to create a sum variable to calculate the sum
  let sum = 0; 
  
  for (let i = 0; i < number; i++) 
    
    {
      //We need to check if i is dividable by 3 and 5
      if (i % 3 === 0 || i % 5 === 0) 
      
        {
          //If it is, then we add it to the sum. If not, then i++
          sum += i;
      
        }
    
    }
  
  return(sum);

}

multiples(1000);
