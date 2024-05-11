// 1.map() :
// const array1 = [1, 2, 3, 4, 5, 6];
// const output = array1.map((element) => element * 2);
// console.log(output);


// 2.forEach() :
// const array2 = [7, 8, 9, 10, 11, 12];
// array2.forEach((ele) => console.log(ele));


// 3.reduce() :
// const array3 = [10, 20, 30, 40, 50];
// const sum = array3.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );
// console.log(sum);


// 4.concat() :
// const array4 = [21, 22, 23];
// const array5 = [34, 35, 36];
// const combinedArray1 = array4.concat(array5);
// console.log(combinedArray1);
// const combinedArray2 = array5.concat(array4);
// console.log(combinedArray2);


// 5. find() :
const number1 = [5,24,13,76,89,17,12,1];
const output = number1.find((number) => number > 27);
console.log(output);

// 6. findIndex() :
const number2 = [13,7,57,49,84,27,65];
const index = number2.findIndex((value) => value > 60);
console.log(index);


// 7. includes() :
const data = ["rohit","virat","jaspreet",45,18,93];
const isExist = data.includes("rahul");
console.log(isExist);