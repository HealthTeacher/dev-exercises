$(function() {
    initial();
    like();
});

function initial() {
    $(".solid").hide();
    var len = $(".part0 .add").width();
    $(".part0 .add").css("height", len + "px");
    $(window).resize(function(){
        var len = $(".part0 .add").width();
        $(".part0 .add").css("height", len + "px");
    });
}

function like() {
    $(".heart").click(function() {
        if ($(".solid").css("display") == "none") {
            $(".container").unbind("mouseenter mouseleave");
            $(".solid").show();
            $(".outlined").hide();
            $(this).css("background-color", "#EA2227");
            $(this).css("visibility","visible");
            ripple();
            setTimeout(function(){
                $(".ripple").removeClass("active");
            },500);
        } else {
            $(".solid").hide();
            $(".outlined").show();
            $(this).css("background-color", "#EEEEEE");
            $(".container").hover(function(){
                $(".heart").css("visibility","visible");
            },function(){
                $(".heart").css("visibility","hidden");
            });
        }
    });
}

function ripple() {
    $(".ripple").addClass("active");
}