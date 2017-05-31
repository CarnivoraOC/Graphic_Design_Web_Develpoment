var OBJECT_ANIMATION = (function(){
       
        var randomRange = function(minNum, maxNum) {
        
        return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
    }
    
    return {
        getRandomRange: randomRange,
    }
    
}());