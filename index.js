pages = [
"#Personal",
"#Git",
"#Blog",
"#Projects"
];

var lastClicked;    // Know where the cursor is
var lastPage;       // at all times!
iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;   
mobile = false;

if( $('.lead').css('display') === 'none') {
    mobile = true;      
}else{
    $("#scrollerFrame").remove();
};

$(window).load(function() {
    $("#loaderOut").fadeOut("slow", function(){$("#loaderOut").remove()});
});

$(document).ready( function() {
    cssReset();
    gitJSON();
    if (mobile === true) {
        mobileScroll(); 
    };
    if ( iOS != true) {
        $('.row.page').hover( 
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
    };

    $('.row.page').click(
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
            cssReset();
            if (mobile === false) {                     // git octocat special case.
                clearTimeout(focusTimer);
            };
        };
        var page = "#" + $(p).attr("id");
        $(page).css({"height" : "76%"});
        $(page + " .pageTop").css({"display": "none"}); //Keep grid structure;
        for (i in pages) {                             //But allow pages to be fully  
            if (pages[i] != "#" + $(p).attr("id")) {   //Used
                $(pages[i]).css("height", "8%");
            };
        };
        if ( mobile === false) {
            focusTimer = setTimeout(function() {    // If user is on page for 3s "focus" closer. 
                    $(page).css({"height" : "88%"});// All these expands could really be refactored!
                    for (i in pages) {
                        if (pages[i] != "#" + $(p).attr("id")) {
                            $(pages[i]).css("height", "4%");
                        };
                    };
                },
                3000);
        }else if (page === "#Blog" || page === "#Projects") {
            $(page).css({"z-index": "3000"});
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
        if (lastClicked === "Git") {
            gitCatReset();
        }else if (page === "#Git") {
            $(page)
                .css({'background-image': 'none'})
                .css({'background-color': 'white'})
                .css({'background-image': 'url("./media/contri.png")',
                      'background-size' : '100%'});
            
            $("#branchName").text(pushBranch);
            $("#repoLink").attr("href", pushRepoUrl);
            $("#repoText").text(pushRepoName);
            $("#messageNameUrl").attr("href", pushMessageUrl);
            $("#messageNameText").text(pushMessageName);
            $("#messageText").text(pushMessage);
            $("#starLink").attr("href", starRepoUrl);
            $("#starName").text(starRepoName);
            var logoradius = $("gitlogoWrap").css("border-radius");
            if (iOS != true){
                $("#gitlogoWrap").hover(function() {
                    $(this).css({"-webkit-border-radius":logoradius,
                                "-moz-border-radius": logoradius,
                                "border-radius": logoradius,
                                "-webkit-box-shadow": "0px 9px 20px 5px #59cdf4",
                                "-moz-box-shadow":    "0px 9px 20px 5px #59cdf4",
                                "box-shadow":         "0px 9px 20px 5px #59cdf4"});
                    $(this).effect("bounce", {distance: 10, times: 1}, "fast");
                                },function(){
                    $(this).css({"-webkit-box-shadow": "none",
                                "-moz-box-shadow":    "none",
                                "box-shadow":         "none"})});
            }else{
                logoInterval = setInterval(function () {
                    $("#gitlogoWrap").effect("bounce", {distance: 10, times: 1}, "slow");
                }, 3000);
                setTimeout(function() {
                    clearInterval(logoInterval);
                }, 12000) // bounce 3 times
            };
        };
        if (page === "#Blog"){
            $(page + " #blogWrapper").css({'overflow-y': 'scroll'});
        };
        if (page === "#Projects"){
                $(page).css({'overflow-y': 'scroll'});
        };
        if (page === "#Personal" && iOS != true) {
            //$(".contact-logo").hover( function() {
            //    $(this).effect("bounce", {distance: 1, times: 1}, "fast");
            //},
            //function(){});
        };
    };
};

cssReset = function() { // Used to reset to intial css, hiding details and images of rows
    $(".row.page").css({"cursor": "",
                   "border": "",
                   "opacity" : "",
                   "overflow": "",
                   "z-index": ""});
    $("#Blog #blogWrapper").css({"overflow-y": "hidden"}); // <- Resetting .row.page doesn't 
    $(".detail").hide();                                   // work, so this is req. Why?!
    $("#iframeContent").hide("slow");
    $(".img-responsive").hide();
    $(".title").fadeTo(200, 1.0);
    $(".title2").hide("fast");
    $(".pageTop").css({"display" : ""});
    $("#gitlogoWrap").unbind("mouseenter mouseleave");
};

gitCatReset = function() {  // More or less working properly; seems to jolt up and down (?) on mobile
    $("#Git").css({"background-image": "none"});
    $("#Git").animate({backgroundColor: "black"});
    $("#Git").animate({"background-position-x": "20%",// First get the octocat far down
                       "background-position-y": "-100%"}, 0, function() {
        $("#Git").css({"background-image": "",
                       "background-size" : ""}); // then reactivate its existence 
        $("#Git").animate({"background-position-x": "20%",// Crawl it up to original position
                           "background-position-y": "100%"}, 1500, "linear");
    });
};


//UPDATE THIS! IF .JSON HAS NEITHER PUSH OR WATCH EVENTS IT BREAKS EVERYTHING
gitJSON = function() {
    $.getJSON("https://api.github.com/users/ACollectionOfAtoms/events", function(data){
        var events = {"PushEvent": 0, "WatchEvent": 0}; //Switch used to find first occurence
        for (i in data) { // Single loop only going as deep as needed.
            if (data[i].type in events && events[data[i].type] === 0 && data[i].type === "PushEvent"){
                pushRepoName = data[i].repo.name;
                pushRepoUrl = data[i].repo.url;
                pushRepoUrl = httpURL(pushRepoUrl);
                pushBranch = data[i].payload.ref;
                pushBranch = pushBranch.split("/");
                pushBranch = pushBranch[pushBranch.length - 1];
                pushMessageName = data[i].payload.head.substring(0,6);
                pushMessageUrl = data[i].payload.commits[0].url;
                pushMessageUrl = httpURL(pushMessageUrl);
                pushMessage = data[i].payload.commits[0].message;
                if (pushMessage.length > 140) {
                    pushMessage = '"' + pushMessage.substring(0,139) + "..." + '"';
                }else{
                    pushMessage = '"' + pushMessage.substring(0,139) + '"';
                };
                events[data[i].type] = 1;
            }else if (data[i].type in events && events[data[i].type] === 0 && data[i].type === "WatchEvent") {
                starRepoName = data[i].repo.name;
                starRepoUrl = data[i].repo.url;
                starRepoUrl = httpURL(starRepoUrl);
                events[data[i].type] = 1;
            };
        };
    });
};

httpURL = function(apiurl) {
    apiurl = apiurl.split("/");
    apiurl = apiurl.slice(4,apiurl.length);
    apiurl = "https://github.com/" + apiurl.join("/");
    return apiurl;
};
