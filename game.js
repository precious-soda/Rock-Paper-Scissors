let result;
let computer;
let score = JSON.parse(localStorage.getItem('score'))
  || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

function generate() {
  let computer;
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computer = 'Rock';
  } else if (randomNumber >= 1 / 2 && randomNumber < 2 / 3) {
    computer = 'Paper';
  } else {
    computer = 'Scissors';
  }
  return computer;
}

function getResult(yourMove, computerMove) {

  if (yourMove === 'Rock') {
    if (computer === 'Rock') {
      result = 'Tie';
    } else if (computer == 'Paper') {
      result = 'You Loose';
    } else {
      result = 'You Win';
    }

  } else if (yourMove === 'Paper') {

    if (computer === 'Rock') {
      result = 'You Win';
    } else if (computer == 'Paper') {
      result = 'Tie';
    } else {
      result = 'You Loose';
    }

  } else {

    if (computer === 'Rock') {
      result = 'You Loose';
    } else if (computer == 'Paper') {
      result = 'You Win';
    } else {
      result = 'Tie';
    }

  }

  if (result === 'You Win') {
    score.wins += 1;
  } else if (result === 'You Loose') {
    score.losses += 1;
  } else {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `    You
    <img class="move-icon" src="images/${yourMove}-emoji.png">
    <img class="move-icon" src="images/${computerMove}-emoji.png">
    computer`;

}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
}