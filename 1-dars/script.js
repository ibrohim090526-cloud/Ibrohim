let vaqt = new Date(2026, 5, 12, 7, 45,17);


let soat = String(vaqt.getHours()).padStart( 2, "0");
let minut = String(vaqt.getMinutes()).padStart( 2, "0");

console.log(soat + ":" + minut)