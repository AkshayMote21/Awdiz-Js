// Promise
function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = false;
        if (result) {
          resolve("Succeed!!!! Data recevied.");
        } else {
          reject("Failed!!!! Data not recevied .");
        }
      },3000 );
    });
  }
  
  getData()
    .then((response) => {
      console.log(response, "Response");
    })
    .catch((error) => {
      console.error(error, "Error");
    });


// // Promise
// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const result = true;
//       if (result) {
//         resolve("Succeed!!!! Data recevied.");
//       } else {
//         reject("Failed!!!! Data not recevied .");
//       }
//     },3000 );
//   });
// }

// getData()
//   .then((response) => {
//     console.log(response, "Response");
//   })
//   .catch((error) => {
//     console.error(error, "Error");
//   });


// Promise
// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const result = true;
//       if (result) {
//         resolve("Succeed!!!! Data recevied.");
//       } else {
//         reject("Failed!!!! Data not recevied .");
//       }
//     },3000 );
//   });
// }

// getData()
//   .then((response) => {
//     console.log(response, "Response");
//   })
//   .catch((error) => {
//     console.error(error, "Error");
//   });