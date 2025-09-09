# Assembly: Endgame

A word-guessing game built with React as part of the Scrimba React Course. This project was developed as a **capstone project**, combining state management, conditional rendering, accessibility, and external utilities into a full-featured game.

## Demo
- [Live Site](https://assemblyendgame-manrojgill.netlify.app/)

## Description
In Assembly: Endgame, players must guess a hidden programming related word letter by letter. Each wrong guess eliminates one programming language from a list when all languages are gone, you’re left with Assembly and the game ends. Correct guesses reveal letters in the word, and the game ends in a win if the word is fully revealed before running out of attempts.

## Features
- Guess the word using an on-screen alphabet keyboard
- Lose one programming language for each wrong guess (visual chips)
- Farewell messages appear when a language is lost
- Confetti celebration on winning
- Game over screen when all languages are lost
- Accessible design:
  - Screen reader friendly status updates
  - ARIA labels on keyboard buttons
  - Live region announcements for feedback
- Option to start a new game at any time

## How It Works
- State:
  - `currentWord`: selected at random from a list
  - `guessedLetters`: updated with each keyboard click
- Wrong guesses increment a counter that visually removes a language
- UI dynamically updates based on:
  - Correct guesses (letters revealed in word)
  - Incorrect guesses (languages lost, farewell text shown)
  - Win/loss status (confetti, game over, or restart button)
- Utilities:
  - `getRandomWord` supplies a new word at the start of each game
  - `getFarewellText` generates goodbye messages for lost languages
- The keyboard disables letters after guessing and highlights correctness