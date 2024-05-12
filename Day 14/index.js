// 1. Linear Searach
// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var target = 2; 

// function find(array, target) {
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//       console.log(i);
//     }
//   }
// }
// find(array, target);





// while loop
// var number1 = 4; 

// while (number1 < 24) {
//   console.log(number1);
//   number1 += 4;
// }


// var number2 = 10;

// while (number2 > 0) {
//   console.log(number2);
//   number2--;
// }





// 2.Binary Search

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var target = 9;

function BinarySearch(array, target) {
  const middleIndex = Math.floor(array.length / 2);
    console.log(array[middleIndex]);
  if (target == array[middleIndex]) {
    console.log(middleIndex);
  }
}

BinarySearch(numbers, target);