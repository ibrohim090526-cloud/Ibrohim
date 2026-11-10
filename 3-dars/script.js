//1.1
let sarlavha = document.getElementById("shop-title")
console.log(sarlavha)

//1.2
let kartalar = document.querySelectorAll(".card");
console.log (kartalar.length)

//1.3
let h3lar = document.querySelectorAll("h3")
for(let i = 0; i < h3lar.length; i++){
    console.log (h3lar[i].innerText)
}

//1.4
let narxlar = document.querySelectorAll(".price");
for(let i = 0; i < narxlar.length; i++){
    console.log(narxlar[i].innerText)
}

//1.5
let card3Stock = document.querySelector("#card3 .stock");
console.log(card3Stock.innerText);

//2.1
let shopDiv = document.getElementById("shop");
console.log(shopDiv.firstChild);
console.log(shopDiv.lastChild);

//2.2
let card2 = document.getElementById("card2")
let uzumCard = card2.nextElementSibling;
console.log(uzumCard.querySelector("h3").innerText);

//2.3
let card4 = document.getElementById("card4")
let uzumCarddanOldingi = card4.previousElementSibling;
console.log(uzumCarddanOldingi.querySelector("h3").innerText);

//2.4
let birortaStock = document.querySelector(".stock")
let karta = birortaStock.parentElement;
let kartaNomi = karta.querySelector("h3").innerText;
console.log(kartaNomi);


