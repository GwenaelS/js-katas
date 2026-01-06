/*
Create a function `min` which founds the minimum value of a number array.

If the array is empty or null, return null.

Example:
* [1, 2, 3] -> 1
* [3, -2, 1] -> -2
* [] -> null

You can't use the function Math.min()

*/

// TODO add your code here
function min(array){    
    if(!array || array.length === 0){
        return(null);
    } 
    
    const count = array.length; 
    let minimum = array[0];
    
    for(let i = 1; i < count; i++){
        if(minimum > array[i]){
            minimum = array[i];
        }
    }
    return(minimum);
}


module.exports = min;
