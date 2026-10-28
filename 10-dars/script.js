//1-misol
// let ranglar = ["qizil", "yashil", "ko'k"]
// ranglar.push("sariq");
// ranglar.unshift("oq")
// console.log(ranglar.length);
// console.log(ranglar.join (", "));

// // 2-misol
// let sonlar =[3, 7, 1, 9, 4];
// console.log( sonlar[0]);
// console.log(sonlar[sonlar.length - 1]);

// console.log(sonlar.includes(9));

// console.log( sonlar.indexOf(7));

// //3-misol
// let shahar = "Toshkent;"
// console.log(shahar.slice(0, 4));
// console.log(shahar.slice(4));
// console.log(shahar.indexOf("k"));

// //4-misol
// let matn = "men darturchi bo'laman";
// console.log (matn.split(" ")[0]);
// console.log (matn.replaceAll ("a", "@"));
// console.log(matn.startsWith("men"));

// //5-misol
// let sonlar = [12, 5, 8, 130, 44, 7, 19];
// console.log(sonlar.length);

// let sortSonlar = sonlar.sort((a, b) => a - b);

// console.log(sortSonlar);

// //6-misol
// let oyinlar = ["PUBG", "Standoff 2", "Minecraft", "CS:GO", "FC mobile"];
// oyinlar.push("GTA V");
// oyinlar.pop()
// oyinlar.sort()
// console.log(oyinlar.join(", "));

//7-misol
let gap = "Dasturlash juda qiziqarli fan";


let sozlarMassivi = gap.split(" ")
console.log("So'zlar soni:", sozlarMassivi.length)

let teskari = sozlarMassivi.reverse().join(" ")
console.log("Teskari tartib:", teskari)

let aSoni = gap.toLowerCase().split("a").length - 1
console.log("'a' harflari soni:", aSoni)












