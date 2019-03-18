var word = ["idaho", "florida", "washington", "maine", "texas", "iowa", "utah", "kentucky", "wyoming", "vermont"];
var randomNum = Math.floor(Math.random() * word.length);
var chosenWord = word[randomNum];
var rightLetter = [];
var wrongLetter = [];
var underScore = [];

var docUnderScore = document.getElementsByClassName("underscore");
var docRightGuess = document.getElementsByClassName("rightGuess");
var docWrongGuess = document.getElementsByClassName("wrongGuess");

console.log(chosenWord);

var generateUnderscore = () => {
    for(var i = 0; i < chosenWord.length; i++){
        underScore.push("_");
    }
    return underScore;
}


document.addEventListener('keypress', (event) => {
    var keyword = String.fromCharCode(event.keyCode);
    if(chosenWord.indexOf(keyword) > -1){
        rightLetter.push(keyword);
        underScore[chosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join(" ");
        docRightGuess[0].innerHTML = rightLetter;
        if(underScore.join('') == chosenWord) {
            alert("You win!");
        }
    }else{
        wrongLetter.push(keyword);
        docWrongGuess[0].innerHTML = wrongLetter;
    }
});


docUnderScore[0].innerHTML =  generateUnderscore().join(" ");