// Define the function to show magicians names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// function to make magicians great through .map() it will modify array
function make_great(magicians: string[]){
 return magicians.map(name => `The Great ${name}`);
}

// Define an array of magician names
let magician_names = ["Eisha", "Noor", "Rahila"];

// Making a copy of original array through .slice() function
let copy_magicians_names = magician_names.slice();

// modify the copied array to include "The Great" with their names
let copy_great_magicians = make_great(copy_magicians_names);

// show both arrays original and copied array 

// original
console.log("Original Array\n")
show_magicians(magician_names);

// copied
console.log("\nCopied Array\n")
show_magicians(copy_great_magicians);