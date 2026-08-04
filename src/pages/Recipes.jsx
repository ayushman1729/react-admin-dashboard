import { useState, useEffect } from "react";
import RecipeTable from "../components/RecipeTable";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const[searchRecipes, setSearchRecipes]= useState("")
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes);
      });
  }, []);

const filteredRecipes = recipes.filter((recipe) =>
  recipe.name.toLowerCase().includes(searchRecipes.toLowerCase())
);

  return (
    <>
     <div className="container-fluid">
<h1 className="h3 mb-4 text-gray-800">Recipes</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search recipes..."
          value={searchRecipes}
          onChange={(e) => setSearchRecipes(e.target.value)}
        />
      </div>
      <RecipeTable recipes={filteredRecipes} />
    </div>
    </>
  )
}

export default Recipes;
