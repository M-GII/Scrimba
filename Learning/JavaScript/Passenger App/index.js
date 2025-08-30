let count = 0 // How to set variables in JavaScript (they can be numbers,simple math operations + - / * , other variables and etc.)

let countEl = document.getElementById("count-el") 
// This line gets a reference to an HTML element with the ID "count-el"
// `document` refers to the web page loaded in the browser
// `.getElementById()` is a built-in method that finds an element by its ID
// The result is stored in the variable `countEl`, which can now be used to read or change that element

console.log(countEl)
// This prints the entire HTML element to the console
// Since `countEl` refers to an actual DOM element (not just text), the console will show it as:
// <h2 id="count-el">0</h2> (or whatever tag and text is used in the HTML)
// This helps confirm that JavaScript successfully selected the element with id="count-el"
// You can also expand it in the console to see its properties and nested content, basically gets the whole line(s) of code related to that id and displays it 

console.log(count) //How to show the value of a variable in JavaScript kinda like "print(count)"" in Python 
                   // (has to be placed after variable initilization since JavaScript reads top to bottom)


function increment() { //how to initilize functions in javascript
    count +=1

    countEl.innerText = count
    // This updates the text displayed in the HTML element with the current count value
    // `innerText` is a property that changes what the user sees inside the element
    // So if count = 3, the text inside the <span> or <div> will now show "3", “Make the actual thing displayed in that id show this.”


    console.log(count) //How to show the value of a variable in JavaScript kinda like "print(count)"" in Python 
                       // (has to be placed after variable initilization since JavaScript reads top to bottom)  

}
function save() {
    let saveEl = document.getElementById("save-el")
    saveEl.innerText += " " + count + " - "
    count = 0 
    countEl.innerText= count
    console.log(count)


}