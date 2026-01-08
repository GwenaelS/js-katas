/*
A palindrome is a word or a phrase that reads the same backwards as forwards, example. madam.

Create a function `isPalindrome` that returns if a word is a palindrome.

This function must not be case sensitive.

If the word is null or empty, return true.

Example:
* "rotor" -> true
* "tacos" -> false
* "Kayak" -> true
* null -> true

Add you own tests.

*/

// TODO add your code here
function isPalindrome(string){
    if(!string){
        return(true);
    }

    let firstWord = string.toUpperCase();
    let secondWord = "";
    for(let i = firstWord.length - 1; i >= 0; i--){
        secondWord += firstWord[i];
    }
    if(firstWord === secondWord){
        return(true);
    } else{
        return(false);
    }
}


module.exports = isPalindrome;
