// Arithmetic operations :
var mark1 = 78 ;
var mark2 = 83 ;
console.log(mark1 + mark2);
console.log(mark1 - mark2);
console.log(mark1 * mark2);
console.log(mark1 / mark2);

// typeof() operator
console.log(typeof(mark1));
console.log(typeof(mark2));
console.log("Hello guys",typeof("Hello guys"));
console.log('Hiiiiii',typeof('Hiiiiii'));
console.log(`Hola`,typeof(`Hola`));
console.log(284.32,typeof(284.32));
console.log(true,typeof(true));
console.log(1,'GG',false,24.3294,typeof(1));

// undefined
var totalStudentsPresent;
console.log(totalStudentsPresent, typeof(totalStudentsPresent));

// declaring, redeclaring and reassignning
// 1.var
console.log(color);     //undefined
var color ='Red';       //declaring
console.log(color);
var color = "Blue";     //redeclaring
console.log(color);
color = "Green";        //reassignning
console.log(color);

// 2.let
// console.log(rollNumber);     //undefined
let rollNumber = 21;            //declaring
console.log(rollNumber);
// let rollNumber = 46;         //redeclaring is not allowed.
console.log(rollNumber);
rollNumber = 51;                //reassignning 
console.log(rollNumber);

// 3.const
// console.log(team);
const team = "MI";              //declaring
console.log(team);
// const team ="RCB";              //redeclaring is not allowed.
console.log(team);
// team ="CSK";                    //reassignning is not allowed.
console.log(team);

// Difference between var,let and const
//                               var             let             const
// redeclaring                  allowed         not allowed     not allowed
// reassignning                 allowed         allowed         not allowed
// 

