// Making an Array of Countries and Print its original order
let countriesToVisit: string[] = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Original order:", countriesToVisit);

// print the array in alphabetical order without modifying the actual array list
console.log("Alphabetical Order:", [...countriesToVisit].sort());

// show that the array is still in its original order by printing it
console.log("Still in original order:", countriesToVisit);

// Print the array in reverse order without modifying the actual array list
console.log("Reverse Order:", [...countriesToVisit].reverse());

// show that the array is still in its original order by printing it
console.log("Still in original order:", countriesToVisit);

// we have changed the original array order now
console.log("original array reversed:", countriesToVisit.reverse());

// print the array to show that it's back to it's original order
console.log("Back to original order:", countriesToVisit.reverse());

// print the array to show that it's now sorted in alphabetical order
console.log("sorted in alphabetical order:", countriesToVisit.sort());

// we have changed the original array order in reverse order again
console.log("original array reversed again:", countriesToVisit.reverse());