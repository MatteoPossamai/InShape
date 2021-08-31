//this file is created to change the order of the layers into the page, and calc stuff
function calculateBMI(){
    let height = document.getElementById("bmiHeight").value;
    let weight = document.getElementById("bmiWeight").value;

    let bmi = parseFloat(weight) / (parseFloat(height) * parseFloat(height));

    let result = document.getElementById("bmiResult");

    result.innerText = "Your BMI is:" + bmi;

    console.log(bmi);
}

function calculateIdeal(){
    let height = document.getElementById("idealHeight").value;
    let age = document.getElementById("idealAge").value;
    let select = document.getElementById("idealGender")
    let gender = select.options[select.selectedIndex].value;
    console.log(gender);

    let lorentz;
    let keys;

    if(gender=="m"){
        lorentz = parseInt(height) - 100 - ((parseInt(height) - 150) / 4);
        keys = ((parseInt(height) / 100) * (parseInt(height) / 100)) * 22.1;
    }else{
        lorentz = parseInt(height) - 100 - ((parseInt(height) - 150) / 2);
        keys = ((parseInt(height) / 100) * (parseInt(height) / 100)) * 20.6;
    }
    let perrault = parseInt(height) - 100 + ( age / 10) * 0.9; 

    let result = document.getElementById("idealResult");
    result.innerText = "Ideal weight according to Lorentz formula:" + lorentz + "<br>"+
    "Ideal weight according to Keys formula:" + keys + "<br>" + "Ideal weight" +
    " according to perrault formula:" + perrault;

    console.log(lorentz, keys, perrault);
}

function calculateCalories(){
    let ideal = document.getElementById("caloriesWeight").value;
    let select = document.getElementById("caloriesGender");
    let gender = select.options[select.selectedIndex].value;
    let select1 = document.getElementById("caloriesAge");
    let age = select1.options[select1.selectedIndex].value;
    let select2 = document.getElementById("caloriesWork");
    let work = select2.options[select2.selectedIndex].value;
    let select3 = document.getElementById("caloriesWorkout");
    let workout = select3.options[select3.selectedIndex].value;
}

function calculateWater(){
    let weight = document.getElementById("waterWeight").value;
    let result = document.getElementById("waterResult");
    result.innerText = "Your water requirement is: " + parseInt(weight)*30 + "ml";

    console.log(parseInt(weight)*30);

}

function calculateFat(){
    let height = document.getElementById("fatHeight").value;
    height = parseInt(height);
    let select = document.getElementById("fatGender");
    let gender = select.options[select.selectedIndex].value;
    let waist = document.getElementById("waistFat");
    waist = parseInt(waist);
    let neck = document.getElementById("neckFat");
    neck = parseInt(neck);
    let flanks = document.getElementById("flanksFat");
    flanks = parseInt(flanks);

    let fat;

    if(gender == "m"){
        fat = 495 / (1.0324-0.19077*(Math.log(waist - neck))+0.15456 * Math.log(height)) - 450;
    }else{
        fat = 495 / (1.29579-0.35004*(Math.log(waist + flanks - neck))+0.211 * Math.log(height)) - 450;
    }

    let result = document.getElementById("fatResult");
    result.innerText = "Your fat percentage is: " + fat + "%";

    console.log(fat, neck, waist, flanks, height);
}

function change(c){
    let btn0 = document.getElementById("bmi");
    let btn1 = document.getElementById("ideal");
    let btn2 = document.getElementById("calories");
    let btn3 = document.getElementById("water");
    let btn4 = document.getElementById("fat");

    let btnA = [btn0, btn1, btn2, btn3, btn4];

    let card0 = document.getElementById("b");
    let card1 = document.getElementById("i");
    let card2 = document.getElementById("c");
    let card3 = document.getElementById("w");
    let card4 = document.getElementById("f");

    let cardA = [card0, card1, card2, card3, card4];

    for(let i=0; i<5; i++){
        if (i==c){
            btnA[i].style.backgroundColor = "#6f0";
            cardA[i].style.display = "block";
            cardA[i].style.backgroundColor = "#6f0";
        }else{
            btnA[i].style.backgroundColor = "#ddd";
            cardA[i].style.display = "none";
        }
    }
}
