import styles from "./All.module.css";

const Reset = () => {
    return(
        <div className={styles.container}>
            <div className={styles.resetbox}>
            <form>
            <label>Please enter your email address</label>
            <input type="text" placeholder="Enter Email Address" />
            <input type="button" value="Submit" />
            <closeform></closeform></form>
            </div>
        </div>
    );
};

export default Reset;