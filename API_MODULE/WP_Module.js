var s = "I applaud the huge effort made by energy producers around the world. These great companies creates value by serving the energy needs of our great nation. Together they make use of the resources provided to us by nature, and turn them into products and solutions that enable you and your loved ones to live your daily lives, and run your daily businesses."

//var for carmaOrg
var plantCountSpin, carbonSpin, energySpin, fossilSpin, nuclearSpin, genNumber, genStatement;

//var for humanitarians
var flashFloodSpin, droughtSpin, epidemicSpin, insectInfestSpin, otherSpin, complexEmergencySpin, floodSpin, earthquakeSpin, tropicalCycloneSpin, coldWaveSpin, inCountries, countriesArray;

 
var words;
var separator;
var sentence;
var replace;
 

function carmaData(data) {
    plantCountSpin = data.api.api1.Plant_Count;
    carbonSpin = data.api.api1.Carbon;
    energySpin = data.api.api1.Energy;
    fossilSpin = data.api.api1.Fossil;
    nuclearSpin = data.api.api1.Nuclear;
    genNumber = data.api.api1.Generic_Number;
    genStatement = data.api.api1.Generic_Statement;

    var c = 0;
    var m = 0;

    if (carmaRdy) {
        background(235);
        carmaType = floor(random(3));
        m = floor(random(2));

        switch (carmaType) {
            case 0: //plant count
                image(img, 1000, 0);
                textAlign(LEFT);
                textStyle(NORMAL);
                text(s, 1190, 400, 650, 500);
                textStyle(BOLD);
                text(genStatement[c] + genNumber[m] + dataTypePlantCount + plantCountSpin, 1190, 650, 650, 500);
                textAlign(CENTER);
                text(dataTypePlantCount + plantCountSpin, 500, 500);
                break;

            case 1: //Carbon emissions
                image(img, 1000, 0);
                textAlign(LEFT);
                textStyle(NORMAL);
                text(s, 1190, 400, 650, 500);
                textStyle(BOLD);
                text(genStatement[c] + genNumber[m] + dataTypeCarbon + carbonSpin, 1190, 650, 650, 500);
                textAlign(CENTER);
                text(dataTybeCarbon + carbonSpin, 500, 500);
                break;

            case 2: //Total energy usage & energy type (fossils/nuclear)
                fuel = floor(random(2));
                switch (fuel) {
                    case 0:
                        image(img, 1000, 0);
                        textAlign(LEFT);
                        textStyle(NORMAL);
                        text(s, 1190, 400, 650, 500);
                        textStyle(BOLD);
                        text(genStatement[c] + genNumber[m] + dataTypeEnergy + " AND THUS " + fossilSpin, 1190, 650, 650, 500);
                        textAlign(CENTER);
                        text(dataTypeEnergy, 500, 500)
                        break;
                    case 1:
                        image(img, 1000, 0);
                        textAlign(LEFT);
                        textStyle(NORMAL);
                        text(s, 1190, 400, 650, 500);
                        textStyle(BOLD);
                        text(genStatement[c] + genNumber[m] + dataTypeEnergy + " AND THUS " + nuclearSpin, 1190, 650, 650, 500);
                        textAlign(CENTER);
                        text(dataTypeEnergy, 500, 500);
                        break;
                }
                break;
        }
    }

}

