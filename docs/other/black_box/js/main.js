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
    if(result.poss){
        createOutput(result.type,result.data,inputCode.value);
    }else{
        window.alert("ERROR!");
    }
    inputCode.value = "";
}

function createOutput(type,data,code){
    if(type == "sen"){
        createSentence(code,data);
    }
    else if(type == "img"){

    }
    else{

    }
}

function createSentence(code,data){
    let inputCode = document.createTextNode(code);
    let sentence = document.createTextNode(data);
    let outputArea = document.getElementById("outputArea");
    let newDiv = document.createElement("div");

    newDiv.setAttribute("class","sentence");
    newDiv.appendChild(inputCode);
    newDiv.appendChild(sentence);
    outputArea.appendChild(newDiv);
}