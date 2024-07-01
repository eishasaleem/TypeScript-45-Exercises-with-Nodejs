// creating a guest list array

let guestList = ["Amna", "Bushra", "Malaika", "Sania"];

// making variables for the guest who is not coming
let notComing = guestList[0];

// print the name of the guest who is not coming 
console.log(notComing,"nhi aa skti");

// remove the guest who is not coming from the list
guestList.splice(0, 1, "Eisha");

// message print for bigger table
console.log("Good news! we have found a bigger table for dinner.");

// adding a new value at starting index of array
guestList.unshift("Bisma");

// adding a new value at ending index of array 
guestList.push("Eman");

// get a middle index of our guest list array
let middleIndex: number = Math.floor(guestList.length / 2);

// adding a new value at middle index of array
guestList.splice(middleIndex, 0, "Rabia"); 

// print the updated list of our guests
console.log("Updated List of our Guests");

// print the message for each guest
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));
 
// inform that only two guests can come to dinner 
console.log("unfortunately, the new dinner table wont arrive on time, so I can only invite two Guests to dinner with me");

// using while loop to remove guests from the array until only two guests are left
while(guestList.length > 2) {
let removedGuest = guestList.pop();
console.log(`Sorry, ${removedGuest} I cant invite you to dinner`);
}

// sending a invitation to the last two guest on the list
console.log("Invitations to the last two guests");
guestList.forEach(lasttwo => console.log(`luckily ${lasttwo}, you are still invited to dinner`));

// removing the last two guests from the list
guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);