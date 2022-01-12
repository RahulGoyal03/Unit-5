import React from 'react'
import './App.css';
// import Counter from './counter/Counter';

// import { Task } from './Input/Task';
import Todo from './component/Todo';
function App() {

  const arr = ["wake" , "code10", "code"]

  return (
    <div className="App">
      {arr.map((e) => (
          <Todo num={e}> 
          <h1 className='child'>ChildrenH</h1>
          <h1 className='child'>ChildrenH2</h1>
          </Todo>
      ))}
    </div>
  );
}

export default App;
