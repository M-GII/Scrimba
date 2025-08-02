let homeScore = document.getElementById("Home Score")
let guestScore = document.getElementById("Guest Score")
let homeSum= 0
let guestSum = 0

function oneHome(){
    homeSum+=1
    homeScore.textContent =  homeSum
}

function twoHome(){
    homeSum+=2
    homeScore.textContent = homeSum
}

function threeHome(){
    homeSum+=3
    homeScore.textContent = homeSum
}

function oneGuest(){
    guestSum+=1
    guestScore.textContent = guestSum
}

function twoGuest(){
    guestSum+=2
    guestScore.textContent =guestSum
}

function threeGuest(){
    guestSum+=3
    guestScore.textContent = guestSum
}

function NewGame(){
    homeScore.textContent=0
    guestScore.textContent=0
    homeSum= 0
    guestSum=0
}