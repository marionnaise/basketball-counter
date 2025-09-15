let resultHome = document.getElementById("result-home")
let resultGuest = document.getElementById("result-guest")
let countHome = 0
let countGuest = 0
let scoreMessage = document.getElementById("score-message")

function addOneHome(){
    countHome += 1
    resultHome.textContent = countHome
}

function addTwoHome(){
    countHome += 2
    resultHome.textContent = countHome
}

function addThreeHome(){
    countHome += 3
    resultHome.textContent = countHome
}

function addOneGuest(){
    countGuest += 1
    resultGuest.textContent = countGuest
}

function addTwoGuest(){
    countGuest += 2
    resultGuest.textContent = countGuest
}

function addThreeGuest(){
    countGuest += 3
    resultGuest.textContent = countGuest
}

function saveScore(){

}
function resetScore(){
    countGuest = 0
    countHome = 0
    resultGuest.textContent = countGuest
    resultHome.textContent = countHome
    scoreMessage.textContent = ""
}


function saveScore(){
    if (resultHome > resultGuest)
    scoreMessage.textContent = "Le score est de " + countHome + " à " + countGuest
}