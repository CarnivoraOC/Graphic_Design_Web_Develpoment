var OBJECT_AUDIO = (function(){
    
    var waterSource = "GDElements/Hav/Lyder/"
    var earthSource = "GDElements/Oorken/Lyder/"
    var fireSource = "GDElements/Ild/Lyder/"
    var airSource = "GDElements/Luft/Lyder/"
    
    var soundWaterArray = [
        
        {"waterWave" : new Audio(waterSource + "bolge.wav")},
        {"waterDolphin" : new Audio(waterSource + "bolge.wav")},
        {"waterCoconutTree" : new Audio(waterSource + "bolge.wav")},
        {"waterCoconet" : new Audio(waterSource + "kokosnott.wav")},
        {"waterHut" : new Audio(waterSource + "strandhytte.wav")},
        {"waterSeagull" : new Audio(waterSource + "maake.mp3")},
        {"waterSurfboard" : new Audio(waterSource + "bolge.wav")},
    ];
    
    var soundEarthArray = [
        
        {"earthEgg" : new Audio(earthSource + "egg.mp3")},
        {"earthCarpet" : new Audio(earthSource + "flyvende_teppe.flac")},
        {"earthCactusLarge" : new Audio(earthSource + "kaktus1.wav")},
        {"earthSmall" : new Audio(earthSource + "kaktus2.mp3")},
        {"earthCamel" : new Audio(earthSource + "kamel.wav")},
        {"earthPyramids" : new Audio(earthSource + "pyramide.wav")},
        {"earthSnake" : new Audio(earthSource + "snek.wav")},
        {"earthSkull" : new Audio(earthSource + "gresshopper.wav")},
        
    ];
    
    var soundFireArray = [
        
        {"fireCampfire" : new Audio(fireSource + "campfire.wav")},
        {"fireTree" : new Audio(fireSource + "Dodt_tre_cello.aiff")},
        {"fireMask" : new Audio(fireSource + "Tribal_mask.wav")},
        {"fireVolcano" : new Audio(fireSource + "Vulkanutbrudd.wav")},
        
    ];
    
    var soundAirArray = [
        
        {"airRain" : new Audio(airSource + "regn.wav")},
        {"airThunder" : new Audio(airSource + "torden.wav")},
        {"airWolf" : new Audio(airSource + "ulv.wav")},
        {"airWindchime" : new Audio(airSource + "windchime.mp3")},
        
    ];
    
    var getWaterSound = function(){
        return soundWaterArray;
    }
    
    return {
        getWaterSound: getWaterSound
    }
    
})();