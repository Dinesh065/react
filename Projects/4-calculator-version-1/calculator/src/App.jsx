
import ButtonsContainer from './components/ButtonsContainer'
import Display from './components/Display'
import styles from './App.module.css'

function App() {

  const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];

  return (
    <div className={styles.calculator}>
      <Display></Display>
       <ButtonsContainer buttonNames={buttonNames}></ButtonsContainer> 
    </div>
  )
};

export default App
