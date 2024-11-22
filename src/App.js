import React, { useState, useEffect } from "react";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import { fetchRecipes, fetchRecipeDetails } from "./api";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    fetchRecipes().then(setRecipes);
  }, []);

  const handleRecipeClick = async (id) => {
    const details = await fetchRecipeDetails(id);
    setSelectedRecipe(details);
  };

  return (
    <div className="App">
      <header>
        <h1>Recetas Navideñas</h1>
      </header>
      <main>
        <RecipeList recipes={recipes} onRecipeClick={handleRecipeClick} />
        {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
      </main>
    </div>
  );
}

export default App;
