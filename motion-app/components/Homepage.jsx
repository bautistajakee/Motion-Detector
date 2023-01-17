import styles from "./All.module.css";
import Link from "next/link";

const Home = () => {
    return(
        <div>
            <header className={styles.header}>
                <h4 className={styles.brand}>Motion Detector</h4>
                <Link className={styles.navlink} href="/logout">LOGOUT</Link>
            </header> 
            <div className={styles.container}>
            </div>
        </div>
        
    );
};

export default Home;