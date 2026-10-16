// while
// 1.
for (let i = 1; i <= 50; i++ ) {
    if (i % 2 === 0) {
        console.log(i)
    }
}
//2.
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Yig'indi:", sum)
//3.
let n = 7;
for (let i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + (n * i))
}
//4.
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
//5.

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}