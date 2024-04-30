function ToCheckNumber(){
    const number = document.getElementById('number').value ;
    console.log(number);
    if(!number){
        console.log("Please enter a number only");
        alert("Please enter a number");
    }
    else if(number % 2 == 0){
        console.log(`Number ${number} is Even`);
        alert(`Number ${number} is Even`);
    }
    else{
        console.log(`Number ${number} is Odd`);
        alert(`Number ${number} is Odd`);
    }
}
