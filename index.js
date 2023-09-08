function isPalindrome(word) {
    const wordToCompare = word.split("").reverse().join("");
    return word === wordToCompare ? (true) : (false)
}
console.log(isPalindrome("madam")); 
console.log(isPalindrome("robot"));

/*
  Add written explanation of your solution 
  
  we compare the original string with its reverse for that we use reverse(), 
  but we need first to turn the string into an array of characters, 
  that's why we first use split(). 
  And then join() to joins the array elements back together into a single string.
  If the reversed string is the same as the original string, 
  we return true; otherwise, we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
