// Q1. Print  number from given array, use for loop .
// var array = [1, 2, 3, 4, 5];
// for(var i = 0;i < array.length; i++){
//     console.log(array[i])
// }

// console.log();

// Q2. Print reverse number from given array, use for loop .
// var array1 = [10,20,30,40,50];
// for(var i = array1.length-1;i >=0; i--){
//     console.log(array1[i])
// }

// Q3.  find addition of numbers from array who are odd.
var array2 = [11, 24, 40, 51, 62, 76, 79, 43, 22];
var addCount = 0;
for(var i = 0; i<array2.length ; i++){
    if(array2[i] % 2 == 1){
        addCount = addCount + array2[i];
    }
}
console.log(addCount);

console.log();

// Q4. Given an array find name of student whose lenght is more than 5.
var players = ["Rohit", "Virat","Shikhar","Jasprit","Ravindra"];
for(var i =0;i<players.length;i++){
    if(players[i].length > 5){
        console.log(players[i]);
    }
}

