import {useState} from "react";


//  function App() {
//   const [counter,setCounter] = useState(0)
//      const [value, setValue]  = useState(0)
//      const [result, setResult]  = useState(0)
//   const handleIncrement = () =>{
//     setResult(counter + value)
//   }
//   const handleDecrement = () =>{
//     setResult(counter - value)
//   }
//
//   return (
//     <div className="App">
//      <h1>{result}</h1>
//         <input type="number"  onChange={(e) => setValue(Number(e.target.value))}/>
//         <input type="number" onChange={(e) => setCounter(Number(e.target.value))}/>
//       <button onClick={handleIncrement}>+</button>
//       <button onClick={handleDecrement}>-</button>
//
//     </div>
//   );
// }

function App() {
    const [number,setCounter] = useState(0)
    const handleChange = event => {
        setCounter(event.target.value)
        console.log(event.target.value)
    }

    return (
        <div className="App">
            <input type="text"
            onChange={handleChange}
            value={number}/>
                <h1>{number}</h1>
        </div>
    );
}
export default App;
