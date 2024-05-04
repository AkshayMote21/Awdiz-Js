// nested for loop

// for (Start; end; sequence) {
//   for (start; end; sequence) {
//     for (start; end; sequence) {}
//   }
// }

// var array = [1, 2, 3, 4, 5, 6];
// var target = 5;
// 1st iteration : 1 (i) + 2 (j),  1 (i) + 3 (j), 1 (i) + 4 (j), 1 (i) + 5 (j), 1 (i) + 6 (j)
// 2nd iteration : 2 (i) + 3 (j), 2 (i) + 4 (j), 2 (i) + 5 (j), 2 (i) + 6 (j)
// 3rd iteration : 3 (i) + 4 (j), 3 (i) + 5 (j), 3 (i) + 6 (j)
// 4th iteration : 4 (i) + 5 (j), 4 (i) + 6 (j)
// 5th iteration : 5 (i) + 6 (j)



// var array = [1, 2, 3, 4, 5, 6];
// var count = 0;
// for (var i = 0; i < array.length; i++) {
//     for (var j = i + 1; j < array.length; j++) {
//       count++
//       console.log(array[i], "+", array[j], "=", array[i] + array[j]);
//     }
// }
// console.log("Total Count = " ,count);


var array = [1, 2, 3, 4, 5, 6];
var target = 7 ;
for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
        if( array[i] + array[j] == 7){
            console.log(array[i] , array[j]);
        }
    }
}

