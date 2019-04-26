$(function(){
    $.getJSON("json/link.json",
        function(data){
            console.log(data);
            $.each(data,(i,ele) => {
                $("#link-banners").append(`
                    <div class="link-banner">
                        <p>${ele.name}</p>
                        <a href=${ele.link} target="_blank">
                            <img src=${ele.img} alt=${ele.name}>
                        </a>
                    </div>
                `);
            });
        }    
    );
});