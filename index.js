var pages = [
"#Personal",
"#Git",
"#Blog",
"#Projects"
];

var lastClicked;
var lastPage; //Currently not in use!

$(document).ready( function() {
    cssReset();
    $('.row').hover( 
        function() { // Upon entrance
            cssReset();
            hoverExpand($(this));
            hoverShow($(this));
            if (lastClicked === "Git") {
                lastClicked = ""; 
                gitCatReset();
            };
        }, // Upon exit, just catch id.
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

hoverExpand = function(p) { // Expand div and resize others accordingly
    var page = "#" + $(p).attr("id");
    $(page).css({"height" : "40%"});
    //$(page).css({"border" : "1px solid white"});
    for (i in pages) {
        if (pages[i] != "#" + $(p).attr("id")) {
            $(pages[i]).css("height", "20%");
            //$(pages[i]).css("opacity", "0.50");
        };
    };
};

hoverShow = function(p) { // Modify div content on hover
    var page = "#" + $(p).attr("id");
    $(page + " .lead").fadeTo(200, 1.0);
    for (i in pages) {
        if (pages[i] != "#" + $(p).attr("id")) {
            $(pages[i] + " .lead").fadeTo(200, 0);
        };
    };
};

clickExpand = function(p) { //Similar to hover; octocat is exception
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
    // More or less working properly; seems to jolt up and down (?) on mobile
    $("#Git").animate({"background-position-x": "20%",// First get the octocat far down
                       "background-position-y": "-100%"}, 0, function() {
        $("#Git").css({"background-image": ""}); // then reactivate its existence 
        $("#Git").animate({"background-position-x": "20%",// Crawl it up to original position
                           "background-position-y": "100%"}, 1500, "linear");
    });
};
