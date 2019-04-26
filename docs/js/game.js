$(function(){
    //リストアップ
    $.getJSON("json/game.json",
    function(data){
        console.log(data);
        $.each(data,(key,ele) => {
            let toAppend = `#${key}`;
            $.each(ele,(i,data)=>{
                $(`${toAppend} .game-display-series`).append(`
                    <div class="game-display">
                        <img src="img/game/${data.img}.png" alt="${data.name}">
                        <div class="game-data">
                            <p class="game-display-title">${data.name}</p>
                            <div class="game-display-description">
                                <p>公開日：${data.date}</p>
                                <p>ジャンル：${data.genre}</p>
                            </div>
                            <a class="game-display-link" href="${data.url}" target="_blank">
                                ゲームプレイへ
                            </a>
                        </div>
                    </div>
                `);
            });
        });
    });

    //モーダル
    $("#so-den .game-series-title").click(
        function(){
            console.log("クリック！");
        }
    );
    $("#non-series .game-series-title").click(
        function(){
            console.log("クリック！");
        }
    );
    $("#future-world .game-series-title").click(
        function(){
            console.log("クリック！");
        }
    );
    $("#future-history .game-series-title").click(
        function(){
            console.log("クリック！");
        }
    );
    $("#fantasy-mythology .game-series-title").click(
        function(){
            console.log("クリック！");
        }
    );
    $("#five-minute-escape .game-series-title").click(
        function(){
            console.log("クリック！");
        }
    );
});