var questions = [
    {title: "Commonly used data types DO NOT include:",
     choices: ["strings", "booleans", "alerts", "numbers"],
     answer: "alerts"
    },
    {title: "The condition in an if/else statement is enclosed within ____.",
     choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
     answer: "parenthesis"
    },
    {title: "Arrays in Javascript can be used to store _____.",
     choices: ["numbers & strings", "other arrays", "booleans", "all of the above"],
     answer: "all of the above"
    },
    {title: "String values must be enclose within ____ when being assigned to variable.",
     choices: ["commas", "curly brackets", "quotes", "parenthesis"],
     answer: "quotes"
    },
    {title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
     choices: ["Javascript", "terminal/bash", "for loops", "console log"],
     answer: "console log"
    }
];

//keep track of score
var score = 0; 
var currentQuestion = -1
var timeLeft = 75;
var timer;

// function to start the time
function startTimer() {
    document.getElementById("timeLeft").innerHTML = timeLeft;
    
    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;

        //end game when timer is below 0
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame(); 
        }
    }, 1000);

    startQuiz();
};

function startQuiz() {
    currentQuestion++;

    if (currentQuestion > questions.length -1) {
        endGame();
        return
    }
    //show question
    var questionContent = "<h2>" + questions[currentQuestion].title + "</h2>"; 
    
    // loop questions
    for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
        // create choices buttons, when click refers to answer array
        var buttonChoice = "<button onclick=[ANSWER]>[CHOICE]</button>"; 
        buttonChoice = buttonChoice.replace("[CHOICE]", questions[currentQuestion].choices[i]);
        
        if (questions[currentQuestion].choices[i] === questions[currentQuestion].answer) {
            buttonChoice = buttonChoice.replace("[ANSWER]", "correct()");
        } else {
            buttonChoice = buttonChoice.replace("[ANSWER]", "incorrect()");
        }
        questionContent += buttonChoice
    }


    document.getElementById("quizBody").innerHTML = questionContent
};

//deduct 10 seconds from the timer if user chooses an incorrect answer
function incorrect() {
    timeLeft -= 10; 
    startQuiz();
}

//increases score by 1 points if the user chooses the correct answer
function correct() {
    score += 1;
    startQuiz();
}

//end game page
function endGame() {
    clearInterval(timer);

    var endingContent = 
    "<h2>" + "Game over!" + "</h2>" +
    "<h3>" + "You got a " + score +  "/5" + " questions correct!" + "</h3>" +
    `<input type="text" id="name" placeholder="Enter name">
    <button onclick="setScore()">Set score!</button>`;

    document.getElementById("quizBody").innerHTML = endingContent;
}

//store the scores on local storage
function setScore() {
 
    var userName = document.getElementById('name').value;
    var highScore = score;

    var scoreObject = {name: userName, score: highScore};

    var highScores = localStorage.getItem("highScorelist"); 

    if (highScores == null) {
        localStorage.setItem("highScoreList", JSON.stringify([scoreObject]));
        console.log(highScores);
      } else {
        highScoreList = JSON.parse(highScores);
        console.log(typeof highScoreList);
        highScoreList.push(scoreObject);
        localStorage.setItem("highScoreList", JSON.stringify(highScoreList));
      }
      window.location.replace("./highscore.html");
    }
    
    //clear all scores
    function clearScore() {
        localStorage.clear()
        location.reload();
    }


    
    

