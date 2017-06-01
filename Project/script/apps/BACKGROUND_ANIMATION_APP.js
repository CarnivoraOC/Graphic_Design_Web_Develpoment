var BACKGROUND_ANIMATION_APP = {
    
     //HTML objects
    $lavaBackground2: null,
    $waterGradient: null,
    $earthGradient: null,
    $fireGradient: null,
    $airGradient: null,
    
    init: function(){
    
        var BP = BACKGROUND_ANIMATION_APP;
        
        var setHTMLObjects = function(){
            BP.$lavaBackground2 =("#lavaBackground2");
            BP.$waterGradient =("#waterGradient");
            BP.$earthGradient =("#earthGradient");
            BP.$fireGradient =("#fireGradient");
            BP.$airGradient =("#airGradient");
        }();
        
        var playLavaGradient = function(){
          setInterval(function(){
          $("#lavaBackground2").fadeToggle(2200, "linear")
        }, 500);
        }();
            
        $.fn.isOnScreen = function () {
                var win = $(window);
                var viewport = {
                    left: win.scrollLeft()
                };
            
                viewport.right = viewport.left + win.width();
                var bounds = this.offset();
                bounds.right = bounds.left + this.outerWidth();

            
                //retrun true or false
                return (!(viewport.right < bounds.left || viewport.left > bounds.right));
            };
            
       $(window).scroll(function() {

           
            if ($("#earthScenario").isOnScreen() == true) {
                $("#earthGradient").animate({"opacity":"1"}, 1000);
            }
            if ($("#fireScenario").isOnScreen() == true) {
                $("#fireGradient").animate({"opacity":"1"}, 1000);
            }
            if ($("#airScenario").isOnScreen() == true) {
                $("#airGradient").animate({"opacity":"1"}, 1000);
            }


        });
        
        
    }// end init
   
}; //End BACKGROUND_ANIMATION_APP
