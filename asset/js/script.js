var questionList = [
    {question: "Commonly used data types DO NOT include:",
     choices: ["strings", "booleans", "alerts", "numbers"],
     answer: "alerts"
    },
    {question: "The condition in an if/else statement is enclosed within ____.",
     choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
     answer: "parenthesis"
    },
    {question: "Arrays in Javascript can be used to store _____.",
     choices: ["numbers & strings", "other arrays", "booleans", "all of the above"],
     answer: "all of the above"
    },
    {question: "String values must be enclose within ____ when being assigned to variable ..",
     choices: ["commas", "curly brackets", "quotes", "parenthesis"],
     answer: "quotes"
    },
    {question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
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

    startquiz();
    }

    

