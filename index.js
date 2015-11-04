var pages = [
"#Personal",
"#Git",
"#Blog",
"#Projects"
];

var lastClicked;    // Know where the cursor is
var lastPage;       // at all times!

$(document).ready( function() {
    cssReset();
    $('.row').hover( 
        function() { // Upon entrance
            if (lastClicked == null) {   // e.g if the user has not clicked a div
                cssReset();             // do the following to make 
                hoverShow($(this));     // Do the following to create "wave" effect.
                hoverExpand($(this));
            } else if (lastClicked != $(this).attr("id")) {
                hoverShow($(this));     // Otherwise just show the .lead of each div
            };
        }, 
        function() { // Upon exit
            lastPage = $(this).attr('id');  // Track that cursor!
            hoverHide();                    // Hide .lead  
        }
    );

    $('.row').click(
        function() {
            clickExpand($(this));               // Expand
            clickShow($(this));                 // Display .detail and images
            lastClicked = $(this).attr('id');   // Track cursor 
    });
});

hoverExpand = function(p) { // Expand div and resize others accordingly
    var page = "#" + $(p).attr("id");
    $(page).css({"height" : "40%"});
    for (i in pages) {  
        if (pages[i] != "#" + $(p).attr("id")) {
            $(pages[i]).css("height", "20%");
        };
    };
};

hoverShow = function(p) { // Show .lead
    var page = "#" + $(p).attr("id");
    $(page + " .lead").fadeTo(200, 1.0);
};

hoverHide = function() { // Hide .lead
    var page = "#" + lastPage;
    $(page + " .lead").fadeTo(200, 0);
};

clickExpand = function(p) { //Similar to hoverExpand; octocat is exception
    if (lastClicked != $(p).attr("id")) {   // Was this div just clicked? If so do nothing. 
        if (lastClicked == null) {          // Is this the first click? 
            lastClicked = "";               // If so, remove null association with lastClicked
        }else{                              // Proceed to focus on div, and check for the 
            cssReset();                     // git octocat special case.
        };
        var page = "#" + $(p).attr("id");
        $(page).css({"height" : "76%"});
        $(page + " .pageTop").css({"display": "none"}); //Keep grid structure;
        for (i in pages) {                             //But allow pages to be fully  
            if (pages[i] != "#" + $(p).attr("id")) {   //Used
                $(pages[i]).css("height", "8%");
            };
        };
        if (lastClicked === "Git") {
            gitCatReset();
        }else if (page === "#Git") {;
            $(page).css({'background-image': 'none'}).css({'background-color': 'white'});
        };
    };
};

clickShow = function(p) {
    if (lastClicked != $(p).attr("id")) {   // Was this div just clicked? If so, do nothing.
        var page = "#" + $(p).attr("id");
        $(page).css({"cursor" : "auto"})
        $(page + " .img-responsive").fadeIn();
        $(page + " .title2").show();
        $(page + " .detail").show();
        $(page + " .lead").fadeTo(200, 0);
        $(page + " .title").fadeTo(200, 0);
        if (page === "#Blog") {
            $("#iframeContent").show("slow");
        };
    };
};

cssReset = function() { // Used to reset to intial css, hiding details and images of rows
    $(".row").css({"cursor": ""});
    $(".row").css({"border": ""});
    $(".row").css({"opacity" : ""});
    $(".detail").hide();
    $("#iframeContent").hide("slow");
    $(".img-responsive").hide();
    $(".title").fadeTo(200, 1.0);
    $(".title2").hide("fast");
    $(".pageTop").css({"display" : ""});
};

gitCatReset = function() {  // More or less working properly; seems to jolt up and down (?) on mobile
    $("#Git").animate({backgroundColor: "black"});
    $("#Git").animate({"background-position-x": "20%",// First get the octocat far down
                       "background-position-y": "-100%"}, 0, function() {
        $("#Git").css({"background-image": ""}); // then reactivate its existence 
        $("#Git").animate({"background-position-x": "20%",// Crawl it up to original position
                           "background-position-y": "100%"}, 1500, "linear");
    });
};
