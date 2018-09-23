// Please run this code on the console of your browser
function splitString() {
    var originalString = prompt("Please enter your String", ""); // let's say input is: abrakadabra 
    var lengthToSplit = prompt("Please enter the length to split the string into", ""); // and the length being 8
    // reverse the string first to start splitting from the  other end.
    var reversedString = reverseString(originalString);
    // use string.match to return the split string of user defined length in an array
    var splitString = reversedString.match(new RegExp('.{1,' + lengthToSplit + '}', 'g')); // output here was : ["arbadaka", "rba"]
    
    console.log(splitString.reverse().join(" ").split("")
        .reverse()
        .join("")
        .split(" ")
        .reverse()
        .join(" "));
}

function reverseString(str) {
    return str.split("").reverse().join("");
}
splitString();