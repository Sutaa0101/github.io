document.onkeydown = function(event){
    let keyCode = event.code;
    let target = event.target;
    if(keyCode == "Enter" && target.type == "text"){
        let submit = document.getElementById("searchSubmit");
        return submit.onclick();
    }    
}

function inputSearch(){
    let inputCode = document.getElementById("inputCode");

    if(searchLib(inputCode.value)){
        createOutput(inputCode.value);
    }
    inputCode.value = "";
}

function createOutput(code){
    let inputCode = document.createTextNode(code);
    let outputArea = document.getElementById("outputArea");
    let newDiv = document.createElement("div");

    newDiv.setAttribute("class","sentence");
    newDiv.appendChild(inputCode);
    outputArea.appendChild(newDiv);
}