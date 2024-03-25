
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  var results = [], totalIn, totalOut, finalBalance;
  for (var i = 0; i < array.length; i++){
    totalIn = 0;
    totalOut = 0;
    finalBalance = 0;
    if (array[i].deposits){
      for (var x = 0; x < array[i].deposits.length; x++){
        totalIn += array[i].deposits[x];
      }
    }
    if (array[i].withdrawals){
      for (var x = 0; x < array[i].withdrawals.length; x++){
        totalOut += array[i].withdrawals[x];
      }
    }
    finalBalance = totalIn - totalOut;
    if (finalBalance != array[i].balance){
      results.push(array[i]);
    }
  }
  return results;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
