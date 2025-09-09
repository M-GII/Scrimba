# Tenzies

A React dice game built as part of the Scrimba React Course. This project was developed as a **capstone project**, applying concepts like state management, component-based design, accessibility, and conditional rendering.

## Demo
- [Live Site](https://tenzies-manrojgill.netlify.app/)

## Description
Tenzies is a fast-paced dice game where the goal is to roll until all dice show the same number. The player can "hold" specific dice to keep their values while re-rolling the rest, aiming to match all dice as quickly as possible. This version includes accessibility features and a confetti celebration when the game is won.

## Features
- Roll 10 dice at once
- Click dice to "hold" them so they don’t reroll
- Win condition when all dice show the same value
- Confetti effect when the player wins
- Screen reader support with ARIA labels and live region updates
- Responsive layout
- "Roll" button changes to "New Game" when the game is over

## How It Works
- Each die is represented as an object with `value`, `isHeld`, and `id`
- On each roll:
  - Dice that are not held receive a new random value
  - Held dice remain unchanged
- The win condition is met when:
  - All dice are held, and
  - All dice show the same value
- Once the player wins, confetti is displayed, a screen reader message is announced, and the "Roll" button becomes "New Game"
