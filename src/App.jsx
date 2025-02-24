import { useReducer } from 'react'
import './App.css'
import ButtonsContainer from './Components/ButtonsContainer';
import { ReducerContextProvider } from './Contexts/reducerContext';

const initialCount1 = 0;
const initialCount2 = 5;

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": return state + action.payload;
    case "decrement": return state - action.payload;
    case "reset": return action.payload;
    default: state;
  }
}

function App() {
  const [count1, dispatchCount1] = useReducer(reducer, initialCount1);
  const [count2, dispatchCount2] = useReducer(reducer, initialCount2);

  return (
    <>
      <div>
        <h2>Task 1</h2>
        <p>Two Counters With The Same Reducer Function</p>
        <br />
        <div className='counter1'>
          <h2>1st Counter: {count1}</h2>
          <button onClick={() => dispatchCount1({ type: "increment", payload: 1 })}>+</button>
          <button onClick={() => dispatchCount1({ type: "reset", payload: initialCount1 })}>reset</button>
          <button onClick={() => dispatchCount1({ type: "decrement", payload: 1 })}>-</button>
        </div>
        <br />
        <hr />
        <div className='counter2'>
          <h2>2nd Counter: {count2}</h2>
          <button onClick={() => dispatchCount2({ type: "increment", payload: 5 })}>+</button>
          <button onClick={() => dispatchCount2({ type: "reset", payload: initialCount2 })}>reset</button>
          <button onClick={() => dispatchCount2({ type: "decrement", payload: 5 })}>-</button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <br />
      <br />
      <div>
        <ReducerContextProvider>
          <ButtonsContainer />
          <ButtonsContainer />
          <ButtonsContainer />
        </ReducerContextProvider>
      </div>
    </>
  )
}

export default App
