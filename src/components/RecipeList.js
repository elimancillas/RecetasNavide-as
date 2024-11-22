import React from "react";

function RecipeList({ recipes, onRecipeClick }) {
  return (
    <div className="recipe-list">
      <h2>Lista de Recetas</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} onClick={() => onRecipeClick(recipe.id)}>
            <img src={recipe.image} alt={recipe.name} className="thumbnail" />
            {recipe.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
