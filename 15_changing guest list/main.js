var guestList = ["Amna", "Bushra", "Malaika", "Sania"];
var notComing = guestList[0];
console.log(notComing, "nhi aa skti");
guestList.splice(0, 1, "Eisha");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me?")); });
