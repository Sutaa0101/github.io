$(function(){
    $.getJSON("json/news.json",
        function(data){
            console.log(data);
            $.each(data,(i,ele) => {
                $("#news-content").append(`
                    <dt>${ele.date}</dt>
                    <dd>${ele.news}</dd>
                `);
            });
        }    
    );
});