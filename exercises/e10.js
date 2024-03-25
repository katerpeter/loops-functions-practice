// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  var results = [];
  for (var i = 0; i < array.length; i++){
    for (var x = 0; x < array[i].name.length; x++){
      if (letter == array[i].name[x] || letter.toUpperCase() == array[i].name[x]){
        results.push(array[i].name);
      }
    }
  }
  return results;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
