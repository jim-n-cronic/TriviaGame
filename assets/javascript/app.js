//TrivaGame./assets/javascript/app.js
//BGEIN SCRIPT~~~~~~

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

//TRIVAQUIZ SHIT
var QUIZ = [

]
