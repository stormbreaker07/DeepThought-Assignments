import classes from './BusinessOwner.module.css';
import Navbar from "./Navbar";

const LocationOfUser = () => {


    return(
        <div className={classes.outerContainer}>
            <div className={classes.level}>
                <Navbar level={window.location.href}></Navbar>
            </div>
            <div className={classes.content}>
                <h1> Location Of User</h1>
                <h3>If you are located in US then press YES else press NO</h3>
            </div>
            <div className={classes.buttonContainer}>
                <button><a href="/location/corp-size">YES</a> </button>
                <button><a href="/location/access-denied">NO</a> </button>
            </div>
        </div>
    )
}

export default LocationOfUser;