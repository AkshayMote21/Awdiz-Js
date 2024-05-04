// var array1 = [6, 7, 8, 9, 10];
// var target = 16;

// function FindTarget(array1, target) {
//   for (var i = 0; i < array1.length - 1; i++) {
//     for (var j = i + 1; j < array1.length; j++) {
//       if (array1[i] + array1[j] === target) {
//         console.log(array1[i], array1[j]);
//       }
//     }
//   }
// }
// FindTarget(array1, target);

// var array = [5, 6, 7, 8, 9, 4, 5, 7, 6, 3, 8, 2, 4, 5, 9];
// var target = 10;
// function FindThreeNumber(array, target) {
//     var results = [];
//     for (var i = 0; i < array.length - 2; i++) {
//       for (var j = i + 1; j < array.length - 1; j++) {
//         for (var k = j + 1; k < array.length; k++) {
//             //console.log(array[i], array[j], array[k]);
//           if (array[i] + array[j] + array[k] === target) {
//             results.push([array[i], array[j], array[k]]);
//           }
//         }
//       }
//     }
//     return results;
// }
// console.log(FindThreeNumber(array, target));

// var array = [1, 2, 3, 4];
// array.push(7);
// console.log(array);
// array.pop();
// array.pop();
// console.log(array);
// array.unshift(4, 5);
// array.unshift(6);
// console.log(array);
// array.shift();
// console.log(array);

// var students = [ "rohit","virat", "rahul", "rishabh"];
// students.splice(1, 1, "chiku");
// console.log(students);
// students.splice(2, 0, "jassi");
// console.log(students);
// students.splice(0, 1, "jadeja"); 
// console.log(students);
// students.splice(3, 0, "arshdeep"); 
// console.log(students);

// console.log();
// const newArray = students.slice(0, -1);
// console.log(newArray);
// const todo = ["Do assignment", "Eat lunch", "Go home"];
// todo.splice(1, 1);
// console.log(todo);

// const array3 = ["shana",45,"chiku",18];
// console.log(array3.toString());

// const months = ["March", "Jan", "Feb", "Dec"];
// months.sort();
// console.log(months);

// const array2 = [2.2,7723,9,668452121216165,45,318745];
// array2.sort();
// console.log(array2);

// array2.sort((a, b) => a - b);
// console.log(array2);
// array2.sort((a, b) => b - a);
// console.log(array2);