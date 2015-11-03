var pages = [
"#Personal",
"#Git",
"#Blog",
"#Projects"
];

var lastClicked;
var lastPage;

$(document).ready( function() {
    cssReset();
    $('.row').hover( 
        function() {
            cssReset();
            hoverExpand($(this));
            hoverShow($(this));
            setInterval(function() {
                $(this).toggleClass(".rowTwo")},
                1000);
            if (lastClicked === "Git") {
                lastClicked = "";
                gitCatReset();
            };
        },
        function() {
            lastPage = $(this).attr('id');
        }
    );

    $('.row').click(
        function() {
            lastClicked = $(this).attr('id');
            clickExpand($(this));
            clickShow($(this));
    });
});

hoverExpand = function(p) {
    var page = "#" + $(p).attr("id");
    $(page).css({"height" : "40%"});
    //$(page).css({"border" : "1px solid white"});
    for (i in pages) {
        if (pages[i] != "#" + $(p).attr("id")) {
            $(pages[i]).css("height", "20%");
            $(pages[i]).css("opacity", "0.50");
        };
    };
};

hoverShow = function(p) {
    var page = "#" + $(p).attr("id");
    $(page + " .lead").fadeTo(200, 1.0);
    for (i in pages) {
        if (pages[i] != "#" + $(p).attr("id")) {
            $(pages[i] + " .lead").fadeTo(200, 0);
        };
    };
};

clickExpand = function(p) {
    var page = "#" + $(p).attr("id");
    $(page).css({"height" : "76%"});
    for (i in pages) {
        if (pages[i] != "#" + $(p).attr("id")) {
            $(pages[i]).css("height", "8%");
        };
    };
    if (page === "#Git") {
        $(page).css({'background-image': 'none'}).css({'background-color': 'white'});
    };
};

clickShow = function(p) {
    var page = "#" + $(p).attr("id");
    $(page).css({"cursor" : "auto"})
    $(page + " .img-responsive").fadeIn();
    $(page + " .title2").show();
    $(page + " .lead").fadeTo(200, 0);
    $(page + " .detail").show();
    $(page + " .title").fadeTo(200, 0);
};

cssReset = function() {
    $(".row").css({"cursor": ""});
    $(".row").css({"border": ""});
    $(".row").css({"opacity" : ""});
    $(".detail").hide();
    $(".img-responsive").hide();
    $(".title").fadeTo(200, 1.0);
    $(".title2").hide("fast");
};

gitCatReset = function() {
    $("#Git").animate({backgroundColor: "black"});
    // Below only works once! Need to do math...
    $("#Git").animate({"background-position-x": "20%",
                       "background-position-y": "-100%"}, 0, function() {
        $("#Git").css({"background-image": ""});
        $("#Git").animate({"background-position-x": "20%",
                           "background-position-y": "100%"}, 1500, "linear");
    });
};
