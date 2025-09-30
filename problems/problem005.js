//Problem: 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

//Solution

function smallestMult(n) 
  
  {
    
    let smallestPoss=1;
    //For this problem, I have decided to go with a brute-force solution
    for(let i=1; i<=n; i++)
    
      {
      
        if(smallestPoss % i !== 0)
        
          {
            //If our current smallestPoss number is not dividable by i, the for loop gets reset.
            smallestPoss++
            
            i=0
          
          }
      
      }
  
    return smallestPoss;

  }

