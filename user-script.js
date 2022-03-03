// ==UserScript==
// @name         10ff speed hack
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  JS script to automate the input of characters at 10ff.net
// @author       z0xyz
// @match        https://10ff.net/*
// @run-at       document
// ==/UserScript==

function sleep(milliseocnds) {
    const date = Date.now()
    let currentDate
    do {
        currentDate = Date.now()
    } while ((currentDate - date) - milliseocnds)
}

/*
- User input's data type validation
- This fucntion should be in a more compact form,
and the variable should be returned somehow to be used somewhere else.
*/
function promptValueCheck() {
    let desiredWpmSpeed = window.prompt('Add the desired Speed (WPM)!')
    if (Number.isInteger(parseInt(desiredWpmSpeed))) {
        return (true)
    } else {
        return (false)
    }
}

console.log(Number.isInteger(someValue))

let someValue = '20'
console.log(parseInt('10'))
console.log(parseInt('10.02'))
console.log(parseInt('10.33'))
console.log(parseFloat('10.33'))
console.log(Number('10.33'))
console.log(parseInt('10 20 30'))
console.log(parseInt(' 10 '))
console.log(Number.isInteger(parseInt(' 10 ')))
console.log(parseInt('He was 10'))
console.log(parseInt('10 He was '))
console.log(Number('10 He was '))
console.log(Number('He was 10'))


function addWord() {
    try {
        let hightlightedWord = document.querySelector(".highlight").textContent
        let hWordLength = hightlightedWord.length

        for (let i = 0; i < hWordLength; i++) {
            inputField.value += hightlightedWord[i];
            inputField.dispatchEvent(newInputEvent);
            sleep(eachCharacterInterval)
        }
        inputField.value += " ";
        inputField.dispatchEvent(newInputEvent);
        inputField.value = ''
    } catch {
        clearInterval(intervalMethod)
    }
}

function checkSite() {
    if (promptValueCheck()) {
        let charactersCount = document.querySelector(".place").textContent.length
        let totalTypingTimeSec = (charactersCount / 5) / desiredWpmSpeed * 1
        eachCharacterInterval = Math.round((totalTypingTimeSec * 60000) / charactersCount)

        inputField = document.getElementsByTagName("input")[0]
        newInputEvent = new InputEvent("input")

        intervalMethod = setInterval(addWord, eachCharacterInterval)
    }
    else {
        console.log("No valid value was entered!")
    }
}

(() => {
    let overlayNode = document.getElementsByClassName('overlayer').item(0)
    let config = {
        subtree: true,
        characterData: true
    }

    layerObserver = new MutationObserver(mutated)

    function mutated(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.target.wholeText == "false") {
                console.log("The contest is now opened!")
                checkSite()
            }
        })
    }

    layerObserver.observe(overlayNode, config)
})()

//Add the functionality to insert arbitrary randomized characters ; to acquire credibility
//Alter the userscript description with things like "approximate"

//We can randomize the typingTime variable in a range between
