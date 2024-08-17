import { useState } from "react";
import DisplayCount from "./components/TextCount.jsx";
import ChangeCount from "./components/ChangeCount.jsx";
import DecrementCount from "./components/Decrement.jsx";
import IncrementCount from "./components/Increment.jsx";
function App() {
  const [count,setCount]=useState(0);

  const incrementCount=()=>
  {
    setCount(count+1);
  }
  const decrementCount=()=>
    {
      setCount(count-1);
    }
    const CountChange=(event)=>
      {
        event.preventDefault();
        const valuetobeAdded=parseInt(event.target.number.value);
        if(!isNaN(valuetobeAdded))
        setCount(count+valuetobeAdded);
      event.target.number.value="";
      }
  return (
    <>
    <ChangeCount handleclick={CountChange}/>
    <DisplayCount count={count}/>
    <DecrementCount handleclick={decrementCount}/>
    <IncrementCount handleclick={incrementCount}/>
    </>
  );
}
export default App;
