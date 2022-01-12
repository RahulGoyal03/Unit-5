import React from "react";
import { addCounter, reduceCounter } from "../Redux/action";
import { store } from "../Redux/store";
import { useState , useContext} from "react";
import { AppContext } from "../Redux/AppContextProvider";

const Counter = () => {
    const [state, setstate] = useState(0);
    const { dispatch, getState } = useContext(AppContext);
    const { counter } = getState();

    const forceUpdate = () => setstate(state + 1)

  const handleAdd = () => {
    dispatch(addCounter(1));
    forceUpdate()
    };

  const handleReduce = () => {
    dispatch(reduceCounter(1));
    forceUpdate()
  };
  return (
    <>
      <div>Counter : {counter}</div>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </>
  );
};

export default Counter;
