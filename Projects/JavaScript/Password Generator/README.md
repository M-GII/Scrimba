# Password Generator

A simple password generator built with HTML, CSS, and JavaScript. This app generates two random passwords at once, with customizable length, and includes click-to-copy functionality for quick use.

## Demo
- [Live Site](https://password-generatorsss.netlify.app/)

## Description
The Password Generator allows users to quickly generate strong, random passwords between 5–17 characters long. Each generated password uses uppercase letters, lowercase letters, numbers, and symbols to maximize security. Users can click a password to copy it directly to their clipboard.

## Features
- Generate two random passwords with one click  
- Adjustable password length (5–17 characters)  
- Error message displayed if length input is invalid  
- Copy password to clipboard by clicking on it  
- Responsive layout and simple styling  

## How It Works
- Character set includes:
  - Uppercase and lowercase letters  
  - Numbers (0–9)  
  - Symbols (~, !, @, #, etc.)  
- User enters a desired password length  
- `checkLength()` validates the input and shows an error if out of range  
- `generate()` produces two new passwords by looping through the character set randomly  
- Clicking on a password triggers the `copy()` function to copy it to the clipboard  
