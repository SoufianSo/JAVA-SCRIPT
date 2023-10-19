console.log("it works");

let x = 10;
let y = 15;
let z = 20;
// Überprüfe, ob x größer als z ist UND x größer als y ist
console.log("Ergebnis 1:", x > z && x > y);

// Überprüfe, ob x NICHT gleich y ist
console.log("Ergebnis 2:", x !== y);

// Überprüfe, ob z kleiner als y ist ODER z größer als x ist
console.log("Ergebnis 3:", z < y || z > x);

// Überprüfe, ob x gleich z ist ODER x NICHT gleich y ist
console.log("Ergebnis 4:", x === z || x !== y);

// Überprüfe, ob x größer oder gleich 10 ist UND y kleiner oder gleich 10 ist
console.log("Ergebnis 5:", x >= 10 && y <= 10);

// Überprüfe, ob x multipliziert mit z kleiner als 100 ist ODER ob x multipliziert mit y größer als 100 ist
console.log("Ergebnis 6:", x * z < 100 || x * y > 100);
