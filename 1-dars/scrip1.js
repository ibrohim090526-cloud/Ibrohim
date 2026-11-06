//1.
const bugun = new Date(2026, 6, 11);
console.log(bugun.toLocaleDateString());

//2.
let sana = new Date(2005, 4, 17);

console.log("Yil: " + sana.getFullYear())
console.log("Oy raqami: " + (sana.getMonth() + 1))
console.log("Kun: " + sana.getDate());

// //3.
let kunlar = ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba" ]
let oylar = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"]

let bugun = new Date();

let haftakuni = kunlar[bugun.getDay()];
let oyNomi = oylar[bugun.getMonth()]
let kunRaqami = String(bugun.getDate()).padStart(2, "0")
let yil = bugun.getFullYear()

let natija = haftakuni + ", " + oyNomi + " " + kunRaqami + " " + yil;
console.log(natija);

//4.
let bugun = new Date()
let yangiYil = new Date(2027, 0, 1)

let farq = yangiYil - bugun
let kunlar = Math.ceil(farq / (1000 * 60 * 60 * 24))
console.log("Yangi yilgacha " + kunlar + " kun qoldi");


//5.
let bugun = new Date(2026, 10, 11, 9, 5)

let kun = String(bugun.getDate()).padStart(2, "0")
let oy = String(bugun.getMonth() + 1).padStart(2, "0")
let yil = bugun.getFullYear()
let soat = String(bugun.getHours()).padStart(2, "0")
let daqiqa = String(bugun.getMinutes()).padStart(2, "0")

let natija = kun + "." + oy + "."  + yil + " " + soat + ":" + daqiqa;
console.log(natija);

// //6.
setTimeout(() => {
  console.log("Salom, dunyo!");
}, 2000);

//7.
let hisob = 0;

const id = setInterval(() => {
  hisob++;
  console.log("Tik-tak", hisob);

  if (hisob === 3) {
    clearInterval(id);
  }
}, 1000);

//8.
setTimeout(() => {
    console.log("Bir")
}, 1000);

setTimeout(() => {
    console.log("Ikki")
}, 2000);

setTimeout(() => {
    console.log("Uch")
}, 3000);

//9
let son = 5
let id = setInterval(() => {
    console.log(son)
    if(son == 0 ){
        console.log("Start!")
        clearInterval(id)
    }
    son--;
}, 1000);

//10.
let hisob = 0;

function vaqttnOlibkel(){
    let bugun = new Date()
    let soat = String(bugun.getHours()).padStart(2, "0")
    let daqiqa = String(bugun.getMinutes()).padStart(2, "0")
    let soniya = String(bugun.getSeconds()).padStart(2, "0")
    return soat + ":" + daqiqa + ":" + soniya
}

let timerId = setInterval(() => {
    hisob++;
    console.log (vaqttnOlibkel())

    if (hisob == 5){
        clearInterval(timerId)
    }
}, 1000);
  

