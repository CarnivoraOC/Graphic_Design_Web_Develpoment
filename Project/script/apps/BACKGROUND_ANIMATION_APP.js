/*BACKGROUND_ANIMATION_APP checks which scenaro-div is in viewport and controls opacity of corresponding background gradient accordingly. Also automatically animates the lavaBackground*/
var BACKGROUND_ANIMATION_APP = {
    init: function () {
        
        /* Check if element is in viewport */
            $.fn.isOnScreen = function () {
                var win = $(window);
                var viewport = {
                    left: win.scrollLeft()
                };
                viewport.right = viewport.left + win.width();
                var bounds = this.offset();
                bounds.right = bounds.left + this.outerWidth();
                return (!(viewport.right < bounds.left || viewport.left > bounds.right));
            };//end isInScreen
        
        /* Gradient Scenario Animation */
            $(window).scroll(function () {
                if ($("#earthScenario").isOnScreen() == true) {
                    $("#earthGradient").animate({
                        "opacity": "1"
                    }, 1000);
                }
                if ($("#fireScenario").isOnScreen() == true) {
                    $("#fireGradient").animate({
                        "opacity": "1"
                    }, 1000);
                }
                if ($("#airScenario").isOnScreen() == true) {
                    $("#airGradient").animate({
                        "opacity": "1"
                    }, 1000);
                }
            });//end window.scroll
        
        /* Lava Gradiant Animation */
            var playLavaGradient = function () {
                setInterval(function () {
                    $("#lavaBackground2").fadeToggle(2200, "linear")
                }, 500);
            }();//end playLavaGradient
        } //end init
};//end app