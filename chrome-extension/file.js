function sleep(milliseocnds) {
  const date = Date.now()
  let currentDate
  do {
    currentDate = Date.now()
  }while((currentDate - date)- milliseocnds)
}

function globalVariables(){
  inputField = document.getElementsByTagName("input")[0]
  newInputEvent = new InputEvent("input")
  wordsCount = document.querySelector(".place").childElementCount
  promptDelay = window.prompt('add delay between each character') * 1  
}

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

function checkSite(){
  let startIndicator = document.getElementsByClassName('overlayer').item(0).textContent
  if (startIndicator != "false"){
    setTimeout(checkSite , 1000)
  }
  else {
    console.log("now , the site is open")
    globalVariables()
    intervalMethod = setInterval(addWord , promptDelay)
  }
}

checkSite()

window.addEventListener('keydown',
  function(keydownEvent){
    if (keydownEvent.key == 'Escape'){
      clearInterval(intervalMethod)
    }
  }
,false)
