// 1. Traditional function (old method)
// function addition() {
//     var num1 = 21;
//     var num2 = 17;
//     return num1 + num2;
//     console.log("GG");
//   }
//   const answer = addition();
//   console.log(answer);

// Q1. To check if number is even or odd using function.
// function CheckNumberIsEvenOrOdd(number) {
//     if (number % 2 === 0) {
//       console.log("Even");
//     }
//     else {
//       console.log("Odd");
//     }
//   }
//   CheckNumberIsEvenOrOdd(14215);

// Q2. To make basic calculator using functions.
// var number1 = 24;
// var number2 = 47;
// function Add(firstValue, secondValue) {
//     return firstValue + secondValue;
//   }
//   function Subtract(firstValue, secondValue) {
//     return firstValue - secondValue;
//   }
//   function Multiply(firstValue, secondValue) {
//     return firstValue * secondValue;
//   }
//   function Divide(firstValue, secondValue) {
//     return firstValue / secondValue;
//   }
//   console.log(Add(number1, number2));
//   console.log(Subtract(number1, number2));
//   console.log(Multiply(number1, number2));
//   console.log(Divide(number1, number2));

// 2.Arrays
// var players= ["Virat", "Rohit", "Dhoni",18,45,7];
// console.log(players);
// console.log(players.length); // 3
// console.log(players[0]);
// console.log(players[2]);
// console.log(players[players.length - 1]);

// Q3. Print numbers from 1 to 10, by using for loop.
// for (var num = 1; num <= 10; num++) {
//   console.log(num);
// }

// Q4 Print number from 10 to 60 with gap of 4;
for (var a = 10; a <= 60; a = a+4) {
    console.log(a);
  }
  console.log();
// Q5 . Print number from 33 to 76 with gap of 3 but number also must be even 
  for (var b = 33; b <= 76; b = b+3) {
    if (b % 2 == 0) {
      console.log(b);
    }
  }
  console.log(); 
// Q6 . Whats the addition of number from 23 to 89 with gap of 2 and number must be odd.
var addCount = 0;
for (var i = 23; i <= 89; i = i+2) {
  if (i % 2 === 1) {
    addCount = addCount + i;
  }
}
console.log(addCount);

