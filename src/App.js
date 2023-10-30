import './App.css';
import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState(''); 
  
  const updateInput = (value) => {
    setInputValue((prevValue) => prevValue + value);
  };

  const calculateResult = () => {
    setInputValue(eval(inputValue).toString());
  };

  return (
    <div className="App">
      <input value={inputValue} readOnly />
      <div>
        <button onClick={() => updateInput('7')}>7</button>
        <button onClick={() => updateInput('8')}>8</button>
        <button onClick={() => updateInput('9')}>9</button>
        <button onClick={() => updateInput('+')}>+</button>
      </div>
      <div>
        <button onClick={() => updateInput('4')}>4</button>
        <button onClick={() => updateInput('5')}>5</button>
        <button onClick={() => updateInput('6')}>6</button>
        <button onClick={() => updateInput('-')}>-</button>
      </div>
      <div>
        <button onClick={() => updateInput('1')}>1</button>
        <button onClick={() => updateInput('2')}>2</button>
        <button onClick={() => updateInput('3')}>3</button>
        <button onClick={() => updateInput('*')}>*</button>
      </div>
      <div>
        <button onClick={() => updateInput('.')}>.</button>
        <button onClick={() => updateInput('0')}>0</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => updateInput('/')}>/</button>
      </div>
    </div>

  );
}

export default App;
