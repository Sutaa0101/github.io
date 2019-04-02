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
    switch(type){
        case "sen":
            createSentence(code,data); 
        break;

        case "img":
            createImage(code,data);
        break;
    }
}

function createSentence(code,data){
    let aryData = data;

    let inputCode = document.createTextNode(code);
    let outputArea = document.getElementById("outputArea");
    
    let titleDiv = document.createElement("div");
    titleDiv.setAttribute("class","docTitle");
    titleDiv.appendChild(inputCode);

    let bodyDiv = document.createElement("div");
    bodyDiv.setAttribute("class","docBody");

    for(let i =0;i<aryData.length;i++){
        let pElm = document.createElement("p");
        let sen = document.createTextNode(aryData[i]);
        pElm.appendChild(sen);
        bodyDiv.appendChild(pElm);
    }

    let newDiv = document.createElement("div");
    newDiv.setAttribute("class","sentence");
    newDiv.appendChild(titleDiv);
    newDiv.appendChild(bodyDiv);
    outputArea.appendChild(newDiv);
}

function createImage(code,data){
    let aryData = data;

    let inputCode = document.createTextNode(code);
    let outputArea = document.getElementById("outputArea");
    
    let titleDiv = document.createElement("div");
    titleDiv.setAttribute("class","docTitle");
    titleDiv.appendChild(inputCode);

    let bodyDiv = document.createElement("div");
    bodyDiv.setAttribute("class","docBody");

    for(let i =0;i<aryData.length;i++){
        let iElm = document.createElement("img");
        iElm.setAttribute("src",aryData[i]);
        bodyDiv.appendChild(iElm);
    }

    let newDiv = document.createElement("div");
    newDiv.setAttribute("class","image");
    newDiv.appendChild(titleDiv);
    newDiv.appendChild(bodyDiv);
    outputArea.appendChild(newDiv);
}