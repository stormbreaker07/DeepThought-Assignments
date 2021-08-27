import classes from './BusinessOwner.module.css';
import {Route , Switch , Link , Router } from "react-router-dom";
import LocationOfUser from "./locationOfUser";
import history from "../hs";
import Navbar from "./Navbar";

const BusinessOwner = () => {


    return(
        <Router history={history}>
        <div className={classes.outerContainer}>
            <div className={classes.level}>
                <Navbar level={window.location.href}></Navbar>
            </div>
            <div className={classes.content}>
            <h1> Business Owner</h1>
            <h3>If you are a business owner then press YES else press NO</h3>
            </div>
            <div className={classes.buttonContainer}>
                <button><a href = "/location">YES</a> </button>

                <button><a href="/login-option">NO</a> </button>
            </div>
        </div>

        </Router>
    )
}

export default BusinessOwner;