// Player Score
var playerScore=0;
// The question list
var questionList=[
    {"number":1,
    "name": "This is the first question",
    "Ans1":"OptionA",
    "Ans2":"OptionA",
    "Ans3":"OptionA",
    "Ans4":"OptionA"},

    {"number":2,
    "name": "This is the second question",
    "Ans1":"OptionA",
    "Ans2":"OptionA",
    "Ans3":"OptionA",
    "Ans4":"OptionA"},
];
var questionCounter=0

// select a couple of html elements
var pageContent=document.querySelector("#page-content")
var formEl=document.querySelector(".form-group")
var questinSheet=document.querySelector(".question-sheet")
var startBtn=document.querySelector("#quiz-start");
var questionTitleEl=document.querySelector("#question-title");

var restartQuiz=function(event){
    // event.preventDefault
    // location.reload();
    event.preventDefault();
    if(event.target.matches("#quiz-restart")){
        playerScore=0;
        document.querySelector("#quiz-restart").remove();
        formEl.appendChild(startBtn);
        document.querySelector("#page-content").innerHTML="<section><h3 id='question-title'>Welcome to the Quiz<br>Press <strong>[Start]</strong> button to start the quiz</h3></section>";
    }    
}

var startQuiz=function(){
    event.preventDefault();
    // debugger;

    // turn the button name "start" into "restart"
    startBtn.remove();
    var restartBtn=document.createElement("button")
    restartBtn.className='btn';
    restartBtn.setAttribute("id","quiz-restart")
    restartBtn.textContent="Restart"

    formEl.appendChild(restartBtn);    
    
    // console.log(questionTitleEl);
    questionTitleEl.textContent
    ="Question "+questionList[questionCounter].number+": "+questionList[questionCounter].name

    return restartBtn;
};

startBtn.addEventListener("click",startQuiz);
questinSheet.addEventListener("click",restartQuiz);