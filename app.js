var textInput = document.querySelector("#text-input")
var buttonTranslate = document.querySelector("#button-translate")
var textOutput = document.querySelector("#text-output")
var infoDiv = document.querySelector("#info-div");
//infoDiv is to print error messages

function constructURL(text){
    return "https://api.funtranslations.com/translate/chef.json" +"?text=" +text;
}

function constructMockURL(text){
    return "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" + "?text=" + text;
}
function doFetch(text){
    // fetch(constructMockURL(text))
    // .then(response =>response.json())
    // .then(json => textOutput.innerText =json.contents.translated).catch(errorHandler)

    fetch(constructURL(text))
    .then(response => response.json())
    .then(json => textOutput.innerText = json.contents.text+" "+json.contents.translation)
    .catch(errorHandler)
}

function errorHandler(error){
    infoDiv.innerText="Server is too busy,talk with Swedish chef later(●'◡'●)"
    
    textOutput.innerText = ""
}

function btnClickHandler(){
    let finalInput = textInput.value;
    if(finalInput === ""){
        infoDiv.innerText = "Write something in English"
    }
    doFetch(finalInput);
    console.log(textInput.value);
    console.log(textOutput.value);
}

// let buttonClick = buttonTranslate;
buttonTranslate.addEventListener("click", btnClickHandler, false);