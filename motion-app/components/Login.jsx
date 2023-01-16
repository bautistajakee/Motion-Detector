import styles from "./All.module.css";

const Login = () => {
    return(
        <div className={styles.container}>
            <div className={styles.loginbox}>
            <h1>Login</h1>
            <form>
                <label></label>
                <label></label>
                <input type="text" placeholder="Username" />
                <label></label>
                <input type="password" placeholder="Password" />
                <input type="button" value="Login" />
            <closeform></closeform></form>
            <p> 
                <a href="resetpassword.html">Forgot Password?</a>
                <br/>
                <br/>
                <br/>
                No account? 
                <a href="signup.html">click here</a>
            </p>
        </div>
        </div>
        
    );
};

export default Login;