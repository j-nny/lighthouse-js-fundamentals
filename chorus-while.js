const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  if ( repeat === 5) {
    console.log("*change key*"); // change on sixth iteration
  }
  console.log(chorus)
  repeat++;
}
console.log("Until the sun comes up!");