/*
Create a function `convertTime` which converts a time formatted as "hh:mm" in a duration in minuts.

If the argument is not correctly formatted, return null.

* "02:30" -> 150
* "01:45" -> 105
* "01h45m" -> null

Add you own tests.

*/

// TODO add your code here
function convertTime(string){
    if(!string || string.length !== 5 || string[2] !== ":"){
        return(null);
    }

    let hours = "";
    let minutes = "";
    for(let i = 0; i < string.length; i++){
        
        if(i === 2){
            continue;
        }

        if(string[i] >= "0" && string[i] <= "9"){
            if(i === 0 || i === 1){
                hours += string[i];
            } else if (i === 3 || i === 4){
                minutes += string[i];
            }
        } else {
            return(null);
        }
    }
    return((hours * 60) + (+minutes));
}

module.exports = convertTime;
