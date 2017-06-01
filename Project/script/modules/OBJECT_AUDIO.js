var OBJECT_AUDIO = (function(){
    
    //var waterSource = "GDElements/Hav/Lyder/"
    //var earthSource = "GDElements/Oorken/Lyder/"
    //var fireSource = "GDElements/Ild/Lyder/"
    //var airSource = "GDElements/Luft/Lyder/"
    
    
    //JSON list of all object sounds
    var soundArrayJSON = {
        
        "waterWave" : new Audio("GDElements/Hav/Lyder/bolge.wav"),
        "waterDolphin" : new Audio("GDElements/Hav/Lyder/maake.mp3"),
        "waterCoconutTree" : new Audio("GDElements/Hav/Lyder/bolge.wav"),
        "waterCoconut" : new Audio("GDElements/Hav/Lyder/kokosnott.wav"),
        "waterHut" : new Audio("GDElements/Hav/Lyder/strandhytte.wav"),
        "waterSeagul" : new Audio("GDElements/Hav/Lyder/maake.mp3"),
        "waterSurfboard" : new Audio("GDElements/Hav/Lyder/bolge.wav"),
  
        "earthEgg" : new Audio("GDElements/Oorken/Lyder/egg.mp3"),
        "earthCarpet" : new Audio("GDElements/Oorken/Lyder/flyvende_teppe.flac"),
        "earthCactusLarge" : new Audio("GDElements/Oorken/Lyder/kaktus1.wav"),
        "earthCactusSmall" : new Audio("GDElements/Oorken/Lyder/kaktus2.mp3"),
        "earthCamel" : new Audio("GDElements/Oorken/Lyder/kamel.wav"),
        "earthPyramids" : new Audio("GDElements/Oorken/Lyder/pyramide.wav"),
        "earthSnake" : new Audio("GDElements/Oorken/Lyder/snek.wav"),
        "earthScull" : new Audio("GDElements/Oorken/Lyder/gresshopper.wav"),
        
        "fireTree" : new Audio("GDElements/Ild/Lyder/Dodt_tre_cello.aiff"),
        "fireMask" : new Audio("GDElements/Ild/Lyder/Tribal_mask.wav"),
        "fireVolcano" : new Audio("GDElements/Ild/Lyder/Vulkanutbrudd.wav"),
        "airRain" : new Audio("GDElements/Luft/Lyder/regn.wav"),
        "airSky" : new Audio("GDElements/Luft/Lyder/torden.wav"),
        "airWolf" : new Audio("GDElements/Luft/Lyder/ulv.wav"),
        "airWindchime" : new Audio("GDElements/Luft/Lyder/windchime.mp3")    
        
        };    
    
    var getSound = function(){
        return soundArrayJSON;
    }

    return {
        getSound: getSound
    }
    
}()); //end moduel