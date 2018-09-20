$(document).ready(function(){
  $("#bg").bgswitcher({
    images: [
      "img/a.png",
      "img/b.png",
      "img/c.png",
      "img/d.png",
      "img/e.png",
      "img/f.png",
      "img/g.png",
      "img/h.png",
      "img/i.png",
      "img/j.png",
      "img/k.png",
      "img/l.png"
    ],
    effect: "fade",
    easing: "swing",
    loop: true
    });
  });

  $(".modal-open").click(
  	function(){
  		modalResize();

      $("#modal-overlay,#modal-content").fadeIn("high");
      if($(this).hasClass("modal-about")) $("#modal-about-text").fadeIn("high");
      if($(this).hasClass("modal-link")) $("#modal-link-text").fadeIn("high");

  		if($(this).hasClass("modal-non-series")) $("#modal-non-series-text").fadeIn("high");
  		if($(this).hasClass("modal-mirai-sekai")) $("#modal-mirai-sekai-text").fadeIn("high");
  		if($(this).hasClass("modal-mirai-yoshi")) $("#modal-mirai-yoshi-text").fadeIn("high");
  		if($(this).hasClass("modal-gensou-sinwa")) $("#modal-gensou-sinwa-text").fadeIn("high");
  		if($(this).hasClass("modal-gohun-dassyutu")) $("#modal-gohun-dassyutu-text").fadeIn("high");

      if($(this).hasClass("modal-appli-non-series")) $("#modal-appli-non-series-text").fadeIn("high");

  		if($(this).hasClass("modal-tototo")) $("#modal-tototo-text").fadeIn("high");
  		if($(this).hasClass("modal-kaerimiti")) $("#modal-kaerimiti-text").fadeIn("high");
  		if($(this).hasClass("modal-kaerikiji")) $("#modal-kaerikiji-text").fadeIn("high");
  		if($(this).hasClass("modal-nagisa")) $("#modal-nagisa-text").fadeIn("high");
  		if($(this).hasClass("modal-yutaro")) $("#modal-yutaro-text").fadeIn("high");
  	}
  );

  function modalResize(){

  		var w = $(window).width();
  		var h = $(window).height();
  		var cw = $("#modal-content").outerWidth();

  		$("#modal-content").css({
  				"left": ((w - cw)/2) + "px",
  				"max-height": ((h/3)*2) + "px"
  		});
  	}
  $(window).resize(modalResize);

  $("#modal-overlay,#modal-close").unbind().click(
  	function(){
        $("#modal-overlay,#modal-content").fadeOut("high");
        $("#modal-about-text").fadeOut("high");
        $("#modal-link-text").fadeOut("high");

  			$("#modal-non-series-text").fadeOut("high");
  			$("#modal-mirai-sekai-text").fadeOut("high");
  			$("#modal-mirai-yoshi-text").fadeOut("high");
  			$("#modal-gensou-sinwa-text").fadeOut("high");
  			$("#modal-gohun-dassyutu-text").fadeOut("high");

        $("#modal-appli-non-series-text").fadeOut("high");

  			$("#modal-tototo-text").fadeOut("high");
  			$("#modal-kaerimiti-text").fadeOut("high");
  			$("#modal-kaerikiji-text").fadeOut("high");
        $("#modal-nagisa-text").fadeOut("high");
  			$("#modal-yutaro-text").fadeOut("high");

  	}
  );

  $(".game-open").click(function(){
    var xPromise = $.when(
      $("#main-menu").fadeOut("high")
    ).done(function(){
      $("#game-menu").fadeIn("high")
    });
  });

  $(".appli-open").click(function(){
    var xPromise = $.when(
      $("#main-menu").fadeOut("high")
    ).done(function(){
      $("#appli-menu").fadeIn("high")
    });
  });

  $(".collabo-open").click(function(){
    var xPromise = $.when(
      $("#main-menu").fadeOut("high")
    ).done(function(){
      $("#collabo-menu").fadeIn("high")
    });
  });

  $(".main-open").click(function(){
    var xPromise = $.when(
      $("#game-menu").fadeOut("high"),
      $("#appli-menu").fadeOut("high"),
      $("#collabo-menu").fadeOut("high")
    ).done(function(){
      $("#main-menu").fadeIn("high")
    });
  });

  $(document).ready(function(){
    $("#load-screen").fadeOut("high")
  });
