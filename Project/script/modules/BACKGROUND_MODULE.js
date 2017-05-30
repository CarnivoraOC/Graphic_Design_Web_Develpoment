/*BACKGROUND MODULE*/

var BACKGROUND = (function(){
    
    function autochangeClass(element, className){
        setInterval(function(){
            element.removeClass(className);
            element.addClass(className);
        }, 2000);
    }
    
    return {
        autochangeClass: autochangeClass
    }
    
}());

