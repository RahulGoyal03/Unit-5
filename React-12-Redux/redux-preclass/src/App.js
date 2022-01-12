import './App.css';
import React,{useContext} from 'react';
import Counter from './components/Counter';
import { store } from './Redux/store';
import { AppContext } from './Redux/AppContextProvider';

function App() {

const {getState} = useContext(AppContext)
const {counter} = getState()
  return (
    <div className="App">
      <Counter />
      <div>{counter}</div>
    </div>
  );
}

export default App;
