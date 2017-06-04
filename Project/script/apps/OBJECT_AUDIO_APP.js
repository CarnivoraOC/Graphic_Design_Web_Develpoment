/*OBJECT_AUDIO_APP toggles sound on and off for all .element*/
var OBJECT_AUDIO_APP = {
    init: function () {
            $(".element").click(function () {
                    var soundName = $(this).attr('id');
                    $(this).toggleClass("playing");
                    if ($(this).hasClass("playing")) {
                        playSound(soundName);
                    }
                    else {
                        pauseSound(soundName);
                    }
                }) //end clickevent
            var sounds = OBJECT_AUDIO.getSound(); //get sounds from OBJECT_AUDIO module
            function playSound(name) {
                sounds[name].currentTime = 0;
                sounds[name].play();
                sounds[name].onended = function () {
                    playSound(name);
                };
            } //end playSound
            function pauseSound(name) {
                sounds[name].currentTime = 0;
                sounds[name].pause();
            } //end pauseSound
        } // end init
}//end app