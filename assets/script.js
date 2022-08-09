var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("choice-text"));

var questionCounterText = document.getElementById('questionCounter');
var scoreText = document.getElementById('score');
var currentQuestion = {};
var acceptingAnswers = false;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

var questions = [{
    question: "What is 1+(5-2) x 5-(2+2) ? ",
    choice1: "4",
    choice2: "bananas",
    choice3: "10",
    choice4: '6',
    answer: 1
},
{
    question: "Which Dunder Miflin branch is closing? ",
    choice1: "Scranton",
    choice2: "Utica",
    choice3: "toothbrush",
    choice4: 'Nashua',
    answer: 2
},
{
    question: "How many times can Chuck Norris count to infinity? ",
    choice1: "4",
    choice2: "2",
    choice3: "1",
    choice4: '10',
    answer: 2
},
{
    question: "Is BigFoot real? ",
    choice1: "yes",
    choice2: "no",
    choice3: "maybe?",
    choice4: "yes and no",
    answer: 3
}

];


var CORRECT_BONUS = 25;
var MAX_QUESTIONS = 4

function startGame(){
    questionCounter =0
    score = 0
    availableQuestions = [...questions];
    getNewQuestion();
};

function getNewQuestion (){
    if(availableQuestions.length === 0){
      return window.location.assign('/end.html');  
    }
    questionCounter++;

    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        var num = choice.dataset['num'];
        choice.innerText = currentQuestion['choice' + num];
    });
    

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};
 
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers= false;
        var selectedChoice = e.target
        var selectedAnswer = selectedChoice.dataset['num'];

        var appliedClass = 'incorrect';
        if (selectedAnswer == currentQuestion.answer){
            appliedClass = 'correct';
        }

        if (appliedClass === 'correct'){
            scoreIncrement(CORRECT_BONUS);
        }
        selectedChoice.parentElement.classList.add(appliedClass);

        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(appliedClass);
            getNewQuestion();
        }, 1000);
       console.log(appliedClass);     
    });
});

scoreIncrement = num => {
    score += num;
    scoreText.innerText = score;
}


startGame();
