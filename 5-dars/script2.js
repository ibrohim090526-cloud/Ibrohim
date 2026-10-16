//for
1-misol
for (let i = 5; i <= 100; i +=5){
    console.log(i);
}
//2-misol
for (let i =1; i <= 100; i++){
    if(i % 3 == 0){
        console.log(i);
    }
}
//3-misol
for (let i = 1; i <= 50; i++) {
    console.log(i * i);
}
//4-misol
let sum = 0;
for (let i =1; i <=100; i++){
    if(i % 2 != 0){
        summ +=i
    }
}
console.log("Yig'indi:", sum);
//5-misol
let n =12;
let count = 0;

for (let i = 1; i <= n; i++){
    if (n % i === 0){
        count++;
    }
}

