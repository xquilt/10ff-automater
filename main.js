function sleep(milliseocnds) {
  const date = Date.now()
  let currentDate
  do {
    currentDate = Date.now()
  }while((currentDate - date)- milliseocnds)
}

let inputField = document.getElementsByTagName("input")[0]
let newInputEvent = new InputEvent("input")
let wordsCount = document.querySelector(".place").childElementCount
let promptDelay = window.prompt('add delay between each character') * 1

function addWord() {  
  let hightlightedWord = document.querySelector(".highlight").textContent
  let hWordLength = hightlightedWord.length

  for (let i = 0; i < hWordLength ; i ++ ) {
    inputField.value += hightlightedWord[i] ; 
    inputField.dispatchEvent(newInputEvent) ;
    sleep(promptDelay)
  }
  inputField.value += " "; 
  inputField.dispatchEvent(newInputEvent) ;
  inputField.value = ''
}     

setInterval(addWord , promptDelay)
