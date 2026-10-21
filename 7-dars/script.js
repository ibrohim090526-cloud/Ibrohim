//1-masala
let mevalar = ["olma", "banan", "uzum", "nok"];

let birinchi = mevalar[0];
let oxirgi =  mevalar[mevalar.length - 1];

console.log("Birinchi:", birinchi, "Oxirgi:", oxirgi);


//2-masala
let = sonlar = [10,20,30,40,];

let birinchi = sonlar[0];

sonlar[0] = sonlar[sonlar.length - 1];
sonlar[sonlar.length - 1 ] = birinchi;

console.log(sonlar);

//3-masala
let harflar = ["a", "b"]

if (harflar.length >= 3){
    console.log("Uzun massiv");
}else{
    console.log("Qiaqa massiv");
}
//4-masala

let sonlar = [1, 2, 3];

sonlar.push(4);
sonlar.shift();

console.log(sonlar);


//5-masala
let ranglar = ["qizil", "yashil", "ko'k"];
let natija = "";

for (let i = ranglar.length - 1; i >= 0; i--) {
  natija += ranglar[i];
}

console.log(natija);
//6-masala
let harflar = ["A", "B", "C", "D", "E"];
let natija = "";

for (let i = 0; i < harflar.length; i += 2) {
  natija += harflar[i] + " ";
}

console.log(natija);

//7-masala
let massiv = ["kitob", "daftar", "qalam"];
let qidirilayotgan = "daftar";

console.log(massiv.includes(qidirilayotgan));

//8-masala
let mevalar = ["olma", "banan"]; 

for (let i = 0; i < mevalar.length; i++) {
  console.log(mevalar[i] + " - meva");
}
//9-masala
let sonlar = [1, 2, 3, 4, 5, 6]; 

let m1 = sonlar.slice(0, 3);
let m2 = sonlar.slice(3);

console.log(m1);
console.log(m2);
//10-masala
let massiv1 = [1, 2];
let massiv2 = [3, 4];

let natija = massiv1.concat(massiv2);
console.log(natija);