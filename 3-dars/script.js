//Switch
//1-masala
let kun = 1

switch (kun) {
    case 1:
        console.log ("Dushanba"); break
    case 2:
        console.log ("Seshanba"); break
    case 3:
        console.log ("Chorshanba"); break;
    case 4:
        console.log ("Payshanba"); break;
    case 5:
        console.log("Juma"); break;
    case 6:
        console.log("Shanba"); break;
    case 7:
        console.log("Yakshanba"); break;
}
let oy = 1

switch (oy) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log ("31 kun"); break;
    case 4:    
    case 6:    
    case 9:    
    case 11:
        console.log ("30 kun"); break;
    case 2:
        console.log ("28 kun"); break;
    default:
        console.log("Bunday oy yo'q");         
}
//3-masala
let a = 8;
let b = 2;
let amal = "+";

switch(amal) {
    case "+":
        console.log(a + b); break;
    case "-":   
        console.log(a - b); break;
    case "*": 
        console.log(a * b); break;
    case "/":
        if (b == 0) {
           console.log("0 ga bo'lib bo'lmaydi");
        } else {
            console.log(a / b);
        }
        break;
    default:
        console.log("Noto'g'ri amal");
}
