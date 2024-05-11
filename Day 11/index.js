// Object
// var myObject = { key1 : value1 , key2 : value2 , key3 : value3}
var PlayerDetails = {
    name: "Rohit",
    age: 37,
    location: "Mumbai",
    isCurrentlyPlaying: true,
    franchise: [
      "Deccan chargers",
      "Mumbai Indians",
      ["2008", "2011", "2025"],
    ],
    highScores: { inTest: 212, inOdi: 264, inT20: 121 },
};

// console.log(PlayerDetails);

// console.log(PlayerDetails.highScores);
// console.log(PlayerDetails.franchise);
// console.log(PlayerDetails.location);
// console.log(PlayerDetails.highScores.inOdi);
 
// console.log();
// console.log(PlayerDetails["name"]);
// console.log(PlayerDetails["age"]);
// console.log(PlayerDetails["franchise"].length);

// const subArray = PlayerDetails.franchise[2];
// console.log(subArray[2]);
  
// for(var i = 0; i < subArray.length; i++){
//     if(subArray[i] === "2011"){
//         console.log(i)
//     }
// }
  
 
const keys = Object.keys(PlayerDetails);
console.log(keys);
const values = Object.values(PlayerDetails);
console.log(values);
  
  
for (let key in PlayerDetails) {
    console.log(key, PlayerDetails[key]);
}