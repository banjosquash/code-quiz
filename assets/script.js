var question = {
    id: 1,
    text: 'What is 1=1',
    choices: [
        {text: '1', prefix: 'A', id:1},
        {text: '2', prefix: 'B', id:2},
        {text: '3', prefix: 'C', id:3},
        {text: '0', prefix: 'D', id:4}
    ],
    answer: '1'
}

var choiceList = document.querySelector('.choices')
console.log(choiceList)

var questionEl = document.querySelector('#question')
console.log(questionEl)

questionEl.innerHTML += question.text

question.choices.forEach(choice => {
    choiceList.innerHTML += `
    <input type="radio" id="choice-${choice.id}" name="question-${question.id}">
    <label for="choice-${choice.id}"> ${choice.prefix}. ${choice.text} </label>
    `
})
 // validate question right/wrong
//var for storing answers
// list of questions
