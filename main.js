// 10 FAST FINGERS HACK 
// phase 1 : retrieve the text 
// Phase 2 : inputting the retrieved text to the input field 
// making an event trigger an action of dat input 

function doSomething() {
	var highlighted  = document.querySelector(".highlight"); 
	var inputValue  = document.getElementById("inputfield") ; 
	inputValue.value =  highlighted.textContent ; 
	inputValue.value = inputValue.value + " "
}


window.addEventListener("keydown" , doSomething , false)
