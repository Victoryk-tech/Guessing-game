let enterBtn = document.getElementById("EnterBtn");
let againBtn = document.getElementById("againBtn");
let output = document.getElementById("outputText");
let attempt = document.getElementById("attempt");

const answer = Math.ceil(Math.random() * 100);
count = 0;
enterBtn.addEventListener("click", (checkNumber) => {
  let userInput = document.getElementById("input").value;
  output.style.color = "red";
  count = count + 1;

  attempt.innerHTML = count;
  attempt.style.display = "block";
  if (userInput == answer) {
    output.innerHTML = "You've guessed right " + "," + " it was " + answer;
    attempt.innerHTML = `you won in ${count} attempts`;
    output.style.color = "green";
    //location.reload();
  } else if (count === 7) {
    attempt.innerHTML = "you have 0 attempt please try again";
    output.innerHTML = "Game over!";
    //location.reload();
  } else if (userInput > answer && userInput < 100) {
    output.innerHTML = "you guessed too high";
  } else if (userInput < answer && userInput > 1) {
    output.innerHTML = "you guessed too low";
  } else if (userInput < 1) {
    output.innerHTML = "Higher,it has to be between 1-100";
  } else if (isNaN(userInput)) {
    output.innerHTML = "this is not a number";
  } else {
    output.innerHTML = "lower, it has to be between 1-100";
  }
  checkNumber();
});

//enterBtn.addEventListener("click", checkNumber, function () {
// output.style.color = "red";
///});

againBtn.addEventListener("click", function () {
  location.reload();
});
