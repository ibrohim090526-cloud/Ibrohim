// 5 ta const (Doimiy, o'zgarmas ma'lumotlar) 
const ismim = "Ibrohim"; // Ism o'zgarmaydi
const tugilganShahrim = "Toshkent"; // Tug'ilgan shahar o'zgarmas doimiy
const qonGuruhim = "A+"; // Qon guruhi o'zgarmaydi
const sevimliTilim = "JavaScript"; // Asosiy sevimli dasturlash tili
const mamlakatim = "O'zbekiston"; // Fuqarolik / mamlakat nomi

console.log("--- Doimiy ma'lumotlar (const) ---");
console.log("Ismim:", ismim);
console.log("Tug'ilgan shahrim:", tugilganShahrim);
console.log("Qon guruhim:", qonGuruhim);
console.log("Sevimli tilim:", sevimliTilim);
console.log("Mamlakatim:", mamlakatim);

// 5 ta let (O'zgaruvchan ma'lumotlar) 
let yoshim = 15; // Yosh har yili o'zgaradi
let vaznim = 60; // Vazn o'zgarishi mumkin
let bosqichim = 5; // O'qish bosqichi yoki kuru
let kunlikQadamlarim = 3000; // Kunlik qadamlar soni
let hobbilarimSoni = 2; // Hobbilar soni o'zgarishi mumkin

console.log("\n--- Boshlang'ich qiymatlar (let) ---");
console.log("Yoshim:", yoshim);
console.log("Vaznim (kg):", vaznim);
console.log("O'qish bosqichim:", bosqichim);
console.log("Kunlik qadamlarim:", kunlikQadamlarim);
console.log("Hobbilarim soni:", hobbilarimSoni);

//let o'zgaruvchilarining qiymatlarini o'zgartirish 
yoshim = 16;
vaznim = 58;
bosqichim = 7;
kunlikQadamlarim = 5500;
hobbilarimSoni = 3;

console.log("\n--- O'zgartirilgan yangi qiymatlar (let) ---");
console.log("Yangi yoshim:", yoshim);
console.log("Yangi vaznim (kg):", vaznim);
console.log("Yangi o'qish bosqichim:", bosqichim);
console.log("Yangi kunlik qadamlarim:", kunlikQadamlarim);
console.log("Yangi hobbilarim soni:", hobbilarimSoni);