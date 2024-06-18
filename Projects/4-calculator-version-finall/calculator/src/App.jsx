
import ButtonsContainer from './components/ButtonsContainer'
import Display from './components/Display'
import styles from './App.module.css'
import { useState } from 'react';

function App() {
  const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];

  const [calVal,setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if(buttonText === 'C') {
      setCalVal("");
    }
    else if(buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    }
    else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };


  return (
    <div className={styles.calculator}>
      <Display displayValue ={calVal}></Display>
       <ButtonsContainer buttonNames={buttonNames} onButtonClick={onButtonClick}  ></ButtonsContainer> 
    </div>
  )
};

export default App;
