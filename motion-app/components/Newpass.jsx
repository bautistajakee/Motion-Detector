import styles from "./All.module.css";

const New = () => {
    return(
        <div className={styles.container}>
            <div className={styles.newbox}>
            <h1>New Password</h1>
            <form>
                <label></label>
                <input type="password" placeholder="Password" />
                <label></label>
                <input type="password" placeholder="Confirm Password" />
                <input type="button" value="Submit" />
            <closeform></closeform></form>
            </div>

        </div>
    );
};

export default New;