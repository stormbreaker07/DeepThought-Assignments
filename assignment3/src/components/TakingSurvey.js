import classes from './BusinessOwner.module.css';
import Navbar from "./Navbar";

const TakingSurvey = () => {

    return(
        <div className={classes.outerContainer}>
            <div className={classes.level}>
                <Navbar level={window.location.href}></Navbar>
            </div>
            <div className={classes.content}>
                <h1> Take Survey</h1>
                <h3>If you like to take survey then press YES else press NO</h3>
            </div>
            <div className={classes.buttonContainer}>
                <button> <a href="/location/corp-size/take-survey/sign-up">YES</a></button>
                <button> <a href="/location/corp-size/take-survey/sign-up">NO</a></button>
            </div>
        </div>
    )
}

export default TakingSurvey;