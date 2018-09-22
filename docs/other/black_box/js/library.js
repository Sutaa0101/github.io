function searchLib(inputCode){
    let code = inputCode;

    let xml = new XMLHttpRequest();
    let requestURL = "./json/sentence.json";

    xml.open("GET",requestURL);
    xml.responseType = "json";
    xml.send();
    
    xml.onload = function(){
        let doc = xml.response;
        let sen = doc.sentence;
        sen.foreach(function(value){
            console.log(value);
        });
    }

    let str = "about";
    let key = "about";
    let encrypted = CryptoJS.AES.encrypt(str, key);
    console.log(encrypted.toString());
    let decrypted = CryptoJS.AES.decrypt(encrypted,key);
    console.log(decrypted.toString(CryptoJS.enc.Utf8));
    
    return true;
}