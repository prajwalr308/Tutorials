import { useEffect, useState } from "react";


export default function App() {
  const [isadded, setIsadded] = useState(false);
  const [isState, setIsState] = useState(false);
  useEffect(() => {
    //yout fucntions like fetch
    setIsState(!isState);
    console.log("add method called");
  }, [isadded]);

  
  function add() {
    //your functions
    setIsadded(!isadded);
  }
  return (
    <div className="App">
      <button onClick={add}> add</button>
      <div>{`${isState}`}</div>
    </div>
  );
}
