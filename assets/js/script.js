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

// define elements in the header
var formEl=document.querySelector(".form-group")
var startBtnEl=document.querySelector("#quiz-start");

// define elements in the main body
var pageContentEl=document.querySelector("#page-content");
var allQuestionEl=document.querySelector("#question-sheet");
var questionTitleEl=document.querySelector(".question-title");

var startQuiz=function(){
    // event.preventDefault();
    // debugger;

    // remove the start button after clicking it
    startBtnEl.remove();

    // start the timmer

    // generate normal questions
    questionTitleEl.textContent
    ="Question "+questionList[questionCounter].number+": "+questionList[questionCounter].name

    var allOptionEl=document.createElement('ul')
    allOptionEl.className="question-options"

    var singleOptionEl=document.createElement('ol')
    singleOptionEl.className="single=option"

    // generate last question
};

startBtnEl.addEventListener("click",startQuiz);