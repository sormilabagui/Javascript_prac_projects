let outputscreen =  document.getElementById("outputScreen")
function display(num){
    outputscreen.value += num;
}

function cal(){
    try{
        outputscreen.value = eval(outputscreen.value);
    }
    catch(err){
        outputscreen.value = "Error"
    }
}
function cleardis(){
    outputscreen.value = "";
}

function del(){
    outputscreen.value = outputscreen.value.slice(0,-1)
}