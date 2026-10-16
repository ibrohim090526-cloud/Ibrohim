//string
let ism = "Ibrohim";
let yosh = 15;
let faolMi = true;
let manzil = "Toshkent  ";
let sevimliFilm = null;
let katta = 9007199254740993n;
let belgi = Symbol("o'quvchi");

console.log(typeof ism);           // string
console.log(typeof yosh);          // number
console.log(typeof faolMi);        // boolean
console.log(typeof manzil);        // undefined
console.log(typeof sevimliFilm);   // object
console.log(typeof katta);         // bigint
console.log(typeof belgi);         // symbol

let qiymat = null;

console.log("Qiymat: " + qiymat);
console.log("typeof natijasi: " + typeof qiymat);
console.log("Haqiqiy tur: " + (qiymat === null ? "null" : typeof qiymat));