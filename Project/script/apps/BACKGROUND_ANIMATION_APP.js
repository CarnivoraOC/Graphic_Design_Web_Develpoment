var BACKGROUND_ANIMATION_APP = {
    
     //HTML objects
    $lavaBackground2: null,
    
    init: function(){
    
        var BP = BACKGROUND_ANIMATION_APP;
        
        var setHTMLObjects = function(){
            BP.$lavaBackground2 =("#lavaBackground2")
        }();
        
        var playLavaGradient = function(){
          setInterval(function(){
          $("#lavaBackground2").fadeToggle(2200, "linear")
        }, 500);
        }();
        
        var currentScenario = function(){
            
        }
        
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
$.each($("div"),function(){
    p = $(this).position();
    //horizontal
    if (p.left < 0 - $(this).width() || p.left > w){
        console.log($(this) + "er i vewprt")
    }
});
    }// end init
   
}; //End BACKGROUND_ANIMATION_APP
