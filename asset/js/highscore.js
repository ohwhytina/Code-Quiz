
var scoreList = document.querySelector("#scorelist");

//go back
function returnHome() {
    window.location.replace('./index.html');
}

    //clear all scores
    function clearScore() {
        localStorage.clear()
        location.reload();
    }

    //show highscore 
    var highScores = localStorage.getItem("highScores");
    highScores = JSON.parse(highScores);

    if (highScores !== null) {
        for (var i = 0; i < highScores.length; i++) {

            var createLi = document.createElement("li");
            createLi.textContent = highScores[i].name + "---" + highScores[i].score;
            scoreList.appendChild(createLi);
    }
}