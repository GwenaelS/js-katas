/*
Create a function `inverse`, which given an array of numbers, return the additive inverse of each : each positive becomes negatives, and the negatives become positives.

You can assume that all values are numbers.

If the argument is an empty array or null, return an empty array.

Example:
* [1, 2, 3, 4, 5] -> [-1, -2, -3, -4, -5]
* [1, -2, 3, -4, 5] -> [-1, 2, -3, 4, -5]
* [] -> []

Don't mutate the parameter.

*/

// TODO add your code here
function inverse(array){
    if(!array || array.length === 0){
        return([]);
    }

    let arrayInverse = [];

    for(let i = 0; i < array.length; i++){
        arrayInverse.push(-array[i]);
    }
    return(arrayInverse);
}


module.exports = inverse;
