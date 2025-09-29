//Problem: The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the given number?

//Solution:

function largestPrimeFactor(number) {
  //You will need to start dividing your number starting from the smallest prime number
   let divNumber = 2;
    //This goes on until the divNumber multiplied by itself is not bigger than the given number.
    while (divNumber * divNumber <= number) 

      {
        //If the division with the number and the current divNumber is even, then the divNumber is a prime number
        if (number % divNumber === 0) 
        
          {
            
            number = number / divNumber;
          
          } 
        //If not even, check next number
        else 
          
          {
            
            divNumber++;
        
          }
    
      }
  
    return number;

}

