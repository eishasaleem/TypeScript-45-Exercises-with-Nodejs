// Define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magician names
var magician_names = ["Eisha", "Noor", "Rahila"];
// Making a copy of original array through .slice() function
var copy_magicians_names = magician_names.slice();
// modify the copied array to include "The Great" with their names
var copy_great_magicians = make_great(copy_magicians_names);
// show both arrays original and copied array 
// original
console.log("Original Array\n");
show_magicians(magician_names);
// copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
