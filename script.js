// import { displayError } from "./functions.js";

console.log("testing 123!")

let result = document.querySelector(".result");
let searchBtn = document.getElementById("search-btn");
let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const form = document.querySelector(".container")

let cocktail = document.getElementById("user-input").value;


fetch(url + "bloody mary")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        let myDrink = data.drinks[0];
        console.log(myDrink);
        console.log(myDrink.strDrinkThumb);
        console.log(myDrink.strDrink);
        console.log(myDrink.strInstructions);

        let count = 1;
        let ingredients = [];

        for ( let i in myDrink) {
            let ingredient = "";
            let measure = "";
            if (i.startsWith("strIngredient") && myDrink[i]) {
                ingredient = myDrink[i];
                measure = myDrink[`strMeasure` + count];
                count += 1;
                console.log(ingredient, measure);
            }
        }
    

    });

form.addEventListener("submit", async evt => {
    evt.preventDefault();

    if (cocktail) {
        try {
            const drinkData = await getDrinkData(cocktail);
            displayDrinkInfo(drinkData);
        }
        catch (error) {
            console.error(error);
            displayError(error);
        };
    } else {
        displayError("please enter a cocktail");
    }
});

function displayError(message) {
    const errorDisplay = document.createElement("div");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    result.textContent = "";
    result.style.display = "flex";
    result.appendChild(errorDisplay);
};

