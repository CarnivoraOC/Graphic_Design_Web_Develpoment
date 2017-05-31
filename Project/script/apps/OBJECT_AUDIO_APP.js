var OBJECT_AUDIO_APP = {
    
    init: function(){
        
        $(".element").click(function(){
                var soundName = $(this).attr('id');
                $(this).toggleClass("playing");
                if($(this).hasClass("playing")){    
                    playSound(soundName);
                } else{
                    pauseSound(soundName);
                }
            })
        
        var sounds = OBJECT_AUDIO.getSound();
        
            function playSound(name) {
                sounds[name].currentTime = 0;
                sounds[name].play();
            }
            
            function pauseSound(name) {
                sounds[name].currentTime = 0;
                sounds[name].pause();
            }
        
    }// end init
    
    
}