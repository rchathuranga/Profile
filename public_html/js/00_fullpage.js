//--------------------------------------------->>    FULL PAGE MIN JS    <<---------------------------------------------

$(window).on('load',function () {
    setTimeout(function () {

        new fullpage('#fullpage', {
            licenseKey: 'YOUR_KEY_HERE',

            parallax: true,
            parallaxKey: 'YWx2YXJvdHJpZ28uY29tXzlNZGNHRnlZV3hzWVhnPTFyRQ==',
            parallaxOptions: {
                type: 'reveal',
                percentage: 62,
                property: 'translate'
            },

            keyboardScrolling: true,
            sectionsColor: ['black', 'black', 'black', 'black','black','black'],
            autoScrolling: true,
            navigation: true,
            // anchors:['section1','section2','section3','section4','section5','section6'],
            navigationTooltips:['H O M E','A B O U T', "E D U C A T I O N" ,'S K I L L S','A S S S I G N M E N T','P R O J E C T S','C O N T A C T'],
            showActiveTooltip:true,
            scrollingSpeed: 300,


            // todo function load textEffect
            afterLoad: function(origin, destination, direction){

                if(destination.index===1){
                    if(first_time_about){
                        // textEffect();
                        first_time_about=false;
                    }
                }
            },
        });

    }, 0);
});

//--------------------------------------------->>                        <<---------------------------------------------