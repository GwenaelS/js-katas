/*
Create a function `abbreviate` which converts a name into initials.

The output should be capital letters with a dot separating them.

Example:
* "Alyson Hannigan" -> "A.H"
* "Cobie Smulders" -> "C.S"
* "Neil Patrick Harris" -> "N.P.H"

Add you own tests.

*/

// TODO add your code here
function abbreviate(string){
    if(!string){
        return(null);
    }

    let abbreviateName = "";
    let abbreviateCapitals = string[0].toUpperCase();
    
    for(let i = 0; i < string.length; i++){
        if(string[i] === " "){
            abbreviateCapitals += string[i+1].toUpperCase();
        }
    }

    for(let j = 0; j < abbreviateCapitals.length; j++){
        if(abbreviateCapitals.length !== j+1){
            abbreviateName += abbreviateCapitals[j] + ".";
        } else if (j+1 === abbreviateCapitals.length){
            abbreviateName += abbreviateCapitals[j];
        }
    }
    return(abbreviateName);
}


module.exports = abbreviate;
