import logo from './logo.svg';
import './App.css';

function App() {

  const arr = [1, 2, 3, 4, 5]
  
  return (

    <div className="App">
      <Todos />
      <div style={{color: "blue"}}>{arr.map((e) => (
       
        <Todos num={e}/>
        
      ))} </div>
      <Todos />
    
    </div>
  );
}

function Todos({num}) {
  return (
    <>
    <h1>Hi Ankit {num}</h1>
    </>
  )
}

export default App;
