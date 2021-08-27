import classes from './BusinessOwner.module.css';
import Navbar from "./Navbar";

const LoginOption = () => {


    return(
        <div className={classes.outerContainer}>
            <div className={classes.level}>
                <Navbar level={window.location.href}></Navbar>
            </div>
            <div className={classes.content}>
                <h1> Corporation Size</h1>
                <h3>If corporation is a large corporation then press YES else press NO</h3>
            </div>
            <div className={classes.buttonContainer}>
                <button> <a href="/location/corp-size/take-survey">YES</a></button>
                <button> <a href="/location/corp-size/contact-large-corp">NO</a></button>
            </div>
        </div>
    )
}

export default LoginOption;