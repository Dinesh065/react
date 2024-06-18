import styles from './ButtonsContainer.module.css'

const ButtonsContainer = ({buttonNames}) => {

    return (
        <div className={styles.buttonsContainer}>
            {buttonNames.map(buttonName =>
                <button className={styles.button}>{buttonName}</button>
            )}
        </div>
    );
};

export default ButtonsContainer