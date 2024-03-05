"use client";
import styles from "./loginPage.module.css";


const LoginPage = () => {


    return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.buttonSocial} onClick={() => signIn("google")}>
          Sign in with Google
        </div>
        <div className={styles.buttonSocial}>Sign in with Github</div>
        <div className={styles.buttonSocial}>Sign in with Facebook</div>
      </div>
    </div>
  );
};

export default LoginPage