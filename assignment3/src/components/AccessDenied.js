import classes from './BusinessOwner.module.css';
import Navbar from "./Navbar";

const AccessDenied = () => {


    return(
        <div className={classes.outerContainer}>
            <div className={classes.level}>
                <Navbar level={window.location.href}></Navbar>
            </div>
            <div className={classes.content}>
                <h1> Access Denied</h1>
                <h3>To go back to start then press Go Back else press Exit</h3>
            </div>
            <div className={classes.buttonContainer}>
                <button><a href="/">GoBack</a> </button>
                <button> End</button>
            </div>
        </div>
    )
}

export default AccessDenied;