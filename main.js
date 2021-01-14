
var inputField = document.getElementsByTagName("input")[0] ; 
var newInput = new InputEvent("input") ; 
var itemsCount = document.querySelector(".place").childElementCount ; 

// this first for loop & the subsequent setTimeout() web api function is causing a problem that i still can't fix ; 
// so just comment them out later on ... the code so far input each character in every word at a time (which is pretty cool)
for  (let i = 0 ; i < itemsCount ; i ++  ) {

        var hWord = document.querySelector(".highlight").textContent ;
        var hWordLength = hWord.length ; 

        setTimeout(

            () => {
                for (let i = 0; i <= hWordLength ; i ++ ) {
                    setTimeout(
                        () => {
                              if (i == hWordLength ) {
                                inputField.value += " "; 
                                inputField.dispatchEvent(newInput) ;
                              } 
                                    else if( i < hWordLength) {
                                    inputField.value += hWord[i] ; 
                                    inputField.dispatchEvent(newInput) ;
                              } ; 
                            console.log("that's the number " + i ) 
                            } , 

                          i * 1000          

                        )  ; 
                    console.log("i should be printed out at the end") ; 
                  }
                } , 
          
               1000 
         )
    }
