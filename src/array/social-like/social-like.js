/*
Create a function `getLikes` which receives an array of names, and returns:
* [] => "Be the first to like this"
* ["Cartman"] => "Cartman likes this"
* ["Kenny", "Cartman"] => "Kenny and Cartman like this"
* ["Stan", "Kyle", "Kenny", "Cartman"] => "Stan and 3 other people like this"

*/

// TODO add your code here
function getLikes(names){
    const userNumber = names.length;
    if(userNumber === 0){
        return("Be the first to like this");
    } else if(userNumber === 1){
        return(`${names[0]} likes this`);
    } else if(userNumber === 2){
        return(`${names[0]} and ${names[1]} like this`);
    } else {
        return(`${names[0]} and ${userNumber - 1} other people like this`);
    }
}


module.exports = getLikes;
