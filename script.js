let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});
// message e ce returneaza rezolve/reject
p.then((message) => {
  console.log("This is in the then " + message);
}).catch((message) => {
  console.log("This is in the catch " + message);
});

//////////////////////////////////////////////
//example 2//

const recordVideoOne = new Promise((resolve, reject) => {
  resolve("Video 1 Recorded");
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve("Video 2 Recorded");
});

const RecordVideoThree = new Promise((resolve, reject) => {
  resolve("Video 3 Recorded");
});

Promise.all([recordVideoOne, recordVideoTwo, RecordVideoThree]).then(
  (messages) => {
    console.log(messages);
  }
);

Promise.race([recordVideoOne, recordVideoTwo, RecordVideoThree]).then(
  (message) => {
    console.log(message);
  }
);
