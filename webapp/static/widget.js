//this file is created to change the order of the layers into the page, and calc stuff
function calculateBMI(){
    let height = document.getElementById("bmiHeight").value;
    let weight = document.getElementById("bmiWeight").value;

    let bmi = parseFloat(weight) / (parseFloat(height) * parseFloat(height));

    let result = document.getElementById("bmiResult");
    bmi = bmi.toString();
    bmi = bmi.slice(0,5);

    result.innerText = "Your BMI is:" + bmi;
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
    keys = keys.toString();
    keys = keys.slice(0,5);
    let perrault = parseInt(height) - 100 + ( age / 10) * 0.9; 

    let result = document.getElementById("idealResult");
    result.innerText = "Ideal weight according to Lorentz formula:" + lorentz +
    "kg. Ideal weight according to Keys formula:" + keys + "kg. Ideal weight" +
    " according to perrault formula:" + perrault + "kg.";

    console.log(lorentz, keys, perrault);
}

function calculateCalories(){
    let ideal = document.getElementById("caloriesWeight").value;
    let select = document.getElementById("caloriesGender");
    let gender = select.options[select.selectedIndex].value;
    let age = document.getElementById("caloriesAge").value;
    let select2 = document.getElementById("caloriesWork");
    let work = select2.options[select2.selectedIndex].value;
    let select3 = document.getElementById("caloriesWorkout");
    let workout = select3.options[select3.selectedIndex].value;
    let height = document.getElementById("caloriesHeight").value;
    let metabolismo;
    if (gender=="m"){
        metabolismo = 66.5 + (13.8 * parseInt(ideal)) + (5 * parseInt(height)) - (6.8 * parseInt(age)); 
    }else{
        metabolismo = 655 + (9.6 * parseInt(ideal)) + (1.9 * parseInt(height)) - (4.7 * parseInt(age)); 
    }

    if(work=="sed"){
        metabolismo += 200;
    }else if(work == "qhe"){
        metabolismo += 400;
    }else{
        metabolismo += 700;
    }

    if(workout=="sed"){
        metabolismo += 150;
    }else if(workout == "qhe"){
        metabolismo += 300;
    }else{
        metabolismo += 500;
    }

    console.log(metabolismo);

    let result = document.getElementById("caloriesResult");
    result.innerText = "Your daily calories requirement is: " + metabolismo + "kcal. Important: this extimation has been made" + 
    " considering your ideal weight. So, the number of calories that we told you, is the ammount of calories that would help" + 
    "you arrive that weight, and be InShape."
}

function calculateWater(){
    let weight = document.getElementById("waterWeight").value;
    let result = document.getElementById("waterResult");
    result.innerText = "Your water requirement is: " + parseInt(weight)*30 + "ml";
}

function calculateFat(){
    let height = document.getElementById("fatHeight").value;
    height = parseInt(height);
    let select = document.getElementById("fatGender");
    let gender = select.options[select.selectedIndex].value;
    let waist = document.getElementById("waistFat").value;
    waist = parseInt(waist);
    let neck = document.getElementById("neckFat").value;
    neck = parseInt(neck);
    let flanks = document.getElementById("flanksFat").value;
    flanks = parseInt(flanks);

    let fat;

    if(gender == "m"){
        fat = 495 / (1.0324-0.19077*(Math.log(waist - neck))+0.15456 * Math.log(height)) - 450;
    }else{
        fat = 495 / (1.29579-0.35004*(Math.log(waist + flanks - neck))+0.211 * Math.log(height)) - 450;
    }
    fat = Math.abs(fat);

    let result = document.getElementById("fatResult");
    result.innerText = "Your fat percentage is: " + fat + "%";
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

function getRecipe(){
    let select1 = document.getElementById("meal");
    let meal = select1.options[select1.selectedIndex].value;
    let select2 = document.getElementById("situation");
    let situation = select2.options[select2.selectedIndex].value;
    fetch("/static/recipe.json") 
    .then(response => response.json()) 
    .then(json => putRecipe(json, meal,situation)); 
}

function putRecipe(json,meal,situation){
    let recipe;
    if(meal == "brk"){
        let lung = json["breakfast"][situation].length;
        let index = parseInt(Math.random() * (lung));
        recipe = json["breakfast"][situation][index];
    }else if(meal == "lun"){
        let lung = json["lunch"][situation].length;
        let index = parseInt(Math.random() * (lung));
        recipe = json["lunch"][situation][index];
    }else if(meal == "din"){
        let lung = json["dinner"][situation].length;
        let index = parseInt(Math.random() * (lung));
        recipe = json["dinner"][situation][index];
    }else{
        let lung = json["snack"][situation].length;
        let index = parseInt(Math.random() * (lung));
        recipe = json["snack"][situation][index];
    }
    console.log(recipe.name);
    let rec = document.getElementById("recipe");
    rec.style.visibility = "visible";
    rec.innerHTML = "<h1 id = \"name\">" + recipe.name +"</h1> <p id = \"text\"><b>Ingredients: </b>"+ recipe.ingredient + "<br><b>Recipe: </b>" +  recipe.recipe + "<br><b>Macro: </b>" + recipe.macro + "</p>" 
}

function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}
