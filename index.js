var pages = [
"#Personal",
"#Git",
"#Blog",
"#Projects"
];

$(document).ready( function() {
    cssReset();
    $('.row').hover( 
        function() {
            cssReset();
            hoverExpand($(this));
            hoverShow($(this));
        },
        function() {
        }
    );

    $('.row').click(
        function() {
            clickExpand($(this));
            clickShow($(this));
    });
});

hoverExpand = function(p) {
    var page = "#" + $(p).attr("id");
    $(page).css({"height" : "40%"});
    for (i in pages) {
        if (pages[i] != "#" + $(p).attr("id")) {
            $(pages[i]).css("height", "20%");
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
    $(page + " .img-responsive").fadeIn();
    $(page + " .title2").show();
    $(page + " .lead").fadeTo(200, 0);
    $(page + " .detail").show();
    // $(".title").fadeTo(200, 0);
};

cssReset = function() {
    $(".detail").hide();
    $(".img-responsive").hide();
    $(".title").fadeTo(200, 1.0);
    $(".title2").hide();
    $(".row").css({"background-image": ""});
    $("#Git").css({"background-color": "black"});
};
