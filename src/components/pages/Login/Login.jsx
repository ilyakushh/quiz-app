import logo from "../../../img/logo.png";
import styles from "./Login.module.scss";

const Login = () => {
  return (
    <section className={styles.loginContainer}>
      <img src={logo} alt="" />
      <h4> Please login/Signup to your account</h4>
      <form>
        <div className={styles.inputs}>
          <div className={styles.inputItem}>
            <input
              type="text"
              placeholder="hakeem@digital.com"
              className={styles.deleteBorder}
            />
            <span>Email address</span>
          </div>
          <div className={styles.inputItem}>
            <input type="text" placeholder="*******************" />
            <span>Password</span>
          </div>
        </div>
        <div className={styles.loginOptions}>
          <label htmlFor="remember">
            <input type="checkbox" id="remember" />
            remember me
          </label>
          <a href="">Forgot Password?</a>
        </div>
        <div className={styles.buttons}>
          <button className="button">Login</button>
          <button className="button">Signup</button>
        </div>
        <p>
          or login with <a href="#">facebook</a> or <a href="#"> google </a>
        </p>
      </form>
    </section>
  );
};

export default Login;
