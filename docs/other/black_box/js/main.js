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

    let result = searchLib(inputCode.value);
    if(result[0]){
        createOutput(result[1]);
    }else{
        window.alert("ERROR!");
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