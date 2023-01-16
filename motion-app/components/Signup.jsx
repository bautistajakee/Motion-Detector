import styles from "./Signup.module.css";

const Signup = () => {
    return(
    <div className={styles.container}>
        <div className={styles.card}>
            <div></div>
            <h2>SIGN UP</h2>
            <input type="text" id="email" placeholder="Email" /><br/>
            <input type="text" id="user" placeholder="Username"/><br/>
            <input type="password" id="pass"  placeholder="Password"/><br/>
            <input type="password" id="confirm" placeholder="Confirm Password"/>
            <br/>
            <button>Signup</button>
        </div>
    </div>
    );
};

export default Signup;