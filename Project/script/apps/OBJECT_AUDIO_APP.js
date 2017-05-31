var OBJECT_AUDIO_APP = {
    
    init: function(){
        
        $(".element").click(function(){
                var soundName = $(this).attr('id');
                $(this).toggleClass("playing");
                if($(this).hasClass('playing')){
                    playSound(soundName);
                }else{
                    pauseSound(soundName);
                }
                
            })
            //Resets a sound's timer and plays it from the start
        
        var waterSounds = OBJECT_AUDIO.getWaterSound();
        
            function playSound(name) {
                waterSounds[name].currentTime = 0;
                waterSounds[name].play();
            }
            
            function pauseSound(name) {
                waterSounds[name].currentTime = 0;
                waterSounds[name].pause();
            }
        
    }// end init
    
    
}