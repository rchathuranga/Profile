const JSON_Project = [
    {
        number: 1,
        name: "Point of Sale",
        description: "Place Order, Manage Customers, Manage Items by HTML and CSS.",
        web_url: "",
        github_url: ""
    },
    {
        number: 2,
        name: "Theo Chocolate",
        description: "POS for Chocolate shop by HTML, CSS, JS and Bootstrap.",
        web_url: "",
        github_url: ""
    },
    {
        number: 3,
        name: "LTG Tour",
        description: "Local Travel Guidance Project by HTML and CSS.",
        web_url: "",
        github_url: ""
    },
    {
        number: 4,
        name: "GSM Project",
        description: "Know everything about your Phone and Specification.",
        web_url: "",
        github_url: ""
    },
    {
        number: 5,
        name: "Comet Blue",
        description: "To destroy enemy ships by Comet Spaceship. Shooting JavaScript Game.",
        web_url: "",
        github_url: ""
    },
    {
        number: 6,
        name: "Nothing Yet",
        description: "Coming Soon...",
        web_url: "",
        github_url: ""
    },
]

let clickGit;

$(window).on('load', function () {

    var html = "";

    for (let i = 0; i < JSON_Project.length; i++) {
        var shortDesc = "";
        var restDesc = "";

        for (let j = 0; j < JSON_Project[i].description.split(" ").length; j++) {
            if (j < 2) {
                shortDesc += JSON_Project[i].description.split(" ")[j] + " ";
            } else {
                restDesc += JSON_Project[i].description.split(" ")[j] + " ";
            }
        }

        if (i % 3 === 0) {
            if (i != 0) {
                html += "</div>"
            }
            html += "<div class=\"row\">"
        }
        html +=        "<div class=\"block\">\n" +
        "                        <div class=\"project-name\">\n" +
        "                            <h1>" + JSON_Project[i].name + "</h1>\n" +
        "                        </div>\n" +
        "                        <div class=\"project-line\"></div>\n" +
        "                        <div class=\"project-type\">\n" +
        "                            <div>\n" +
        "                                <i class=\"fas fa-code\"></i>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                        <div class=\"project-description\">\n" +
        "                            <h5>" +
        "                                  <div class=\"project-git\"><a href=\"" + JSON_Project[i].github_url + "\"><i class=\"fab fa-github\"></i></a></div>" +
        "                                   <div>" + shortDesc + "</div>" +
        "                           </h5>\n" +
        "                            <h5>" + restDesc + "</h5>\n" +
        "                        </div>\n" +
        "                    </div>"
    }

    $('.container').children().remove();
    $('.container').append(html)

});


//--------------------------------------------->>     PAN ZOOM MIN JS    <<---------------------------------------------

var element = document.querySelector(".container");
let pan = panzoom(element, {
    minZoom: 0.5,
    minZoom: 1,
    maxZoom: 4,
    maxZoom: 1,
    smoothScroll: true,
    zoomSpeed: 0.065 // 6.5% per mouse wheel event
});

pan.on('panstart', function (e) {
    console.log('Fired when pan is just started ', e);
    $('.header').fadeOut();
    // Note: e === instance.
});
pan.moveTo(0, 0);

//--------------------------------------------->>                        <<---------------------------------------------
//--------------------------------------------->>      TILT MIN JS       <<---------------------------------------------

/*$('.block').tilt({
    maxTilt: 25,
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    scale: 2,      // 2 = 200%, 1.5 = 150%, etc..
    speed: 500,    // Speed of the enter/exit transition.
    transition: true,   // Set a transition on enter/exit.
    disableAxis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,   // If the tilt effect has to be reset on exit.
    glare: false,  // Enables glare effect
    maxGlare: 1       // From 0 - 1.
});*/


//--------------------------------------------->>                        <<---------------------------------------------

//--------------------------------------------->>      TILT MIN JS       <<---------------------------------------------




//--------------------------------------------->>                        <<---------------------------------------------