import styles from "./All.module.css";
import Link from "next/link";

const Signup = () => {
    return(
    <div className={styles.container}>
        <div className={styles.signupbox}>
      <h1>CREATE ACCOUNT</h1>
      <form>
        <label></label>
        <input type="text" placeholder="Email Address" />
        <label></label>
        <input type="text" placeholder="Username" />
        <label></label>
        <input type="password" placeholder="Password" />
        <label></label>
        <input type="password" placeholder="Confirm Password" />
        <input type="button" value="Sign Up" />
      <closeform></closeform></form>
      <p>
        Already have an account? 
        <Link href="/">Login here</Link>
      </p>
    </div>
    </div>
    );
};

export default Signup;