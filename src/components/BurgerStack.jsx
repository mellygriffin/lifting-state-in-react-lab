// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
    return <ul>
         {props.stack.map((ingredient, index) => {
          return <li key={index} style={ingredient.color}>{ingredient.name}</li>;
        })}
    </ul>;
};

export default BurgerStack;
