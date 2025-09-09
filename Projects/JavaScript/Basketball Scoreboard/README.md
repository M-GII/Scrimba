# Basketball Scoreboard

A simple basketball scoreboard built with HTML, CSS, and JavaScript. This project allows users to keep track of scores for the Home and Guest teams with buttons to add points and a reset option to start a new game.

## Demo
  
- [Live Site](https://basketba11scoreboard.netlify.app/)

## Description
The Basketball Scoreboard displays two team boards (Home and Guest) and lets users update scores interactively by clicking buttons. The design and logic simulate a real scoreboard, making it a quick and fun project to practice DOM manipulation.

## Features
- Track scores for two teams: Home and Guest  
- Add +1, +2, or +3 points for each team  
- Reset both scores to zero with the "New Game" button  
- Dynamic updates without reloading the page  

## How It Works
- Each score is stored in variables (`homeSum`, `guestSum`)  
- Buttons call functions (`oneHome`, `twoHome`, `threeHome`, etc.) that update the score and change the text in the DOM  
- The "New Game" button resets both scores to zero and clears the variables  