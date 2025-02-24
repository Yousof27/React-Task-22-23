import { useCounterContext } from "../Contexts/reducerContext";
import { initialCounterValue } from "../reducer";
import Button from "./Button";

function ButtonsContainer() {
    const { dispatch } = useCounterContext();
    const increment = () => dispatch({ type: "increment", payload: 1 });
    const decrement = () => dispatch({ type: "decrement", payload: 1 });
    const reset = () => dispatch({ type: "reset", payload: initialCounterValue });
    return (
        <div>
            <Button text="+" onclick={increment} />
            <Button text='reset' onclick={reset} />
            <Button text="-" onclick={decrement} />
        </div>
    )
}

export default ButtonsContainer;