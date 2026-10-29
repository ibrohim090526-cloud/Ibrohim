let talabalar = [
    { ism: "Aziz", yosh: 16, ball: 85},
    { ism: "Madina", yosh: 15, ball: 92},
    { ism: "Jasur", yosh: 17, ball: 74},
    { ism: "Dilnoza", yosh: 16, ball: 88},
    { ism: "Sardor", yosh: 15, ball: 61},
    { ism: "Kamola", yosh: 16, ball: 79},
];

let barchaList = document.getElementById("barchaTalabalarList");
let yuqoriList = document.getElementById("yuqoriBallilarList");
let statistika = document.getElementById("statistika");

function sahifaniYangila(){
    if(barchaList){

        barchaList.innerHTML = "";
        for(let i = 0; i < talabalar.length; i++){
            let t = talabalar[i];
            let li = document.createElement("li")
            li.innerHTML = "<strong>" + t.ism + "</strong>, " + t.yosh + "yosh, ball: " + t.ball;
            barchaList.appendChild(li);
        }
    }

if(yuqoriList){

    yuqoriList.innerHTML = "";
    for(let i = 0; i < talabalar.length; i++){
        let t = talabalar[i];
        if (t.ball > 80){
            let li = document.createElement("li");
            li.innerHTML = "<strong>" + t.ism + "</strong>, " + t.yosh + " yosh, ball: " + t.ball;
            yuqoriList.appendChild(li);
        }
    }
}

let soni = talabalar.length
let jamiBall = 0
let eng_katta = talabalar[0];

for(let i = 0; i < talabalar.length; i++){
    jamiBall += talabalar[i].ball;
    if (talabalar[i].ball > eng_katta.ball){
        eng_katta = talabalar[i];
    }
}

let ortacha = (jamiBall /soni).toFixed(1);
statistika.innerHTML = 
    "Talabalar soni: " + soni + "<br>" +
    "O'rtacha ball: " + ortacha + "<br>" +
    "Eng yuqori ball: " + eng_katta.ism + " (" + eng_katta.ball + ")";
}
 
sahifaniYangila();