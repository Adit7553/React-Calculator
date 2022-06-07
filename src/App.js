import React,{useState} from 'react';
import './App.css';

function App() {

  const [result, setResult] = useState("")
   
  
// logic by which we can not type * or / operator in starting.
  const handleOnClick = (e)=>{
      setResult(result + e.target.name)
      if(e.target.name === "*" || e.target.name === "/"){
        if(result.length === 0){
          setResult("")
        } 
      }
     // logic by which we can not type any operator after an existing operator 
      if(result.charAt(result.length - 1) === "*" || result.charAt(result.length - 1) === "/" || result.charAt(result.length - 1) === "+"|| result.charAt(result.length - 1) === "-" ){
        if(result.charAt(result.length - 2) === "*" || result.charAt(result.length - 2) === "/" || result.charAt(result.length - 2) === "+"|| result.charAt(result.length - 2) === "-" ){
        setResult(result.slice(0,- 1))
       }
    }
  }

  const handleClear = (e)=>{
    setResult("")
  }
 const handleBackspace =(e)=>{
   setResult(result.slice(0,- 1));
 }
 const handleResultButton=(e)=>{
   try {
    setResult(eval(result).toString())
   } catch (err) {
     setTimeout(() => {
       setResult("")
     },2000);
    setResult("Not possible")
   }  
 }

  return (
    <>
    <div className="container">
      <form>
        <input type="text" value={result} />
      </form>
        <div className="keypadContainer">
          <button id='clear' onClick={handleClear}>Clear</button>
          <button id='backspace' onClick={handleBackspace} className="hightlineButton">C</button>
          <button name='/' onClick={handleOnClick} className="hightlineButton" >&divide;</button>
          <button name='7' onClick={handleOnClick}>7</button>
          <button name='8' onClick={handleOnClick}>8</button>
          <button name='9' onClick={handleOnClick}>9</button>
          <button name='*' onClick={handleOnClick} className="hightlineButton">&times;</button>
          <button name='4' onClick={handleOnClick}>4</button>
          <button name='5' onClick={handleOnClick}>5</button>
          <button name='6' onClick={handleOnClick}>6</button>
          <button name='-' onClick={handleOnClick} className="hightlineButton" >&ndash;</button>
          <button name='1' onClick={handleOnClick}>1</button>
          <button name='2' onClick={handleOnClick}>2</button>
          <button name='3' onClick={handleOnClick}>3</button>
          <button name='+' onClick={handleOnClick} className="hightlineButton">+</button>
          <button name='0' onClick={handleOnClick}>0</button>
          <button name='.' onClick={handleOnClick}>.</button>
          <button onClick={handleResultButton} id="resultButton">=</button>
        </div>
    </div>
    </>
  );
}

export default App;
