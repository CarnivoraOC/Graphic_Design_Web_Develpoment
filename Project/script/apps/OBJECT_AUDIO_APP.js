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
        
        var sound = OBJECT_AUDIO.getWaterSound();

            //Resets a sound's timer and plays it from the start
            function playSound(name) {
                
                sound[name].currentTime = 0;
                sound[name].play();
            }
            
            function pauseSound(name) {
                sound[name].currentTime = 0;
                sound[name].pause();
            }
        
    }// end init
    
    
}