# Chef Claude

A  build-along React project that integrates with Anthropic’s Claude model to generate recipe suggestions from a list of ingredients. Users can input ingredients, and Chef Claude responds with a recipe idea in markdown format.

## Note
This project does **not** have a live deployment yet. A backend is required to securely handle the API key for Anthropic’s SDK, and currently the API key is exposed when running in the browser.

## Demo
![App Demo](./chef-claude.gif)

## Description
Chef Claude is an AI-powered recipe assistant. Users enter a list of ingredients, and the app generates a recipe suggestion using Anthropic’s Claude API. Recipes are displayed in a clean, readable format, thanks to markdown rendering.

## Features
- Input form to add ingredients dynamically  
- Ingredients list displays items entered by the user  
- Generates recipe suggestions based on the provided ingredients  
- Displays recipes with markdown formatting (headers, lists, etc.)  
- Accessible design with screen reader-friendly live regions  

## How It Works
- Frontend only (React):  
  - `Main.jsx` manages state for ingredients and recipe output  
  - `IngredientsList.jsx` displays entered ingredients and allows generating a recipe  
  - `ClaudeRecipe.jsx` renders AI output in markdown format  
- `ai.js` integrates with Anthropic’s SDK to call Claude with a system prompt and user message  
- Recipes are requested from the model `claude-3-haiku-20240307` with a max token limit  
- Because the API call is in the frontend, the API key would be exposed in a production build — so no live deployment is available yet  

## Built With
- React (`useState`, components, JSX)  
- [Anthropic AI SDK](https://www.npmjs.com/package/@anthropic-ai/sdk)  
- `react-markdown` for rendering recipe text  
- CSS for styling  
