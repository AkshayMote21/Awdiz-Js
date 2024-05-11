var array1 = ["rohit","virat","ravindra","jaspreet","rishabh"];

for(var i =0;i < array1.length;i++){
    if(array1[i] == "furkan"){
        console.log(array1[i]);
    }
    else{
        var b = "Name does not exist"
    }
}
console.log(b);
console.log(typeof(array1));


function primeNumber(number1){
    for(var i=2;i<=number1-1;i++){
        if(number1 % i == 0){
            var k = true;
        }
        // console.log(i);
    }

    if(k == true){
        console.log(`Given number  ${number1} is not a Prime Number`);
    }
    else{
        console.log(`Given number ${number1} is a Prime Number`);
    }
}
primeNumber(7);