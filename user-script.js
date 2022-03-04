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
and the dangling variable should be returned somehow to be used somewhere else.
- This function will be extended enabling it to be more lenient with user's probable input errors
*/
function promptValueCheck() {
    desiredWpmSpeed = window.prompt('Add the desired Speed (WPM)!')
	// The order of the if-else statement are ascendingly sorted based on their conditions' computational operations
	if ( desiredWpmSpeed === null ){
		return (false)
	}
	else if ( Number.isInteger(parseInt(desiredWpmSpeed)) ) {
		desiredWpmSpeed = parseInt(desiredWpmSpeed)
        return (true)
    }
	else if ( desiredWpmSpeed.match(/\d+/) !== null ) {
		desiredWpmSpeed = parseInt(desiredWpmSpeed.match(/\d+/)[0])
		return (true)
	}
	else {
		return (false)
	}
}

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
