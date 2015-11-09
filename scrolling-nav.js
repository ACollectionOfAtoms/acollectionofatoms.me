mobileScroll = function () {
    $('#scrollerFrame').css({"overflow-y": "scroll"});
    $('#scrollerFrame').click(function (e) {
        $(this).hide();
        $(document.elementFromPoint(e.clientX, e.clientY)).trigger("click");
        $(this).show();
    });
    console.log("running");
    node = $('#scrollerFrame').height() / 4; // Four pages, so divide total hieght by 4
    $("#scrollerFrame").scroll(function() { // This definitely should be refactored
        console.log($(this).scrollTop());   // To be easily extendtable 
        if ($(this).scrollTop() < node){ 
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
