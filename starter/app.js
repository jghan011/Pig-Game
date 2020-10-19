/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScores, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;
//0 will be the first players and 1 will be the second player
//partially because it is 0 based

document.querySelector(".dice").style.display = "none"; // now we have set style to none// now when you reload you will see the dice is gone
// if you look closely when you inspect on image tag you will see the syle is set to none

document.getElementById("score-0").textContent = "0"; // with the getelementbyid we don't use hash symbol just put the name in the quote
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

document.querySelector(".btn-roll").addEventListener("click", function () {
  //1. Random number
  var dice = Math.floor(Math.random() * 6) + 1;

  //2. ddisplay the result
  var diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + dice + ".png";

  //#. Update the round score IF the rolled number was NOT A 1
  if (dice > 1) {
    //add score
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    // next player
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0); //basically if zero the active player is one else is should be zero
    roundScore = 0;

    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    document.querySelector(".dice").style.display = "none"; // now every time it is at one it will switch to next person and dice will dissapear
    // document.querySelector(".player-0-panel").classList.remove("active");
    // document.querySelector(".player-1-panel").classList.add("active");
  }
}); //here it will be called a call back since the addeventListnener is calling this function
// mdn has a list of event refferences

// document.querySelector("#current-" + activePlayer).textContent = dice;
// document.querySelector("#current-" + activePlayer).innerHTML =
//   "<em>" + dice + "</em>"; // emphasize the text

// var x = document.querySelector("#score-1").textContent; //
// console.log(x);
