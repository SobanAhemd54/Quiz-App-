var questions = [
    {
        question:"Html Stands For _________",
        options: ["Hyper Text Makeup Language",
        "html",
        "Case Cading Style Sheet",
        "Hypertext markup language"
        ],
        correctAns: "Hypertext markup language",
    },
    {
        question:"Css Stands For _________",
        options: [
            "Casecading Style Sheet",
            "Java",
            "Ram",
            "Hypertext markup language"
        ],
        correctAns: "Casecading Style Sheet",
    },
    {
        question:"Js Stands For _________",
        options: [
            "Java Style",
            "Java Script",
            "Script",
            "Script Src"
        ],
        correctAns: "Java Script",
    },
    {
        question:"Dom Stands For _________",
        options: [
            "Document Object Model",
            "html",
            "Css",
            "Java"
        ],
        correctAns: "Document Object Model",
    },
    {
        question:"Ram Stands For _________",
        options: [
            "Read Only Memory",
            "Dom",
            "Random Acccess Memory",
            "For Pc"
        ],
        correctAns: "Random Acccess Memory",
    },
    {
        question:"Rom Stands For _________",
        options: [
            "Hyper Text Markup Language",
            "html",
            "HTml",
            "Read Only Memory"
        ],
        correctAns: "Read Only Memory",
    }
];
var ShowQuestion = document.getElementById('Show-Question');
var mainoptions = document.getElementById('main-option');
var Questionnum = document.getElementById('Question-num');
var TotalQuestion = document.getElementById('Total-Question');
var main = document.getElementById('main');
var result1 = document.getElementById('result');

var index = 0
var result = 0;

function showques() {
    ShowQuestion.innerHTML = questions[index].question;
    TotalQuestion.innerHTML = questions.length
    Questionnum.innerHTML = index + 1;
    for(var i = 0; i < questions[index].options.length; i++){
        var options = questions[index].options[i];
        var correctAns = questions[index].correctAns;
       mainoptions.innerHTML += `
       <div>
       <button class="optionbtn" onclick="optionCheck('${options}' ,'${correctAns}')">${questions[index].options[i]}</button>
       </div>
       `
    }
}
showques();

var Total = document.getElementById('Total');
var CorrectAnswer = document.getElementById('Correct-Answer');
var Greate = document.getElementById('Greate');
var mainresult = document.getElementById('mainresult');
function optionCheck(opt, correct) {
    mainoptions.innerHTML = "";
    if (opt === correct) {
        result++;
    }   
    index++;
    if(index === questions.length){
        main.style.display = "none";
        mainresult.style.display = "block";
        Total.innerHTML = `Total Question: ${questions.length}`;
        CorrectAnswer.innerHTML = `Total Correct Answers: ${result}`;
        var per = (result / questions.length) * 100;
        result1.innerHTML = `Your Percentage is ${per.toFixed(2)} %`;
        if(per >= 100){
            Greate.innerHTML = "Your Grade is: A+";
        }
        else if(per >= 90){
            Greate.innerHTML = "Your Grade is: A";
        }
        else if(per >= 70){
            Greate.innerHTML = "Your Grade is: B";
        }
        else if(per >= 60){
            Greate.innerHTML = "Your Grade is: C";
        }
        else if(per >= 50){
            Greate.innerHTML = "Your Grade is: D";
        }
        else if(per >= 40){
            Greate.innerHTML = "Your Grade is: E";
        }
        else{
            Greate.innerHTML = "Your Grade is: Fail";
        }   
    }
   else{
    showques()
}   
};

function Startagin() {
    mainoptions.innerHTML = "";
    index = 0;
    result = 0;
    showques();
    main.style.display = "block";
    mainresult.style.display = "none";
}

Startagin()

