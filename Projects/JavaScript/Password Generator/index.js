const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
                    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let pass1 = document.getElementById("gen-passOne")
let pass2 = document.getElementById("gen-passTwo")
let randomNum = 0
let generateBtn = document.getElementById("generate")
let errorMsg= document.getElementById("error-msg")
generateBtn.addEventListener("click" , checkLength)

function checkLength(){
     let length = Number.parseInt(document.getElementById("length-input").value)
     if (length <5 || length > 17 ){
        errorMsg.textContent = "ERROR! Length must be between 5-17"
        return
     }
     else{
        errorMsg.textContent = ""
        generate(length)
     }

}

function generate(length) {
    pass1.textContent=""
    pass2.textContent=""
    for(let i = 0;i<length;i++){
        randomNum= Math.floor(Math.random()*characters.length)
        pass1.textContent+=characters[randomNum]
    }
    for(let j = 0;j<length;j++){
        randomNum= Math.floor(Math.random()*characters.length)
        pass2.textContent+=characters[randomNum]
    }
}

 function copy(element) {
    let text = element.textContent;
    navigator.clipboard.writeText(text)
    alert("Copied: " + text);
  }

  pass1.addEventListener("click", function(){
     copy(pass1)
  })

pass2.addEventListener("click", function(){
     copy(pass2)
  })