function showProject(projectId) {
  const allProjects = document.querySelectorAll('.project');
  allProjects.forEach(p => p.classList.remove('active'));

  const selected = document.getElementById(projectId);
  if (selected) selected.classList.add('active');
}

// Counter logic
/*let count = 0;
function increase() {
  count++;
  document.getElementById('count').textContent = count;
}
function decrease() {
  count--;
  document.getElementById('count').textContent = count;
}*/

let count=0;
document.getElementById("dec").onclick = function(){
    count--;
    document.getElementById(`lbl`).textContent = count;
}

document.getElementById("inc").onclick = function(){
    count++;
    document.getElementById(`lbl`).textContent = count;
}

document.getElementById("reset").onclick = function(){
    count =0;
    document.getElementById(`lbl`).textContent = count;
}
// RPS logic
function playRPS(choice) {
  const options = ['rock', 'paper', 'scissors'];
  const ai = options[Math.floor(Math.random() * 3)];
  let result = '';

  if (choice === ai) result = "It's a tie!";
  else if ((choice === 'rock' && ai === 'scissors') ||
           (choice === 'paper' && ai === 'rock') ||
           (choice === 'scissors' && ai === 'paper')) {
    result = "You win!";
  } else {
    result = "You lose!";
  }

  document.getElementById('rps-result').textContent = `AI chose ${ai}. ${result}`;
}

// randomnumber generotor logic

const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const btn = document.getElementById("btn");
let max = 6;
let min = 1;
let randomnum1;
let randomnum2;
let randomnum3;

btn.onclick = function(){
    randomnum1 = Math.floor(Math.random() * max) + min;
    randomnum2 = Math.floor(Math.random() * max) + min;
    randomnum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomnum1;
    label2.textContent = randomnum2;
    label3.textContent = randomnum3;
}