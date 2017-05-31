var BACKGROUND_ANIMATION = (function(){
    
    var getRandomNumber = function(min, max){
        if(min < 0){
            min = 0;
        }
        if(max > 255){
            max = 255;
        }
        max = max - min;
        
        return (Math.floor(Math.random() * max) + min);
    }
    
    var createRGBCode = function(min, max){
        var r = getRandomNumber(min, max);
        var g = getRandomNumber(min, max);
        var b = getRandomNumber(min, max);
        
        return "rgb(" + r +  ", " + g + ", " + b + ")";
    }
    
    var getRandomColor = function(min, max){
        return createRGBCode(min, max);
    }
    
    function autochangeClass(element, className, time){
        setInterval(function(){
            $(element).toggleClass(className)

        }, time);
    }
    
    
    
    
    return {
        getRandomColor: getRandomColor,
        autochangeClass: autochangeClass,
        
    }
    
    
    
}());