const numberField = document.getElementById("guessfield");
const submit = document.getElementById("submit");
const form = document.querySelector("form");
const result = document.getElementById("result");
const chancesLeft = document.getElementById("chances");
const restartBtn = document.getElementById("restart");
let livesLeft = ['💗','💗','💗']
let randomNumber = Math.ceil(Math.random() * 5);
chancesLeft.innerHTML = livesLeft.join('');

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if(isNaN(Number(numberField.value))) {
    alert('Invalid input!')
    return;
  }
  if (Number(numberField.value) === randomNumber) {
    result.innerHTML = "Congratulations! You're right.";
    numberField.value = "";
    randomNumber = Math.ceil(Math.random() * 5);
  } else {
    livesLeft.pop();
    chancesLeft.innerHTML = livesLeft.join('');
    if (livesLeft.length === 0) {
      result.innerHTML = `The correct number is ${randomNumber}. Game over.`;
      restartBtn.style.display = "block";
      form.style.display = "none";
      return;
    }

    result.innerHTML = `Wrong! You have ${livesLeft.length} trials left.`;
    
    if(livesLeft.length < 3) {
      numberField.value = "";
      result.innerHTML = `Wrong! You have ${livesLeft.length} trial left.`;
    }
  }
});

restartBtn.addEventListener("click", function () {
  restartBtn.style.display = "none";
  form.style.display = "block";
  livesLeft = ['💗','💗','💗'];
  chancesLeft.innerHTML = livesLeft.join('');
  randomNumber = Math.ceil(Math.random() * 5);
  result.innerHTML = "";
  numberField.value = "";
});
