    var saveButton = document.getElementById("saveButton");
    var finalScore = document.getElementById('finalScore');
    var newScores = document.getElementById("highscores");
    var scoreText = document.getElementById('score');
    // finalScore.innerText = mostRecentScore;
    
    
    
    
    var  saveHighScores = function (event) {
        event.preventDefault();
        var mostRecentScore = localStorage.getItem('userScores');
        console.log(mostRecentScore);
    var playerName = document.getElementById("username").value;
    // console.log(playerName)

    if(event === null){
        return
    }
    if (!playerName) {
        alert("enter a valid name")
    };

    var savedHighScores = JSON.parse(localStorage.getItem("mostRecentScore"));
    if(savedHighScores !== null){
        savedHighScores.push({
            'username': playerName,
            'playerScore': mostRecentScore
        });
    }else {
        savedHighScores = [];
        savedHighScores.push({
            'username': playerName,
            'playerScore': mostRecentScore
        })
    }
    localStorage.setItem("mostRecentScore", JSON.stringify(savedHighScores));
    console.log(savedHighScores);

    showHighScores();
    
  };
//   saveButton.addEventListener("click", saveHighScores);
  
  // im getting the username and score but i cant display it 

  var showHighScores = function(){
    var savedScores = JSON.parse(localStorage.getItem("mostRecentScore"));
    if (savedScores !== null) {
        
        console.log(savedScores);
        newScores.innerHTML = '';
        savedScores.forEach(function (event){

        var scoreList = document.createElement("li");

        scoreList.textContent = event.username + " - " + event.playerScore;

        newScores.appendChild(scoreList);
        console.log(scoreList);
    });
  };
}

//   document.addEventListener("click", function (){
//     window.localStorage.removeItem("mostRecentScore")
//     newScores.innerHTML = "";
//   });

  
