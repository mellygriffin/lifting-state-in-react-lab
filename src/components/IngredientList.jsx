// src/components/IngredientList.jsx
const IngredientList = (props) => {
    return (
        <ul>
        {props.ingredients.map((ingredient, index) => {
          return <li key={index} style={{ backgroundColor: ingredient.color }}>{ingredient.name};
      <button type="submit" onClick={() => props.addToBurger(ingredient)}>+</button>
      </li>
        })}
      </ul>
    )
  };
  
  export default IngredientList;
  