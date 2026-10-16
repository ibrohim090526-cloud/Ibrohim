// 1-misol
let a = 5;
let b = 5;

let P = 2 * (a + b);
let S = a * b;

console.log (`Perimetri ${P}, Yuzasi: ${S}`);

// 2-misol
let F = 95

let C = (F - 32) * 5 / 9
 
console.log  (`Natija: ${C} Selsiy`);

// 3-misol
a = 2; 
b = 4; 
c = 5;

let kop = a * b * c;

console.log(`Ko'paytmasi: ${kop}`);
// 4-misol
let km = 2;

let meter = km * 1000;
let cm = km * 100000;

console.log (`Natija: ${meter} metr; ${cm} santimetr`);

// 5-misol
let cost = 50000;

let total_price = cost * 1.12

console.log (`Natija: ${total_price}`)

// 6-misol
let K = 1255

let ton = K / 1000
let center = (K % 1000) / 100
let kg = K % 100

console.log (`Natija: ${ton} tonna; ${center} sentner; ${kg} kg`)

// 7-misol 
let N = 234

let d1 = N % 10;
let d2 = Math.floor (N / 10) % 10;
let d3 = Math.floor (N /100);

let prod = d1 * d2 * d3;

console.log (`Natija: ${prod}`);