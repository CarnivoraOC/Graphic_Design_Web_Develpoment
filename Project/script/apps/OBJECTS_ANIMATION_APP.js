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
        
         
        
        //var loopWave = setInterval(function(){ moveWave() }, 300);
        
    }//end init
    
    
}