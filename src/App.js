import { useRef, useState } from "react";

function App() {
  let [name,setName]=useState("ned stark")
  let nameRef=useRef()
  const submitButton =()=>{
    setName(nameRef.current.value)
    nameRef.current.value=""
  }
  return (
    <div className="text-center">
     <p>{name}</p>
     <input  ref={nameRef} type="text" />
     <button type="button" onClick={submitButton}>
          Submit
        </button>
    </div>
  );
}

export default App;