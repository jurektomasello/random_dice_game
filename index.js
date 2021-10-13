function diceRoll() {
    var playerOne = Math.floor(Math.random() * 6) + 1;
    var playerTwo = Math.floor(Math.random() * 6) + 1;

    if (playerOne > playerTwo) {

        document.getElementById("score" + playerOne).style.display = "inline-block";
        document.getElementById("scoreRight" + playerTwo).style.display = "inline-block";

        document.getElementById("winner-announcement").innerHTML = "Player One wins!";

    } else if (playerOne === playerTwo) {
        document.getElementById("winner-announcement").innerHTML = "It's a draw!";
    } else {
        document.getElementById("winner-announcement").innerHTML = "Player Two wins!";
    }
}

document.getElementsByClassName("roll-button")[0].onclick = function () {
    diceRoll();

}