loadScroll = function() {
    $("#Projects").scroll(function() {
        introPos = $("#intro").offset().top;
        aboutPos = $("#about").offset().top;
        servPos = $("#services").offset().top;
        contPos = $("#contact").offset().top;
        topPos = $("#Projects").offset().top;
        pageSize = Math.abs(introPos - aboutPos);

        $("#intro .scrollTitle").css({"opacity" : (700 + introPos)/$("#Projects").offset().top});
        $("#about .scrollTitle").css({"opacity" : (700 + aboutPos)/$("#Projects").offset().top});
        $("#services .scrollTitle").css({"opacity" : (700 + servPos)/$("#Projects").offset().top});
        $("#contact .scrollTitle").css({"opacity": (700 + contPos)/$("#Projects").offset().top});
    });
};
