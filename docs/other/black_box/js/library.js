function searchLib(inputCode){
    let code = inputCode;
    let result = [false,""];

    if(code == "") return result;

    let xml = new XMLHttpRequest();
    let requestURL = "./json/library.json";

    xml.open("GET",requestURL);
    xml.responseType = "json";
    xml.send();
    
    xml.onload = function(){
        let doc = xml.response;
        searchSentence(code,doc);

    }

    let str = "BLACK BOXとは、何らかのcodeを入力する事で隠されたコンテンツを表示する不明な存在です。これは何ですか？";
    let key = "about";
    let encrypted = CryptoJS.AES.encrypt(str, key);
    console.log(encrypted.toString());
    
    return result;
}

function searchSentence(inputCode,docAry){
    let code = inputCode;
    let sen = docAry.sentence;

    for(let i = 0;i<sen.length;i++){
        let name = sen[i].name;
        let deName = CryptoJS.AES.decrypt(name,code);
        if(code === deName.toString(CryptoJS.enc.Utf8)){
            result[0] = true;
            let data = sen[i].data;
            let deData = CryptoJS.AES.decrypt(data,code);

            result[1] = deData.toString(CryptoJS.enc.Utf8);
            break;
        }
    }
}