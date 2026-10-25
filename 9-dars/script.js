//1-misol
function uchgaKopaytir(son) {
    return son * 3
}
console.log(uchgaKopaytir(5));
console.log(uchgaKopaytir(7));

//2-misol
function ayirma(a,b) {
    return a - b ;
}
console.log(ayirma(10,4));
console.log(ayirma(20,6));

//3-misol
function tanishtir(ism, yosh){
    console.log("Mening ismim " + ism + ", men " + yosh + " yoshdaman." )
}
tanishtir("Ali", 16)

//4-misol
function kichikSon(a, b) {
    if (a < b){
        return a;
    } else{
        return b
    }

}
console.log(kichikSon(5,9));

//5-misol
function toGriTortburchakYuzi (eni,boyi) {
    return eni * boyi
}
function perimetr(eni,boyi) {
    return 2 * (eni + boyi)
}
console.log(toGriTortburchakYuzi(4, 5));

console.log(perimetr(3, 7));

//6-misol
function bahoMatni(baho) {
    switch (baho) {
        case 5:
            return "A'lo"
        case 4:
            return "Yaxshi"
        case 3:
            return "Qoniqarli"
        default:
            return "Qoniqarsiz"
    }
}
console.log(bahoMatni(5));
console.log(bahoMatni(4));
console.log(bahoMatni(3));
console.log(bahoMatni(2));
