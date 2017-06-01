var OBJECTS_ANIMATION_APP = {
    
    init: function(){
        
        var OP = OBJECTS_ANIMATION_APP;
        
        var shakeMask = $("#earthSnake").click(function(){
            $(this).effect("shake", "slow");
            
        }) // end shakemask
        
        
        var moveWave = $("#waterWave").click(function(){
            $(this).animate(
                {
                    left: "-200px"
                });
            
        }) // end moveWave
        
        var volcaneSmoke = $("#fireVolcano").click(function(){
            $(this).fadeOut(2000);
            $(this).fadeIn(2000);
            
        }) //end volcaneSmoke
    
        // rain function
       var nbDrop = 500;
        
        var getRandomRange = function(minNum, maxNum){
            
            return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
        
        }
        
        var createRain = function(){
            var rain = $(".rain");
            for (var i = 1; i < nbDrop; i++) {
                var dropLeft = getRandomRange(0, 1600);
                var dropTop = getRandomRange(-1000, 1400);
                
                rain.append('<div class="drop" id="drop' + i + '"></div>')
                $("#drop" + i).css("left", dropLeft);
                $("#drop" + i).css("top", dropTop);
            }
        }
        
        var makeItRain = $("#airRain").click(function(){
            createRain();    
        })
        
        
        /*var createLightning = $("#airThunder").click(function(){
            $("#airScenario").toggle("highlight");
        })*/
        
        //end rain
        
        
        //var loopWave = setInterval(function(){ moveWave() }, 300);
        
    }//end init
    
    
}// end app