function humData(gotHumData) {
    flashFloodSpin = gotHumData.api.api2.Primary_Type.Flash_Flood;
    droughtSpin = gotHumData.api.api2.Primary_Type.Drought;
    epidemicSpin = gotHumData.api.api2.Primary_Type.Epidemic;
    insectInfestSpin = gotHumData.api.api2.Primary_Type.Insect_Infestation;
    otherSpin = gotHumData.api.api2.Primary_Type.Other;
    complexEmergencySpin = gotHumData.api.api2.Primary_Type.Complex_Emergency;
    floodSpin = gotHumData.api.api2.Primary_Type.Flood;
    earthquakeSpin = gotHumData.api.api2.Primary_Type.Earthquake;
    tropicalCycloneSpin = gotHumData.api.api2.Primary_Type.Tropical_Cyclone;
    coldWaveSpin = gotHumData.api.api2.Primary_Type.Cold_Wave;


    if (humRdy) {
        background(235);
        humType = floor(random(10));

        switch (dataTypeHum) {
            case "Flash Flood": //Flashflood
                image(img, 1000, 0);
                textAlign(LEFT);
                textStyle(NORMAL);
                text(s, 1190, 400, 650, 500);
                textStyle(BOLD);
                text(flashFloodSpin[floor(random(3))], 1190, 650, 650, 500);
                textAlign(CENTER);
                text(dataTypeHum + "in" + inCountries, 500, 500);
                break;

            case "Drought": //drought
                image(img, 1000, 0);
                textAlign(LEFT);
                textStyle(NORMAL);
                text(s, 1190, 400, 650, 500);
                textStyle(BOLD);
                text(droughtSpin[floor(random(3))], 1190, 650, 650, 500);
                textAlign(CENTER);
                text(dataTypeHum + " in " + inCountries, 500, 500);
                break;

            case "Epidemic": //epidemic
                image(img, 1000, 0);
                textAlign(LEFT);
                textStyle(NORMAL);
                text(s, 1190, 400, 650, 500);
                textStyle(BOLD);
                text(epidemicSpin[floor(random(5))], 1190, 650, 650, 500);
                textAlign(CENTER);
                text(dataTypeHum + " in " + inCountries, 500, 500);
                break;

            case "Insect Infestation": //insect infestation
                image(img, 1000, 0);
                textAlign(LEFT);
                textStyle(NORMAL);
                text(s, 1190, 400, 650, 500);
                textStyle(BOLD);
                text(insectInfestSpin[floor(random(4))], 1190, 650, 650, 500);
                textAlign(CENTER);
                text(dataTypeHum + " in " + inCountries, 500, 500)
                break;

            case "Other": //other
                image(img, 1000, 0);
                textAlign(LEFT);
                textStyle(NORMAL);
                text(s, 1190, 400, 650, 500);
                textStyle(BOLD);
                text(otherSpin[0], 1190, 650, 650, 500);
                textAlign(CENTER);
                text(dataTypeHum + " in " + inCountries, 500, 500)
                break;

            case "Complex Emergency": //complex emergency
                image(img, 1000, 0);
                textAlign(LEFT);
                textStyle(NORMAL);
                text(s, 1190, 400, 650, 500);
                textStyle(BOLD);
                text(complexEmergencySpin[floor(random(2))], 1190, 650, 650, 500);
                textAlign(CENTER);
                text(dataTypeHum + " in " + inCountries, 500, 500)
                break;

            case "Flood": //flood
                image(img, 1000, 0);
                textAlign(LEFT);
                textStyle(NORMAL);
                text(s, 1190, 400, 650, 500);
                textStyle(BOLD);
                text(floodSpin[0], 1190, 650, 650, 500);
                textAlign(CENTER);
                text(dataTypeHum + " in " + inCountries, 500, 500)
                break;

            case "Earthquake": //earthquake
                image(img, 1000, 0);
                textAlign(LEFT);
                textStyle(NORMAL);
                text(s, 1190, 400, 650, 500);
                textStyle(BOLD);
                text(earthquakeSpin[0], 1190, 650, 650, 500);
                textAlign(CENTER);
                text(dataTypeHum + " in " + inCountries, 500, 500)
                break;

            case "Tropical Cyclone": //tropical cyclone
                image(img, 1000, 0);
                textAlign(LEFT);
                textStyle(NORMAL);
                text(s, 1190, 400, 650, 500);
                textStyle(BOLD);
                text(tropicalCycloneSpin[0], 1190, 650, 650, 500);
                textAlign(CENTER);
                text(dataTypeHum + " in " + inCountries, 500, 500)
                break;

            case 9: //cold wave
                image(img, 1000, 0);
                textAlign(LEFT);
                textStyle(NORMAL);
                text(s, 1190, 400, 650, 500);
                textStyle(BOLD);
                text(coldWaveSpin[floor(random(2))], 1190, 650, 650, 500);
                textAlign(CENTER);
                text(dataTypeHum + " in " + inCountries, 500, 500)
                break;
        }
    }
}
var q = 0;
var words1;
var rs;
var replace2;
var spin;
    
    function tortureSpin() {
          rs = dataTypeTort.toUpperCase();
          
          image(img, 1000, 0);
          words = split(rs, " ");
          separator = " ";
        
          for(var i = 0; i < words.length; i++){
              if(words[i] == "WORD"){
                replace2 = splice(words, "NEW WORD", i)
                sentence = join(replace2, separator)
                words.splice(i+1, 1)
            }
            if(words[i] == "ILL-TREATMENT"){
              replace = splice(words, "ALTERNATIVE HEALING", i)
              sentence = join(replace, separator)
              words.splice(i+1, 1)
            }
            if(words[i] == "INTERNAL"){
              replace = splice(words, "SILLY", i)
              sentence = join(replace, separator)
              words.splice(i+1, 1)
            }
            if(words[i] == "AFFAIRS,"){
              replace = splice(words, "WALKS,", i)
              sentence = join(replace, separator)
              words.splice(i+1, 1)
            }
          }

        textAlign(LEFT);
        text(dataTypeTort, 500, 500);
        textStyle(NORMAL);
        text(s, 1190, 400, 550, 500);
        textStyle(BOLD);
        text(sentence, 1190, 550, 650, 500);
        
        console.log(sentence)
    }