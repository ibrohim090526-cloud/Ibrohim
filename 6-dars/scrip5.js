// 1-masala
//Yashirin konvertatsiya (JS o'zi o'zgartiradi)
let a = "5" + 10; 
console.log(a); 
//Oshkora konvertatsiya (o'zimiz Number qilamiz)
let b = Number("5") + 10;
console.log(b); 
// Izoh: Ma'lumotlar ko'pincha matn bo'lib kelgani uchun, 
// ularni qo'lda songa o'tkazmasak qo'shish o'rniga yopishib qoladi.
//2-masala
let yil = 2026
let holat = true

let yilStr = String(yil)
let holatStr = String(holat)

let natija = yilStr + " - " + holatStr;
console.log(natija);
console.log(natija.length); 
//3-masala
let narx1 = "15000"
let narx2 = "4500.75"
let chegirma = "bepul"

let sum1 = Number(narx1);
let sum2 = Number(narx2);
console.log(sum1 + sum2);

let xatoChegirma = Number(chegirma);
console.log(xatoChegirma);
//4-masala
console.log(Boolean(0));              
console.log(Boolean("0"));            
console.log(Boolean(""));              
console.log(Boolean("salom"));    
console.log(Boolean(null));          
console.log(Boolean(undefined)); 
console.log(Boolean(123));        
//5-masala
// 1. "5" + 3 
console.log("5" + 3); 
// Natija: "53" 
// Izoh: Plus (+) belgisi kelganda, agar bittasi matn bo'lsa, sonni ham matnga aylantirib yopishtirib qo'yadi.

// 2. "5" - 3 
console.log("5" - 3); 
// Natija: 2 
// Izoh: Ayirish (-) amalida JavaScript matnni o'zi avtomatik ravishda songa o'tkazib hisoblaydi.

// 3. "10" * "2" 
console.log("10" * "2"); 
// Natija: 20 
// Izoh: Ko'paytirish (*) amalida ikkala matn ham songa o'girilib keyin ko'paytiriladi.

// 4. false + 1 
console.log(false + 1); 
// Natija: 1 
// Izoh: "false" mantiqiy qiymati raqamda 0 ga teng, shuning uchun 0 + 1 = 1 bo'ladi.

// 5. true + true 
console.log(true + true); 
// Natija: 2 
// Izoh: "true" qiymati 1 ga teng, 1 + 1 = 2 chiqadi.
//6-masala
// 1.
let str1 = "120px"
let son1 = parseInt(str1)
console.log(son1)
// 2. 
let str2 = "3.14pi"
let son2 = parseFloat(str2);
console.log(son2)
// 3. 
let son3 = 255
let binaryStr = son3.toString(2)
console.log(binaryStr); 
