//--------------------------------------------->>  RC                    <<---------------------------------------------

const paraArray = [
    "I am a software engineering student who completing the second sem in CMJD (Certified Master Java Developer) programme in IJSE (Institute of Java Software Engineering).",
    "I am an web developer. I am a programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.",
]

$(window).on('load', function () {
    let cardArr = $(".about_card");
    for (let i = 0; i < cardArr.length; i++) {
        var oneCard = cardArr[i];
        $(oneCard).children().text(paraArray[i]);
    }
});


//--------------------------------------------->>                        <<---------------------------------------------
//--------------------------------------------->>  LINING EFFECT MIN JS  <<---------------------------------------------

const socialMediaArray = [
   /* {
        name: "GitHub",
        url: "https://github.com/rchathuranga",
        font_awesome: "fab fa-github"
    },*/
    {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/ravindu-c-52235811b/",
        font_awesome: "fab fa-linkedin"
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/rchathuranga417",
        font_awesome: "fab fa-facebook-f"
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/cha_thu_ranga_417/",
        font_awesome: "fab fa-instagram"
    },
    {
        name: "Twitter",
        url: "https://twitter.com/rchathuranga417",
        font_awesome: "fab fa-twitter"
    }
]


$(window).on('load', function () {

    for (let i = 0; i < socialMediaArray.length; i++) {
        $('#line').append("<div class=\"social-links\">\n" +
            "                        <a href=\" " + socialMediaArray[i].url +" \">\n" +
            "                            <i class=\"" + socialMediaArray[i].font_awesome +"\"></i>\n" +
            "                        </a>\n" +
            "                    </div>");
    }


    for (let i = 0; i < $('.social-links').length; i++) {

        let first_left = $($('.social-links')[i]).css('left');
        first_left = first_left.substring(0, first_left.indexOf("p"));


        var addedLeft = (+(first_left) + 35) + "px";
        console.log(addedLeft);
        $($('.social-links')[i + 1]).css('left', addedLeft);

    }

});

//--------------------------------------------->>                        <<---------------------------------------------
//--------------------------------------------->>  LINING EFFECT MIN JS  <<---------------------------------------------

let effectLining;

function textEffect(target) {
    $('.p-wrapper-about').css({
        height: '608px',
    });

    $('#effectText').css('visibility', 'visible');
    var effectName = "metroRotateIn";
    var effectText = document.getElementById('effectText');
    effectText.setAttribute('data-effect', effectName);
    if (!effectLining) {
        effectLining = lining(effectText);
    } else {
        effectLining.relining(true);
    }
}


//--------------------------------------------->>                        <<---------------------------------------------