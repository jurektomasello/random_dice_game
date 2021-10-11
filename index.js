function diceRoll () {
    var playerOne = Math.floor(Math.random() * 6)  + 1;
    var playerTwo = Math.floor(Math.random() * 6) + 1;

    if (playerOne > playerTwo) {
        console.log("Player one wins!");
    } else {
        console.log("Player two wins!");
    }
}

document.getElementsByClassName("roll-button")[0].onclick =  function() {
    diceRoll();
}