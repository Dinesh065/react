import styles from "./FoodInput.module.css"

const FoodInput = ({ handleKeyDown }) => {


    return (
        <input className={styles.foodInput} type="text" placeholder="Want a new item? Enter here"
            onKeyDown={handleKeyDown} />
    )
}

export default FoodInput;