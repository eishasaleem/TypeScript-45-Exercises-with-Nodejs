let guestList = ["Amna", "Bushra", "Malaika", "Sania"];

let notComing = guestList[0];

console.log(notComing,"nhi aa skti");

guestList.splice(0, 1, "Eisha");

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));