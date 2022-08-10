    var saveButton = document.getElementById("saveButton");
    var username = document.getElementById('username');

    var finalScore = document.getElementById('finalScore');
    var mostRecentScore = localStorage.getItem('mostRecentScore');
    finalScore.innerText = mostRecentScore;
    
    
    
    
    saveHighScores = e => {
    console.log("clicked")
    e.preventDefault();
}

