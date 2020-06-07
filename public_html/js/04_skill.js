let cuttent;

$(function () {
    var showcase = $('#showcase');

    showcase.Cloud9Carousel({
        yPos: 42,
        yRadius: 48,
        mirrorOption:{
            gap: 12,
            height: 0.2,
        },
        buttonLeft: $('.skill-btnLeft'),
        buttonRight: $('.skill-btnRight'),
        autoPlay: true,
        autoPlayDelay:2500,
        bringToFront: true,
        fps: 90,
        frontItemClass: "front-item",
        mirror: {
            gap: 12,     /* 12 pixel gap between item and reflection */
            height: 0.2, /* 20% of item height */
            opacity: 0.4 /* 40% opacity at the top */
        },

        onRendered: function () {
            var item = $(showcase).data("carousel").nearestItem();
            var description = $(item.element).attr("id");
            $('#skill-head').text(description);

            // var c = Math.cos((showcase.floatIndex()%1)*2* Math.PI);
            // title.css('opacity', 0.5 + (0.5 * c));
        },

        onLoad: function () {
            console.log(showcase);
            showcase.css('visibility','visible');
            showcase.css('display','none');
            showcase.fadeIn(1500);
        }
    });


    $('.nav > button').click(function (e) {
        var b = $(e.target).addClass('down');

        setTimeout(function () {
            b.removeClass('down')
        },80)
    })
});