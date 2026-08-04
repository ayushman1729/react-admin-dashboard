import React from "react";

function RecipeTable({ recipes }) {
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">
          Recipes List
        </h6>
      </div>

      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Cuisine</th>
                <th>Difficulty</th>
                <th>Prep Time</th>
                <th>Cook Time</th>
                <th>Rating</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {recipes.map((recipe) => (
                <tr key={recipe.id}>
                  <td>
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      width="60"
                      height="60"
                      style={{ objectFit: "cover", borderRadius: "6px" }}
                    />
                  </td>

                  <td>{recipe.name}</td>
                  <td>{recipe.cuisine}</td>
                  <td>{recipe.difficulty}</td>
                  <td>{recipe.prepTimeMinutes} min</td>
                  <td>{recipe.cookTimeMinutes} min</td>
                  <td>⭐ {recipe.rating}</td>

                  <td>
                    <button className="btn btn-sm btn-warning me-2">
                      Edit
                    </button>

                    <button className="btn btn-sm btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}

export default RecipeTable;