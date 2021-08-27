import classes from './BusinessOwner.module.css';
import Navbar from "./Navbar";

const ContractLargeCoup = () => {


    return(
        <div className={classes.outerContainer}>
            <div className={classes.level}>
                <Navbar level={window.location.href}></Navbar>
            </div>
            <div className={classes.content}>
                <h1> Contact Large Corp</h1>
                <h3>If want to contact large corporation then press YES else press SIGNUP to sign Up</h3>
            </div>
            <div className={classes.buttonContainer}>
                <button> <a href="/location/corp-size/contact-large-corp/large-corp">YES</a></button>
                <button> <a href="/location/corp-size/contact-large-corp/sign-up">SIGNUP</a></button>
            </div>
        </div>
    )
}

export default ContractLargeCoup;