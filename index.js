var pages = [
"#Personal",
"#Git",
"#Blog",
"#Projects"
];

$(document).ready( function() {
    $('.row').hover(
    function() {
        var page = "#" + $(this).attr("id");
        $(page).css({"height" : "55%"});
        for (p in pages) {
            if (pages[p] != "#" + $(this).attr("id")) {
                $(pages[p]).css("height", "15%");
            };
        };
    },
    function() {
    });

    $('.row').click(
    function() {
        var page = "#" + $(this).attr("id");
        $(page).css({"height" : "88%"});
        for (p in pages) {
            if (pages[p] != "#" + $(this).attr("id")) {
                $(pages[p]).css("height", "4%");
            };
        };
    });
});