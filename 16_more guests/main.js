// creating a guest list array
var guestList = ["Amna", "Bushra", "Malaika", "Sania"];
// making variables for the guest who is not coming
var notComing = guestList[0];
// print the name of the guest who is not coming 
console.log(notComing, "nhi aa skti");
// remove the guest who is not coming from the list
guestList.splice(0, 1, "Eisha");
// message print for bigger table
console.log("Good news! we have found a bigger table for dinner.");
// adding a new value at starting index of array
guestList.unshift("Bisma");
// adding a new value at ending index of array 
guestList.push("Eman");
// get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
// adding a new value at middle index of array
guestList.splice(middleIndex, 0, "Rabia");
// print the updated list of our guests
console.log("Updated List of our Guests");
// print the message for each guest
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me")); });
