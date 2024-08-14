// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
    return <ul>
         {props.stack.map((stack, index) => {
          return <li key={index}>{stack.name}</li>;
        })}
    </ul>;
};

export default BurgerStack;
