function diceRoll() {
    var playerOne = Math.floor(Math.random() * 6) + 1;
    var playerTwo = Math.floor(Math.random() * 6) + 1;

    if (playerOne > playerTwo) {
        document.getElementById("left-dice-img").src = "images/dice" + playerOne + ".png"; 
        document.getElementById("right-dice-img").src = "images/dice" + playerTwo + ".png"; 

        document.getElementById("winner-announcement").innerHTML = "Player One wins!";

    } else if (playerOne === playerTwo) {
        document.getElementById("left-dice-img").src = "images/dice" + playerOne + ".png"; 
        document.getElementById("right-dice-img").src = "images/dice" + playerTwo + ".png"; 
        document.getElementById("winner-announcement").innerHTML = "It's a draw!";
    
    } else {
        document.getElementById("left-dice-img").src = "images/dice" + playerOne + ".png"; 
        document.getElementById("right-dice-img").src = "images/dice" + playerTwo + ".png"; 
        document.getElementById("winner-announcement").innerHTML = "Player Two wins!";
    }
}

document.getElementsByClassName("roll-button")[0].onclick = function () {
    diceRoll();
}