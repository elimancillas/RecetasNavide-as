import React from "react";

function RecipeDetails({ recipe }) {
  return (
    <div className="recipe-details">
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <p>{recipe.description}</p>
      <h3>Ingredientes:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instrucciones:</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetails;
