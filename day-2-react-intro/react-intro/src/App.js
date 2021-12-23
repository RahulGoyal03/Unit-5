import logo from './logo.svg';
import './App.css';


//...............CSS..............//

// function App() {
//   const style = {
//     color:"red",
//     fontSize: "40px",
//     background: "blue",

//   }
//   return (
//     <div className="App">
//       <h1 style={style}>Hello React </h1>
//       <h1 style={{
//     color:"black",
//     fontSize: "40px",
//     background: "yellow",
//   }}>Another Way </h1>
//       <img src = {logo} width={540}/>
//       <input placeholder= "Enter Name" />
//     </div>
//   );
// }



//.................Interpolation..................//
//getting the value in html

// function App() {
//  //const style =;
//  //h1 5 hello 1 hello
 
//   return (
//     <div className="App">
//      {[1,2,3,4,5].map((e) =>(
//        <h1>Hello {e}</h1>
//      ))}
//     </div>
//   );
// }



function App() {
  //const style =;
  //h1 5 hello 1 hello
 
  const arr = ["Wake up", "Have Tea", "Attend Standup"]
 
 
   return (
     <div className="App">
      {arr.map((e) =>(
        <h1>{e}</h1>
      ))}


      {/* {Todos()} */}

      <Todos />
      <Todos />
      <Todos />
     </div>
   
   );
 }

 function Todos() {
   return <h1>Component</h1>;
 }

export default App;
