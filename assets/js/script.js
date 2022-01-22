// Player Score
var playerScore=0;
// The question list
var questionList=[
    {"number":1,
    "name": "This is the first question",
    "Ans1":"OptionA",
    "Ans2":"OptionB",
    "Ans3":"OptionC",
    "Ans4":"OptionD"},

    {"number":2,
    "name": "This is the second question",
    "Ans1":"OptionA",
    "Ans2":"OptionB",
    "Ans3":"OptionC",
    "Ans4":"OptionD"},

    {"number":3,
    "name": "This is the third question",
    "Ans1":"OptionA",
    "Ans2":"OptionB",
    "Ans3":"OptionC",
    "Ans4":"OptionD"}
];
var questionCounter=0

// define elements in the header
var timmerEl=document.querySelector(".timmer");
timmerEl.textContent="60 sec";
var formEl=document.querySelector(".form-group")
var startBtnEl=document.querySelector("#quiz-start");

// define elements in the main body
var pageContentEl=document.querySelector("#page-content");
var allQuestionEl=document.querySelector(".question-sheet");
var questionTitleEl=document.querySelector(".question-title");

var normalQuestion=function(){
    questionTitleEl.textContent
    ="Question "+questionList[questionCounter].number+": "+questionList[questionCounter].name

    var allOptionEl=document.createElement('ul')
    
    allOptionEl.className="question-options";
    allOptionEl.innerHTML=
    "<input type='radio' value='A'/>"+questionList[questionCounter].Ans1+"</br>"
    +"<input type='radio' value='B'/>"+questionList[questionCounter].Ans2+"</br>"
    +"<input type='radio' value='B'/>"+questionList[questionCounter].Ans3+"</br>"
    +"<input type='radio' value='B'/>"+questionList[questionCounter].Ans4+"</br>"
    allQuestionEl.appendChild(allOptionEl);

    // add [next] button
    var nextBtnEl=document.createElement('button')
    nextBtnEl.className="btn"
    nextBtnEl.setAttribute("id","quiz-next")
    nextBtnEl.textContent="Next"

    allQuestionEl.appendChild(nextBtnEl)

    questionCounter++;
}

var startQuiz=function(){
    // event.preventDefault();
    // debugger;

    // remove the start button after clicking it
    startBtnEl.remove();

    // start the timmer

    // generate normal questions
    if (questionCounter<length(questionList)-1){
        normalQuestion();
    }
    
    

    // debugger;

    // generate last question
};

startBtnEl.addEventListener("click",startQuiz);