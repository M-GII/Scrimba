# Metric/Imperial Unit Converter

A simple conversion tool built with HTML, CSS, and JavaScript. This app allows users to convert between metric and imperial units for length, volume, and mass.

## Demo  
- [Live Site](https://metricandimperial.netlify.app/)

## Description
The Metric/Imperial Unit Converter takes a numeric input and outputs equivalent values for length, volume, and mass in both metric and imperial units. If the input is invalid (zero or less), the app displays an error message across all converters.

## Features
- Convert between:
  - Length: meters - feet  
  - Volume: liters - gallons  
  - Mass: kilograms - pounds  
- Error handling for invalid inputs (must be greater than 0)  
- Responsive, clean layout  

## How It Works
- User enters a number and clicks **Convert**  
- The input is parsed and validated:
  - If greater than 0 → results are calculated and displayed  
  - If invalid → error message appears  
- Conversion formulas:
  - `1 meter ≈ 3.281 feet`  
  - `1 liter ≈ 0.264 gallons`  
  - `1 kilogram ≈ 2.204 pounds`  
