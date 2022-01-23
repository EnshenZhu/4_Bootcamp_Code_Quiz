// Player Score
var playerScore=0;

// player answer
var playerAnswer=[]

// The question list
var questionList=[
    {"number":"1",
    "name": "What are the three major language (or tools) of front-end developing",
    "Ans1":"HTML/CSS/Javascript",
    "Ans2":"HTML/CSS/Python",
    "Ans3":"CSS/Python/C++",
    "Ans4":"HTML/CSS/Java",
    "Correct":"A"},

    {"number":"2",
    "name": "what does '===' means in javascript",
    "Ans1":"must be same type and same value",
    "Ans2":"must be same type, can be different value",
    "Ans3":"can be different type, must be same value",
    "Ans4":"can be diffeernt type and different value",
    "Correct":"A"},

    {"number":"3",
    "name": "辅助蓝胖最不应该出哪个装备",
    "Ans1":"跳刀",
    "Ans2":"点金",
    "Ans3":"大风杖",
    "Ans4":"辉耀",
    "Correct":"B"}
];
var questionCounter={"count":0}

// define elements in the all body scope
var bodyEl=document.querySelector(".all-body")

// define elements in the header
var timmerEl=document.querySelector(".timmer");
timmerEl.textContent="60 sec";
var formEl=document.querySelector(".form-group")
var inputNameEl=document.querySelector("#player-name")
var startBtnEl=document.querySelector("#quiz-start");

// define elements in the main body
var pageContentEl=document.querySelector("#page-content");
var allQuestionEl=document.querySelector(".question-sheet");
var questionTitleEl=document.querySelector(".question-title");

var scoreCalculate=function(){
    for (i=0;i<questionList.length;i++){
        if (playerAnswer[i]==questionList[i].Correct){
            playerScore+=10
        }
    }
    return playerScore
}

var endQuiz=function(){

    // take out the player's answer from the previous question
    playerAnswer.push(takeAns());

    // calculate player score
    playerScore=scoreCalculate()

    document.querySelector(".question-sheet").remove();
    var endSheet=document.createElement("form")
    endSheet.className="end-sheet"
    endSheet.innerHTML="<h3>"+"the quiz is ended, "+inputNameEl.value+" gets "+playerScore+" scores </h3>"

    document.querySelector("#page-content").appendChild(endSheet);
    
}

var takeAns=function(){
    var playerAnswerEl=document.querySelectorAll('input[name="ans"]')
    let pickedAns;
    for (var AnsEl of playerAnswerEl){
        if (AnsEl.checked){
            pickedAns=AnsEl.value;
            break;
        }
    }
    // debugger;
    return pickedAns;
}

var firstQuestion=function(){
    questionTitleEl.textContent
    ="Question "+questionList[questionCounter.count].number+": "+questionList[questionCounter.count].name

    var allOptionEl=document.createElement('ul')
    
    allOptionEl.className="question-options";
    allOptionEl.innerHTML=
    "<input type='radio' name='ans' value='A'/>"+questionList[questionCounter.count].Ans1+"</br>"
    +"<input type='radio' name='ans' value='B'/>"+questionList[questionCounter.count].Ans2+"</br>"
    +"<input type='radio' name='ans' value='C'/>"+questionList[questionCounter.count].Ans3+"</br>"
    +"<input type='radio' name='ans' value='D'/>"+questionList[questionCounter.count].Ans4+"</br>"
    allQuestionEl.appendChild(allOptionEl);

    // add [next] button
    var nextBtnEl=document.createElement('button');
    nextBtnEl.className="btn";
    nextBtnEl.setAttribute("id","quiz-normal");
    nextBtnEl.textContent="Next";

    allQuestionEl.appendChild(nextBtnEl)

    questionCounter.count++;
}

