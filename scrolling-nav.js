mobileScroll = function () {
    $('#scrollerFrame').css({"overflow-y": "scroll"});
    $('#scrollerFrame').click(function (e) {
        $(this).hide();
        $(document.elementFromPoint(e.clientX, e.clientY)).trigger("click");
        $(this).show();
    });
    node = $('#scrollerFrame').height(); // Adjusts scroll speed
    $("#scrollerFrame").scroll(function() { // This definitely should be refactored
        if ($(this).scrollTop() < node){   // To be easily extendtable 
            clickExpand($('#Personal'));             
            clickShow($('#Personal'));               
            lastClicked = $('#Personal').attr('id');
        } else if ($(this).scrollTop() < node*2) {
            clickExpand($('#Git'));             
            clickShow($('#Git'));               
            lastClicked = $('#Git').attr('id');
        }else if ($(this).scrollTop() < node*3) {
            clickExpand($('#Blog'));             
            clickShow($('#Blog'));               
            lastClicked = $('#Blog').attr('id');
        }else if ($(this).scrollTop() < node*4) {
            clickExpand($('#Projects'));             
            clickShow($('#Projects'));               
            lastClicked = $('#Projects').attr('id');
        };
    });
};
