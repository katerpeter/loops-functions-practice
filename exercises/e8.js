
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  // Your code goes here...
  var bal = 0, isHighest;
  for (var i = 0; i < array.length; i++){
    if (array[i].balance > bal){
      bal = array[i].balance;
      isHighest = i;
    }
  }
  var result = [array[isHighest]];
  return result;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