var normalQuestion=function(){

    // take out the player's answer from the previous question
    playerAnswer.push(takeAns());
   
    // remove old option list
    document.querySelector(".question-options").remove()

    // remove old [next] button
    document.querySelector("#quiz-normal").remove()

    questionTitleEl.textContent
    ="Question "+questionList[questionCounter.count].number+": "+questionList[questionCounter.count].name
    
    // add new option list
    var allOptionEl=document.createElement('ul')
    
    allOptionEl.className="question-options";
    allOptionEl.innerHTML=
    "<input type='radio' name='ans' value='A'/>"+questionList[questionCounter.count].Ans1+"</br>"
    +"<input type='radio' name='ans' value='B'/>"+questionList[questionCounter.count].Ans2+"</br>"
    +"<input type='radio' name='ans' value='C'/>"+questionList[questionCounter.count].Ans3+"</br>"
    +"<input type='radio' name='ans' value='D'/>"+questionList[questionCounter.count].Ans4+"</br>"
    allQuestionEl.appendChild(allOptionEl);
    
    // add [next] button
    var nextBtnEl=document.createElement('button')
    nextBtnEl.className="btn"
    nextBtnEl.setAttribute("id","quiz-normal")
    nextBtnEl.textContent="Next"

    allQuestionEl.appendChild(nextBtnEl)

    questionCounter.count++;
}

var lastQuestion=function(){

    // debugger; 
    
    // take out the player's answer from the previous question
    playerAnswer.push(takeAns());
    
    // remove old option list
    document.querySelector(".question-options").remove()

    // remove old [next] button
    document.querySelector("#quiz-normal").remove()

    questionTitleEl.textContent
    ="Question "+questionList[questionCounter.count].number+": "+questionList[questionCounter.count].name
    
    // add new option list
    var allOptionEl=document.createElement('ul')
    
    allOptionEl.className="question-options";
    allOptionEl.innerHTML=
    "<input type='radio' name='ans' value='A'/>"+questionList[questionCounter.count].Ans1+"</br>"
    +"<input type='radio' name='ans' value='B'/>"+questionList[questionCounter.count].Ans2+"</br>"
    +"<input type='radio' name='ans' value='C'/>"+questionList[questionCounter.count].Ans3+"</br>"
    +"<input type='radio' name='ans' value='D'/>"+questionList[questionCounter.count].Ans4+"</br>"
    allQuestionEl.appendChild(allOptionEl);
    
    // add [submit] button
    var nextBtnEl=document.createElement('button')
    nextBtnEl.className="btn"
    nextBtnEl.setAttribute("id","quiz-last")
    nextBtnEl.textContent="submit"

    allQuestionEl.appendChild(nextBtnEl)
}

var taskButtonHandler=function(event){
    
    // event.preventDefault();
    // console.log(event.target)
        
    if (event.target.matches("#quiz-start")){
        
        if (!inputNameEl.value){
            alert('Please enter your name');
            return false;
        }
        else{
            console.log(event)
            inputNameEl.remove();
            startBtnEl.remove();
            firstQuestion();
        }        
    }
    else if(
        (event.target.matches("#quiz-normal"))
        &&questionCounter.count<questionList.length-1){
        normalQuestion();
    }
    else if(
        (event.target.matches("#quiz-normal"))
        &&questionCounter.count==questionList.length-1){
        lastQuestion();
    }
    else if(event.target.matches("#quiz-last")){
        // debugger;
        endQuiz();
    }
}

// var startQuiz=function(){
//     // debugger;

//     // remove the start button after clicking it
//     startBtnEl.remove();

//     // start the timmer

//     // generate normal questions
//     if (questionCounter.count==0){
//         firstQuestion();
//         // debugger;
//     }    
//     else if (questionCounter.count<(questionList.length-1)){
//         lastQuestion();
        
//     }
//     else{
//         normalQuestion();
//     }   
    

//     // generate last question
// };

// startBtnEl.addEventListener("click",startQuiz);
bodyEl.addEventListener("click",taskButtonHandler)