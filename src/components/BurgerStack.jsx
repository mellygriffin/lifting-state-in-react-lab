// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
    return ( 
    <ul>
         {props.stack.map((ingredient, index) => {
          return <li key={index} style={{ backgroundColor: ingredient.color }}>{ingredient.name}
          <button type="submit" onClick={() => props.removeFromBurger(ingredient)}>X</button>
          </li>;
        })}
    </ul>
)};

export default BurgerStack;
