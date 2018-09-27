let xml = new XMLHttpRequest();
let requestURL = "./json/library.json";
let doc;

xml.open("GET",requestURL);
xml.responseType = "json";
xml.send();
xml.onload = function(){
    doc = xml.response;   
}

function searchLib(inputCode){
    let code = inputCode;
    let result = {
        "poss":false,
        "type":"",
        "data":""
    };

    if(code == "") return result;

    result = searchSentence(code,doc.sentence);
    return result;
}

function searchSentence(inputCode,docAry){
    let code = inputCode;
    let sen = docAry;

    for(let i = 0;i<sen.length;i++){
        let name = sen[i].name;
        let deName = CryptoJS.AES.decrypt(name,code);
        if(code === deName.toString(CryptoJS.enc.Utf8)){
            let result = {
                "poss":true,
                "type":"sen",
                "data":""
            };
            let data = sen[i].data;
            let deData = CryptoJS.AES.decrypt(data,code);
            
            result.data = deData.toString(CryptoJS.enc.Utf8);
            return result;
        }
    }

    let result = {
        "poss":false,
        "type":"",
        "data":""
    };
    return result;
}