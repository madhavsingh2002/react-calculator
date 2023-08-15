import { useState } from 'react';
import './App.css'
function App() {
  const [input,setInput] = useState('')
  const handleSubmit=()=>{
    try{

      setInput(eval(input))
    }
    catch(err){
      setInput(err);
    }
  }
  const handleClear=()=>{
    setInput('')
  }
  const handleBack=()=>{
    setInput(input.slice(0, input.length-1))
  }
  return (
    <>
    <div className="calculator">
      <input className="value" type="text" value={input}></input>
      <button onClick={handleClear} className="numclear">Clear</button>
      <button onClick={handleBack} className="numclear">Back</button>
      <button name='/' onClick={(e)=>setInput(input.concat(e.target.name))} className="num">/</button>
      <button name='*' onClick={(e)=>setInput(input.concat(e.target.name))} className="num">*</button>
      <button name='7' onClick={(e)=>setInput(input.concat(e.target.name))} className="num">7</button>
      <button name='8' onClick={(e)=>setInput(input.concat(e.target.name))} className="num">8</button>
      <button name='9' onClick={(e)=>setInput(input.concat(e.target.name))} className="num">9</button>
      <button name='-' onClick={(e)=>setInput(input.concat(e.target.name))} className="num">-</button>
      <button name='4' onClick={(e)=>setInput(input.concat(e.target.name))} className="num">4</button>
      <button name='5' onClick={(e)=>setInput(input.concat(e.target.name))} className="num">5</button>
      <button name='6' onClick={(e)=>setInput(input.concat(e.target.name))} className="num">6</button>
      <button name='+' onClick={(e)=>setInput(input.concat(e.target.name))} className="num plus">+</button>
      <button name='3' onClick={(e)=>setInput(input.concat(e.target.name))} className="num">3</button>
      <button name='2' onClick={(e)=>setInput(input.concat(e.target.name))} className="num">2</button>
      <button name='1' onClick={(e)=>setInput(input.concat(e.target.name))} className="num">1</button>
      <button name='0' onClick={(e)=>setInput(input.concat(e.target.name))} className="num">0</button>
      <button name='=' onClick={handleSubmit} className="num equal">=</button>

    </div>
    </>
  );
}

export default App;
