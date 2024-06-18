import styles from './ButtonsContainer.module.css'

const ButtonsContainer = ({buttonNames, onButtonClick}) => {

    return (
        <div className={styles.buttonsContainer}>
            {buttonNames.map(buttonName =>
                <button className={styles.button} onClick={() => onButtonClick(buttonName)}>{buttonName}</button>
            )}
        </div>
    );
};

export default ButtonsContainer