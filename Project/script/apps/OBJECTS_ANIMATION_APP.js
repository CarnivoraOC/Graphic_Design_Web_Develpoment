var OBJECTS_ANIMATION_APP = {
    
    init: function(){
        
        var OP = OBJECTS_ANIMATION_APP;
        
        var shakeMask = $("#fireMask").click(function(){
            $(this).effect("shake", "slow");
            
        }) // end shakemask
        
        
        var moveWave = $("#waterWave").click(function(){
            $(this).animate(
                {
                    left: "100px",
                    width: "250px"
                }
            );
        }) // end moveWave
        
        var loopWave = setInterval(function(){ moveWave() }, 300);
        
    }//end init
    
    
}