$(document).ready(function() {

    $('#nav-placeholder').load("nav.html");
    $('#1, #2, #3').each(function() {
        var changeSize = false;
        $(this).click(function() {
            if(!changeSize) {
                $(this).animate({fontSize: "22px"}, 100);
                changeSize = true;
            }
            else {
                $(this).animate({fontSize: "16px"}, 100);
                changeSize = false;
            }
        });
    });
});