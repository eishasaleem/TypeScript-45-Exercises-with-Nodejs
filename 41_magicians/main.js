// Define a function to print each magician name from an array 
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Define an array of magician names
var magician_names = ["Eisha", "Noor", "Rahila"];
// call the function to print each name 
show_magicians(magician_names);
