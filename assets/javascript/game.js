$(document).ready(function() {

    var computerPick = Math.floor(Math.random() * 101) + 19;
    var userNum = 0
    var gameOver = false
    var userWins
    var userLosses


$("#random-number").text(computerPick);

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

if(userNum < computerPick) {

$("#yellow-diamond").on("click", function() {
    var yellowNum = Math.floor(Math.random() * 12) + 1;
    userNum = yellowNum + userNum;
    $("#total-score").text(userNum);
})

$("#green-diamond").on("click", function() {
    var greenNum = Math.floor(Math.random() * 12) + 1;
    userNum = greenNum + userNum;
    $("#total-score").text(userNum);
})

$("#purple-diamond").on("click", function() {
    var purpleNum = Math.floor(Math.random() * 12) + 1;
    userNum = purpleNum + userNum;
    $("#total-score").text(userNum);
})

$("#blue-diamond").on("click", function() {
    var blueNum = Math.floor(Math.random() * 12) + 1;
    userNum = blueNum + userNum;
    $("#total-score").text(userNum);
})

// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.
// The player wins if their total score matches the random number from the beginning of the game.

} if (userNum === computerPick) {
        gameOver = true;
        userWins++;
        $("#wins-text").text("Wins: " + userWins);
        $("#game-result").text("You won!!");
        startGame()
// The player loses if their score goes above the random number.
} if (userNum > computerPick) {
        gameOver = true;
        userLosses++;
        $("#losses-text").text("Losses: " + userLosses);
        $("#game-result").text("You lost!!");
        startGame()
} 

// The game restarts whenever the player wins or loses.

// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

})