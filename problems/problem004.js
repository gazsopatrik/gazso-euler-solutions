//Problem: A palindromic number reads the same both ways. 
//The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//Find the largest palindrome made from the product of two n-digit numbers.

//Solution:

function findLargestPalindromeProduct(n) {
    // The biggest n-digit number (e.g., 99 for 2 digits)
    const highestFactor = 10 ** n - 1;
    // The smallest n-digit number (e.g., 10 for 2 digits)
    const lowestFactor = 10 ** (n - 1);

    // We'll store the largest palindrome we find
    let highestPalindrome = 0;

    // Loop from big to small so we find bigger products first
    for (let firstFactor = highestFactor; firstFactor >= lowestFactor; firstFactor--) {
        // Start the second factor at the first to avoid duplicate products
        for (let secondFactor = firstFactor; secondFactor >= lowestFactor; secondFactor--) {
            const product = firstFactor * secondFactor;

            // If product is smaller, stop checking
            if (product <= highestPalindrome) break;

            // number => string
            const productStr = String(product);
            const reversedStr = [...productStr].reverse().join('');

            // check if its palindrome
            if (productStr === reversedStr) {
                highestPalindrome = product;
            }
        }
    }

    return highestPalindrome;
};
