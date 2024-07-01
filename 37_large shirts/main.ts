// Making a function
function make_shirt (size: string = "Large", printMessage: string = "I love TypeScript"){
console.log(`creating a ${size} shirt with the ${printMessage} prints on shirt`)
}

// Calling a function with by-default values
make_shirt();

// calling a function now with medium size and default message
make_shirt("Medium")

// calling a function now with small size and different message
make_shirt("Small", "I am loving TypeScript")