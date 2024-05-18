
let cocktail = document.getElementById("user-input").value;

showRecipe.addEventListener("click", () => {
    recipe.style.display = "block";
});

hideRecipe.addEventListener("click", () => {
    recipe.style.display = "none";
  });


 export function displayError(message) {
        const errorDisplay = document.createElement("div");
        errorDisplay.textContent = "please enter a cocktail";
        errorDisplay.classList.add("errorDisplay")
  }