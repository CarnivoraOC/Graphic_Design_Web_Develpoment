var OBJECT_AUDIO = (function(){
    
    var waterSource = "GDElements/Hav/Lyder/"
    var earthSource = "GDElements/Oorken/Lyder/"
    var fireSource = "GDElements/Ild/Lyder/"
    var airSource = "GDElements/Luft/Lyder/"
    
    
    //JSON list of all object sounds
    var soundArrayJSON = {
        
        // water sounds
        "waterWave" : new Audio(waterSource + "bolge.wav"),
        "waterDolphin" : new Audio(waterSource + "maake.mp3"),
        "waterCoconutTree" : new Audio(waterSource + "bolge.wav"),
        "waterCoconut" : new Audio(waterSource + "kokosnott.wav"),
        "waterHut" : new Audio(waterSource + "strandhytte.wav"),
        "waterSeagul" : new Audio(waterSource + "maake.mp3"),
        "waterSurfboard" : new Audio(waterSource + "bolge.wav"),
        
        // earth sounds
        "earthEgg" : new Audio(earthSource + "egg.mp3"),
        "earthCarpet" : new Audio(earthSource + "flyvende_teppe.flac"),
        "earthCactusLarge" : new Audio(earthSource + "kaktus1.wav"),
        "earthCactusSmall" : new Audio(earthSource + "kaktus2.mp3"),
        "earthCamel" : new Audio(earthSource + "kamel.wav"),
        "earthPyramids" : new Audio(earthSource + "pyramide.wav"),
        "earthSnake" : new Audio(earthSource + "snek.wav"),
        "earthScull" : new Audio(earthSource + "gresshopper.wav"),
        
        // fire sounds
        "fireVolcano" : new Audio(fireSource + "campfire.wav"),
        /* "fireTree" : new Audio(fireSource + "Dodt_tre_cello.aiff"),
        "fireMask" : new Audio(fireSource + "Tribal_mask.wav"),
        "fireVolcano" : new Audio(fireSource + "Vulkanutbrudd.wav"),*/
        
        // wind sounds
        "airRain" : new Audio(airSource + "regn.wav"),
        "airThunder" : new Audio(airSource + "torden.wav"),
        "airWolf" : new Audio(airSource + "ulv.wav"),
        "airWindchime" : new Audio(airSource + "windchime.mp3"),    
        
        };    
    
    var getSound = function(){
        return soundArrayJSON;
    }

    return {
        getSound: getSound
    }
    
}()); //end moduel