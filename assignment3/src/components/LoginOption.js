import classes from './BusinessOwner.module.css';
import Navbar from "./Navbar";

const LoginOption = () => {


    return(
        <div className={classes.outerContainer}>
            <div className={classes.level}>
                <Navbar level={window.location.href}></Navbar>
            </div>
            <div className={classes.content}>
                <h1> Login Option</h1>
                <h3>If you want to login with facebook then press YES else press SignUp</h3>
            </div>
            <div className={classes.buttonContainer}>
                <button><a href = "login-option/facebook-login">Yes</a></button>
                <button><a href="/login-option/email-sign-up">SignUp</a> </button>
            </div>
        </div>
    )
}

export default LoginOption;