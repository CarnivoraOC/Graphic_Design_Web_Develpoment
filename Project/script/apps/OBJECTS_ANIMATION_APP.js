/*OBJECTS_ANIMATION_APP toggles animations on and off for .element*/
var OBJECTS_ANIMATION_APP = {
    init: function () {
            var classname = document.getElementsByClassName("element");
            Array.from(classname).forEach(function (element) {
                element.addEventListener('click', toggleClass);
            }); //end add eventlistener
            function toggleClass() {
                $(this).toggleClass("running");
                var elementId = this.getAttribute("id");
                toggleAnimation(elementId);
            } //end toggleClass
            function toggleAnimation(elementId) {
                var effects = OBJECT_ANIMATION.getEffects();
                var interval = setInterval(function () {
                    startCssAnimations(elementId);
                    viewDrops(elementId);
                    if (!$("#" + elementId).hasClass("running")) {
                        clearInterval(interval);
                        pauseCssAnimations(elementId);
                        removeDrops(elementId);
                    }
                    effects[elementId]();
                }, 500);
            } //end toggleAnimation
            function pauseCssAnimations(elementId) {
                $("#" + elementId).find("img").css("animation-play-state", "paused");
                if (elementId == "airSky") {
                    $("#airLightning").find("img").css("animation-play-state", "paused");
                    $("#lightningBackground").css("animation-play-state", "paused");
                }
            } //end pauseCssAnimations
            function startCssAnimations(elementId) {
                $("#" + elementId).find("img").css("animation-play-state", "running");
                if (elementId == "airSky") {
                    $("#airLightning").find("img").css("animation-play-state", "running");
                    $("#lightningBackground").css("animation-play-state", "running");
                }
            } //end startCssAnimations
            function removeDrops(elementId) {
                if (elementId == "airRain") {
                    $(".drop").css("opacity", "0");
                }
            } // end removeDrops
            function viewDrops(elementId) {
                if (elementId == "airRain") {
                    $(".drop").css("opacity", "1");
                }
            }//end viewDrops
        }//end init
}//end app