var randomNumer1 = Math.random();
randomNumer1 = randomNumer1 * 6;
randomNumer1 = Math.floor(randomNumer1) + 1;

if (randomNumer1 === 1) {
document.querySelector("img").setAttribute("src", "images/dice1.png");
} else if (randomNumer1 === 2) {
  document.querySelector("img").setAttribute("src", "images/dice2.png");
} else if (randomNumer1 === 3) {
  document.querySelector("img").setAttribute("src", "images/dice3.png");
} else if (randomNumer1 === 4) {
  document.querySelector("img").setAttribute("src", "images/dice4.png");
} else if (randomNumer1 === 5) {
  document.querySelector("img").setAttribute("src", "images/dice5.png");
} else {
  document.querySelector("img").setAttribute("src", "images/dice6.png");
}

var randomNumer2 = Math.random();
randomNumer2 = randomNumer2 * 6;
randomNumer2 = Math.floor(randomNumer2) + 1;

if (randomNumer2 === 1) {
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice1.png");
} else if (randomNumer2 === 2) {
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice2.png");
} else if (randomNumer2 === 3) {
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice3.png");
} else if (randomNumer2 === 4) {
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice4.png");
} else if (randomNumer2 === 5) {
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice5.png");
}  else {
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");
}

if (randomNumer1 > randomNumer2) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
} else if (randomNumer1 < randomNumer2) {
  document.querySelector("h1").textContent = "Player 2 Wins!";
} else {
  document.querySelector("h1").textContent = "Draw";
}
