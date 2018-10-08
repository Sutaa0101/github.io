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
        "data":[]
    };

    if(code == "") return result;

    result = searchSentence(code,doc.sentence);
    if(result.poss == false) result = searchImage(code,doc.image);
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
                "data":[]
            };
            
            for(let j = 0;j<sen[i].data.length;j++){
                let data = sen[i].data[j];
                let deData = CryptoJS.AES.decrypt(data,code);

                result.data.push(deData.toString(CryptoJS.enc.Utf8));
            }
        
        return result;
        }
    }
    
    
    let result = {
        "poss":false,
        "type":"",
        "data":[]
    };
    return result;
}

function searchImage(inputCode,docAry){
    let code = inputCode;
    let img = docAry;

    for(let i = 0;i<img.length;i++){
        let name = img[i].name;
        let deName = CryptoJS.AES.decrypt(name,code);
        if(code === deName.toString(CryptoJS.enc.Utf8)){
            let result = {
                "poss":true,
                "type":"img",
                "data":[]
            };
            
            for(let j = 0;j<img[i].data.length;j++){
                let data = img[i].data[j];
                let deData = CryptoJS.AES.decrypt(data,code);

                result.data.push(deData.toString(CryptoJS.enc.Utf8));
            }
        
        return result;
        }
    }
    
    
    let result = {
        "poss":false,
        "type":"",
        "data":[]
    };
    return result;
}