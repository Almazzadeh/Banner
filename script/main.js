$(function () {

    var classArray = [".content", ".balloon", ".left-clouds", ".right-clouds", ".discover", ".back-balloons", ".back-clouds"]

    classArray.forEach(function (myClass) {
        setInterval(function () {
            $(myClass).removeClass("animated");
            setTimeout(function() { 
                $(myClass).addClass("animated");
            }, 300);
        },13200);
    })
})