//1-misol
// let foydalanuvchi = { 
//     ism: "Ali",
//     yosh: 20
// };

// console.log(foydalanuvchi["ism"] , foydalanuvchi["yosh"]+ " " + "yoshda");
//2-misol
let shahar = {
    nom: "Toshkent" 
};

shahar.mamlakat = "O'zbekiston"

console.log(shahar);

//3-misol
let avto = {
    brend: "Mercedes-Benz",
    rang: "oq"
};

avto.rang = "qora";

console.log(avto);

//4-misol
let user = {
    login: "user1", 
    parol: "12345" 
};

delete user.parol;

console.log(user);
//5-misol
let mahsulot = {
    nom: "Telefon", 
    brend: "Samsung" 
};

console.log(mahsulot.narx !== undefined); 
//6-misol
let oquvchi = {
    talaba: "Hasan", 
    manzil: {
         shahar: "Samarqand" 
        } 
};

console.log(oquvchi.manzil.shahar);
//7-misol
let malumot = {
    kitob: "Xamsa", 
    muallif: "Navoiy", 
    yil: 1485 
};
console.log(Object.keys(malumot));
//8-misol
let kompyuter = {
    noutbuk: "HP", 
    xotira: "512GB" 
};
console.log(Object.values(kompyuter));
//9-misol
let sonlar = {
    a: 10, 
    b: 20 
};

for (let kalit in sonlar) {
    console.log(kalit + ": " + sonlar[kalit]);
}
//10-misol
let foydalanuvchi = { ism: "Vali" };

if (foydalanuvchi.status === undefined) {
    foydalanuvchi.status = "faol";
}

console.log(foydalanuvchi);