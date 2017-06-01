var OBJECTS_ANIMATION_APP = {
    init: function () {
            var OP = OBJECTS_ANIMATION_APP;
            var makeItRain = $("#airRain").click(function () {
                    $(document.getElementById("airRain")).toggleClass("raining");
                    if ($(this).hasClass("raining")) {
                        createRain();
                    }
                    else {
                        createRain();
                    }
                }) //End makeItRain
            var nbDrop = 100;
            var createRain = function () {
                    var running = true;
                    var rain = $(".rain");
                    for (var i = 1; i < nbDrop; i++) {
                        var dropLeft = getRandomRange(0, 1600);
                        var dropTop = getRandomRange(-1000, 1400);
                        if (running == true) {
                            rain.append('<div class="drop" id="drop' + i + '"></div>')
                            $("#drop" + i).css("left", dropLeft);
                            $("#drop" + i).css("top", dropTop);
                            running = true;
                        }
                        else {
                            $((".drop")).remove();
                            running = false;
                        }
                    }
                } // end of create rain
            var createLightning = $("#airSky").click(function () {
                    $(document.getElementById("airLightning")).toggleClass("flashit");
                }) // End createLightning
                //var loopWave = setInterval(function(){ moveWave() }, 300);
            var shakeMask = $("#earthSnake").click(function () {
                    $(this).find('img').effect("shake", "slow");
                }) // end shakemask
            var moveWave = $("#waterWave").click(function () {
                setInterval(function(){
                    $(this).find('img').slideToggle(1500, "linear");
                    $(this).find('img').slideToggle(1500, "linear");
                },0);
                        
            
                }) // end moveWave
            var volcaneSmoke = $("#fireVolcano").click(function () {
                    $(this).fadeOut(2000);
                    $(this).fadeIn(2000);
                }) //end volcaneSmoke
            var campfireDerbis = $("#fireCampfire").click(function () {
                    $.firefly({
                        images: ['GDElements/Partikler/1.jpg', 'GDElements/Partikler/2.jpg']
                        , total: 40
                    });
                }) //end campfireDerbis
            var getRandomRange = function (minNum, maxNum) {
                    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
                } // End randomrange
                //var loopWave = setInterval(function(){ moveWave() }, 300);
        } //end init
}