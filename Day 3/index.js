// scope of var
var num1 = 10;
{
    console.log(num1);
}

{
    var num2 = 20;
}
console.log(num2);

// scope of let
let num10 = 10;
{
    console.log(num10);
}

{
    let num20 = 20;
}
// console.log(num20);

// scope of const
const num100 = 10;
{
    console.log(num100);
}

{
    const num200 = 20;
}
// console.log(num200);

// hoisting of var,let,const

console.log(key1);
// console.log(key2);
// console.log(key3);

var key1 = 50;
let key2 = 100;
const key3 = 150;