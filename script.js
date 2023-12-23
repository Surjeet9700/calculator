const display = document.getElementById("display")

function appendToDisplay(input){
    console.log("Appending to display:", input);
    display.value += input;
}


function clearToDisplay(){
    display.value = '';
}

function calculator(){

    try{
        display.value = eval(display.value)
    }
    catch(e){
        display.value = "Error"
    }
}