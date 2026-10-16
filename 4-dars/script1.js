//if/else
//1-misol
let s = 9

s > 10 && s < 50 ? console.log ("Son oraliqda bor") : console.log ("Son oraliqda yo'q")
//2-misol
yosh = 22;
let staj = 2;

yosh >= 22 && staj >= 2 ? console.log ("Ishga qabul qilindi") : console.log ("Mos kelmadi")
//3-misol
let kun = 7

if (kun === 6 || kun === 7){
    console.log ("Dam olish");
}else{
    console.log("Ish kuni");
}
//4-misol
yosh = 12;
let vipKarta = 1

if (yosh > 60 || vipKarta === 1) {
    console.log("Chegirma taqdim etildi")
}else{
    console.log("To'liq narx")
}
//5-misol
let yil = 2000

if ((yil % 4 === 0 && yil % 100 !== 0) || (yil % 400 === 0)) {
    console.log("Kabisa yili");
}else{
    console.log("Oddiy yil")
}
//6-misol
let a = 4
let b = 5
let c = 1

if ((a < b + c) && (b < a + c) && (c < a + b)){
    console.log("Uchburchak yasash mumkin");
}else{
    console.log ("Mavjud emas");
}
//7-misol
let login = "guest"
let parol = 1234

if ((login === "admin" && parol === "1234") || (login === "guest")) {
    console.log ("Xush ke'libsiz!");
}else{
    console.log ("Kiritish rad etiladi");
}