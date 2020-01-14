$(document).ready(function() {

    var computerPick = Math.floor(Math.random() * 101) + 19;
    var userNum = 0
    var gameOver = false
    var userWins = 0
    var userLosses = 0
    var yellowNum = Math.floor(Math.random() * 12) + 1;
    var greenNum = Math.floor(Math.random() * 12) + 1;
    var purpleNum = Math.floor(Math.random() * 12) + 1;
    var blueNum = Math.floor(Math.random() * 12) + 1;

$("#random-number").text(computerPick);
console.log(computerPick);

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
// if the users score is less than the number the computer chose...
    // yellow click function
$("#yellow-diamond").on("click", function() {
    userNum = yellowNum + userNum;
    checkVal();
    $("#total-score").text(userNum);
    console.log(userNum);
})
    // green click function
$("#green-diamond").on("click", function() {
    userNum = greenNum + userNum;
    checkVal();
    $("#total-score").text(userNum);
    console.log(userNum);
})
    // purple click function
$("#purple-diamond").on("click", function() {
    userNum = purpleNum + userNum;
    checkVal();
    $("#total-score").text(userNum);
    console.log(userNum);
})
    // blue click function
$("#blue-diamond").on("click", function() {
    userNum = blueNum + userNum;
    checkVal();
    $("#total-score").text(userNum);
    console.log(userNum);
})

function checkVal() { if (userNum < computerPick) {

// The player wins if their total score matches the random number from the beginning of the game.

} else if (userNum === computerPick) {
        gameOver = true;
        userWins++;
        $("#wins-text").text("Wins: " + userWins);
        $("#game-result").text("You won!!");
        reset();
        // startGame();
// The player loses if their score goes above the random number.
} else if (userNum > computerPick) {
        console.log(userNum);
        console.log(computerPick);
        gameOver = true;
        userLosses++;
        $("#losses-text").text("Losses: " + userLosses);
        $("#game-result").text("You lost!!");
        reset();
        // startGame();
}}


// The game restarts whenever the player wins or loses.

    function reset() {
        userNum = 0;
        yellowNum = Math.floor(Math.random() * 12) + 1;
        greenNum = Math.floor(Math.random() * 12) + 1;
        purpleNum = Math.floor(Math.random() * 12) + 1;
        blueNum = Math.floor(Math.random() * 12) + 1;
    }

// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

})