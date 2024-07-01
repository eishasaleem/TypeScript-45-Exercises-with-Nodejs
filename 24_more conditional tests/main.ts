// Define Variables
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple" , "banana" ,"orange"];

// Test for equality and inequality with strings

console.log("Is apple is equal to apple?");
console.log(apple == "apple");

console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");

// Test using the lower case function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");

// Numericals tests
// equals to
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);

// not equals to
console.log("\n Is ten is not equal to twenty?");
console.log(ten != twenty);

// Greater than 
console.log("\n Is ten is greater than zero?");
console.log(ten > 0);

// less than
console.log("\n Is twenty is less than 10?");
console.log(twenty < 10);

// greater than or equal to
console.log("\n Is ten is greater than or equal to 5?");
console.log(ten >= 5);

// less than or equal to
console.log("\n Is twenty is less than or equal to 10?");
console.log(twenty <= 10);

// tests using "and" & "or" operators

// using && (and)
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\n twenty is not equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);

// using || (Or)
console.log("\n 20 is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n 20 is greater than 50 or 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);

// Test whether an item is in a array
console.log("\nIs orange include in my fruits array?");
console.log(fruits.includes("orange"));

// not include
console.log("\nIs orange not include in my fruits array?");
console.log(!fruits.includes("orange"));