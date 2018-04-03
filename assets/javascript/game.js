//declare variables.
var wins = 0;
var losses = 0;
var randNum;
var score = 0;
//var crystal1;
//var crystal2;
//var crystal3;
//var crystal4;

//generate random number.

randNum = Math.floor(Math.random() * 101);
console.log(randNum);

// code for when you click on a button.
//function click(){
//    crystal1 = document.getElementById("button-1").value = 1;
//    crystal2 = document.getElementById("button-2").value = 4;
//    crystal3 = document.getElementById("button-3").value = 6;
//    crystal4 = document.getElementById("button-4").value = 10;
//}

//document.getElementById("button-1").onclick = function() {scoreAdd()};
document.getElementById("button-2").onclick = function() {scoreAdd()};
document.getElementById("button-3").onclick = function() {scoreAdd()};
document.getElementById("button-4").onclick = function() {scoreAdd()};

document.addEventListener("button-1", scoreAdd);

function scoreAdd(){
    while(score <= randNum){
        score ++;
    }
    if(score === randNum){
        wins ++;
    }
    else if(randNum < score){
        losses ++;
    }
}
//make it play out in HTML so that it can be seen on the browser
//for score
//for randNum
//for wins
//for losses
//
 document.getElementById('randomNumber').innerHTML = randNum;
 document.getElementById('wins').innerHTML = wins;
 document.getElementById('losses').innerHTML = losses;
 document.getElementById('result').innerHTML = score;

//document.getElementById("card").innerHTML = randNum;
