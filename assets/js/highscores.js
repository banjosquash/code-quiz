    var saveButton = document.getElementById("saveButton");
    var finalScore = document.getElementById('finalScore');
    var mostRecentScore = localStorage.getItem('mostRecentScore');
    var newScores = document.getElementById("highscores");
    finalScore.innerText = mostRecentScore;
    
    
    
    
  var  saveHighScores = function (event) {
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
            'score': mostRecentScore
        });
    }else {
        savedHighScores = [];
        savedHighScores.push({
            'username': playerName,
            'score': mostRecentScore
        })
    }
    localStorage.setItem("mostRecentScore", JSON.stringify(savedHighScores));
    console.log(savedHighScores);
    
  };
  saveButton.addEventListener("click", saveHighScores);
  
  // im getting the username and score but i cant display it 

  var showHighScores = function(){
    var savedScores = JSON.parse(localStorage.getItem("mostRecentScore"));
    if (savedScores !== null) {
        

        savedScores.forEach(function (player){

        var scoreList = document.createElement("li");

        scoreList.textContent = player.username + " - " + player.score;

        newScores.appendChild(scoreList);
        console.log(scoreList);
    });
  };
}

  document.addEventListener("click", function (){
    window.localStorage.removeItem("mostRecentScore")
    newScores.innerHTML = "";
  });

  showHighScores();
