function Hello() {

    let myName = 'Dinesh';
    let number = 456;
    let fullName =() => {
        return 'Dinesh Choudhary';
    }

    return <p>
        MessageNo : {number} I am your master {fullName()}
    </p>
}

export default Hello;