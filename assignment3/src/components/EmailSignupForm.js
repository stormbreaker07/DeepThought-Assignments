import classes from './BusinessOwner.module.css';
import Navbar from "./Navbar";

const LargeCorpSignupForm = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault()
        alert("sign up completed");
    }

    return(
        <div className={classes.outerContainer}>
            <div className={classes.level}>
                <Navbar level={window.location.href}></Navbar>
            </div>
            <div className={classes.content}>
                <h1> Sign Up</h1>
                <div className={classes.form}>
                    <label>First Name : </label>
                    <input type="text" placeholder="firstName"></input>
                    <br></br>
                    <label>Last Name : </label>
                    <input type="text" placeholder="firstName"></input>
                    <br></br>
                    <label>Email Id : </label>
                    <input type="email" placeholder="firstName"></input>
                    <br></br>
                    <label>Password : </label>
                    <input type="password" placeholder="firstName"></input>
                    <button onClick={onSubmitHandler}>Sign Up</button>
                </div>
            </div>
            <div className={classes.buttonContainer}>
                <button> YES</button>
                <button> NO</button>
            </div>
        </div>
    )
}

export default LargeCorpSignupForm;