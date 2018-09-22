function searchLib(){
    let requestURL = "./json/sentence.json";
    let request = new XMLHttpRequest();
    request.open("GET",requestURL);

    request.responseType= "json";
    request.send();
    
    request.onload = function(){
        let doc = request.response;
        console.log(doc);
    }
    return false;
}