function ToCheckDLAge(){
    const age = document.getElementById('age').value ;
    console.log(age);
    if(age == 18){
        console.log("You are eligible for Driving License");
        alert(`Your'e age ${age} is eligible for Driving License`);
    }
    else if(age > 18){
        console.log("You are eligible for Driving License");
        alert(`Your'e age ${age} is greater than 18 so you are eligible for Driving License`);
    }
    else{
        console.log("You are not eligible for Driving License");
        alert(`Your'e age ${age} is not eligible for Driving License`);
    }
}


// Switch case 

var playerTeamIndia = "Dhoni";
switch(playerTeamIndia){
    case "Rohit":
        console.log("The player is Rohit");
        break;
    case "Virat":
        console.log("The player is Virat");
        break;
    case "Rahul":
        console.log("The player is Rahul");
        break;
    case "Bumrah":
        console.log("The player is Bumrah");
        break;
    case "Ravindra":
        console.log("The player is Ravindra");
        break;
    default:
        console.log("The player is not in Team India squad.")
}



























