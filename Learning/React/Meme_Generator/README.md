# Meme Generator

A React build along built as part of the Scrimba React Course. This app fetches meme images from an external API and lets users generate custom memes by adding their own text on top.

## Demo
- [Live Site](https://memegeneratorscrimba.netlify.app/)

## Description
The Meme Generator allows users to enter custom top and bottom text and overlay them on a randomly selected meme image. Each click of the "Get a new meme image" button fetches a random image, making it quick and fun to generate new memes.

## Features
- Fetches meme images from an external API  
- Input fields for top and bottom text  
- Overlay text dynamically updates on the image  
- Button to load a new random meme image  
- Simple, responsive design  

## How It Works
- Uses `useState` to store input text and the current meme image  
- Fetches meme image data from the [Imgflip API](https://api.imgflip.com/get_memes)  
- On button click:
  - A random meme image is selected from the fetched list  
  - User text is rendered dynamically on the image  