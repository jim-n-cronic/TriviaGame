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
$(document).ready(function () {

    
    var QUIZ = [
        {queUno: [1,2,3,4],
            choiceQ1: [],
            ansOne: 3 },
        {queDos: [548,4857,2445,564],
            choiceQ2: [],
            ansTwo: 2 },
        {queTre: [618],
            choiceQ3: [],
            ansTre: true },
        {queQtro: [232,5454,76764,534234576,5,5,35,34,5757,3345],
            choiceQ4: [],
            ansQtro: 5 },
        {queFve: ["here the fuck i am", "moFuckaJones"],
            choiceQ5: [],
            nsFve: 0 },
    ];
    console.log(QUIZ[0]);
    console.log(QUIZ[1]);
    console.log(QUIZ[2]);
    console.log(QUIZ[3]);
    console.log(QUIZ[4]);

//loop thru [QUIZ] to show QUIZ.que(number) 
for (var q = 0; q < QUIZ.length; q++) {
    const currentQues = QUIZ[q]
    $("#questionDiv").html("<h4>" + QUIZ[q] + "</h4>").show;   
        console.log($("#questionDiv"));
        
    
}



                    
});