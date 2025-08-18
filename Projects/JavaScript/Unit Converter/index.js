/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const lengthVal = document.getElementById("length-val")
const volumeVal = document.getElementById("volume-val")
const massVal = document.getElementById("mass-val")
const convertBtn = document.getElementById("convertBtn")
const errorMsg = "ERROR! Enter a real value greater than 0"
convertBtn.addEventListener("click" , function(){
    let input = document.getElementById("number-convert").value
    let numberConvert = Number(input)
    if (numberConvert > 0){
    convertLength(numberConvert)
    convertVolume(numberConvert)
    convertMass(numberConvert)
    }
    else {
    error()
    }   
})
function convertLength(num){
    const feetTometerConvert = (num/3.281).toFixed(3)
    const meterTofeetConvert= (num * 3.281).toFixed(3)
    lengthVal.textContent = `${num} meters = ${meterTofeetConvert} feet | ${num} feet = ${feetTometerConvert} meter`
}
function convertVolume(num){
    const gallonTolitersConvert = (num/ 0.264).toFixed(3)
    const litersTogallonConvert = (num * 0.264).toFixed(3)
    volumeVal.textContent = `${num} liters = ${litersTogallonConvert} gallons | ${num} gallons = ${gallonTolitersConvert} liters`
}
function convertMass(num){
    const kiloTopoundsConvert = (num *2.204).toFixed(3)
    const poundsTokiloConvert = (num /2.204).toFixed(3)
    massVal.textContent =  `${num} kilos = ${kiloTopoundsConvert} pounds | ${num} pounds = ${poundsTokiloConvert} kilos`
}
function error(){
    lengthVal.textContent = errorMsg
    volumeVal.textContent = errorMsg
    massVal.textContent = errorMsg
}
