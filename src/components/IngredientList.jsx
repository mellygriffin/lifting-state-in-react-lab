// src/components/IngredientList.jsx
const IngredientList = (props) => {
    return (
        <ul>
        {props.ingredients.map((ingredient, index) => {
          return <li key={index}>{ingredient.name}</li>;
        })}
      </ul>
    )
  };
  
  export default IngredientList;
  