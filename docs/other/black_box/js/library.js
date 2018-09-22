function searchLib(inputCode){
    let code = inputCode;


    let xml = new XMLHttpRequest();
    let requestURL = "./json/library.json";

    xml.open("GET",requestURL);
    xml.responseType = "json";
    xml.send();
    
    xml.onload = function(){
        let doc = xml.response;
        let sen = doc.sentence;
        
        for(let i = 0;i<sen.length;i++){
            let name = sen[i].name;
            let deName = CryptoJS.AES.decrypt(name,code);
            if(code == deName){
                console.log(sen[i].data);
                break;
            }
        }
    }

    let str = "about";
    let key = "about";
    let encrypted = CryptoJS.AES.encrypt(str, key);
    console.log(encrypted.toString());
    let decrypted = CryptoJS.AES.decrypt(encrypted,key);
    console.log(decrypted.toString(CryptoJS.enc.Utf8));
    
    return true;
}