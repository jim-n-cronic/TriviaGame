function populate() {
    if(quiz.isEnded()) {
        //show scores//
    }   else {
        // show question
        var element = $("#question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show choices
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var elementChoice = document.getElementById("choices" + i);
            elementChoice.innerHTML = choices[i];
        }
        showProgress();
    }
}

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    };
}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var elementProg = $("#progress");
    elementProg.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;
}



function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var elementQuiz = $("#quiz");
    elementQuiz.innerHTML = gameOverHtml;
}




var questions = [
    new Question("What famous Mathematitian developed a sequential formula for the Golden Ratio (Phi)?", ["Issac Newton","Albert Einstein","Leonardo Bigollo","Copernicus"], "Leonardo Bigollo"),
    new Question("Who saved Apple from going bankrupt in the '90s?", ["Michael Dell", "Bill Gates", "Mark Cuban", "Warren Buffet"], "Bill Gates"),
    new Question("Though PHP may appear to look simpler than javascript, why is js the top scrtipting language?", ["Gives instant-feedback", "It's less vulnerable to breach", "Much more control without interferring with bandwith", "All reasons shown!"], "All reasons shown!"),
    new Question("What is the Golden Ratio?", ["1.618", "5.1", "0.618", "0.3218"], "1.618"),
    new Question("People get shocked when they see PHI is in every great picure they see, what's an easy way to tell where phi is?", ["Look for the embeded Greek letter, phi.", "Look at the center of the image, youll notice that key elements are just slightly off-center.", "console.log to find it", "take out a ruler and measure for it."], "Look for the embedded Greek letter, phi.")
];

var quiz = new Quiz(questions);

populate();













































//previous attempt BELOW~~~~~~~~~vvvv//
//TrivaGame./assets/javascript/app.js
//BGEIN SCRIPT~~~~~~
/*
//timerGobalVariables
var tmrInit = 30;
var intervalID;

//we want the button to submit answers to act as bout a PAUSE && RESUME
$("#selectAns").onClick(pause);
$("#selectAns").onClick(resume);

function resume() {
    clearInterval(intervalID);
    intervalID = setInterval(decrement, 1000);
}

//decremental F(n)
function decrement() {

    tmrInit--;

    $("#timerDisplay").html("<h2>" + tmrInit + "</h2>");
    console.log(tmrInit);
    
    //gameplay logic for outcomes coinciding with timer
    switch (gamePly) {
        case 0:
        //for IFF timer reaches the zeroMark; CALL pause function()
        tmrInit === 0;
        pause();
        alert("YOu SNOOZE? YOU LOSE!");
        break;
                
        case 1:
        //for if the players guess is right 
        $("#choiceDiv") === true;
        //append(gifTrue)
        //add code for continuing to nextQuestion
        
        break;  

        case 2:
        //for if the payers guess is wrong
        $("#choiceDiv") === false;
        //append(gifFalse)
        break;
    }
}

resume();

*/
//TRIVAQUIZ SHIT

/*
$(document).ready(function () {

    
    var QUIZ = [
        {queUno: ["What famous Mathematitian developed a sequential formula for the Golden Ratio (Phi)?"],
            choicesQ1: ["Issac Newton","Albert Einstein","Leonardo Bigollo","Copernicus"],
            ansOne: 2 },
        {queDos: ["Who saved Apple from going bankrupt in the '90s?"],
            choicesQ2: ["Michael Dell", "Bill Gates", "Mark Cuban", "Warren Buffet"],
            ansTwo: 1 },
        {queTre: ["Though PHP may appear to look simpler than javascript, why is js the top scrtipting language?"],
            choicesQ3: ["Gives instant-feedback", "It's less vulnerable to breach", "Much more control without interferring with bandwith", "All reasons shown!"],
            ansTre: 3 },
        {queQtro: ["What is the Golden Ratio?"],
            choicesQ4: [1.618, 5.1, 0.618, 0.3218],
            ansQtro: 0 },
        {queFve: ["People get shocked when they see PHI is in every great picure they see, what's an easy way to tell where phi is?"],
            choiceQ5: ["Look for the embeded Greek letter, phi.", "Look at the center of the image, youll notice that key elements are just slightly off-center.", "console.log to find it", "take out a ruler and measure for it."],
            ansFve: 1 },
    ];
    console.log(QUIZ[0]);
    console.log(QUIZ[1]);
    console.log(QUIZ[2]);
    console.log(QUIZ[3]);
    console.log(QUIZ[4]);

//loop thru [QUIZ] to show on html 
for (var q = 0; q < QUIZ.length; q++) {
    const currentQues = QUIZ[q]
    $("#questionDiv").html(QUIZ[q].queUno); 
    $("#choiceDiv").html(QUIZ[q].choicesQ1); 
    $(QUIZ[q].choicesQ1).split($("#choiceDiv"));  
        console.log($("#questionDiv"));
        console.log($("#choiceDiv"));
        
    
}
                   
});
*/