var questions = document.querySelector('#questions');
var choices = Array.from(document.querySelectorAll('.choice-text'));
var questions = document.querySelector('#questions');

var currentQuestion ={}
var acceptingAnswers = true
var score = 0
var questionCounter = 0
var avaliableQuestions = []

var questions = [
    {
        question: 'what is 1=1? ',
        choice1: '2',
        choice2: '1',
        choice3: '0',
        answer: 2,
    }
]

var questions = [
    {
        question: 'which Dunder Miflin branch is closing? ',
        choice1: 'Scranton',
        choice2: 'Utica',
        choice3: 'Toothbrush',
        answer: 1,
    }
]

var questions = [
    {
        question: 'why did the chicken cross the road? ',
        choice1: 'To catch a fly',
        choice2: 'to get the other side',
        choice3: 'it forgot its feather',
        answer: 2,
    }
]

var questions = [
    {
        question: 'How many times can Chuck Norris count to infinity? ',
        choice1: 'twice',
        choice2: 'infinity',
        choice3: '0',
        answer: 1,
    }
]

