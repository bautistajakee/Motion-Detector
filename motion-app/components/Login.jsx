import styles from "./All.module.css";
import Link from "next/link";

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
                <Link href="/newpassword">Forgot Password?</Link>
                <br/>
                <br/>
                <br/>
                No account? 
                <Link href="/signup"> click here</Link>
            </p>
        </div>
        </div>
        
    );
};

export default Login;