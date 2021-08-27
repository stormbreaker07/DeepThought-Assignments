import FacebookLogin from 'react-facebook-login';
import {useState} from 'react';
import classes from "./BusinessOwner.module.css";
import Navbar from "./Navbar";


const FaceBookLogin = () => {

    const [status , setStatus] = useState(
        {
            isLoggedIn : false,
            name : "",
            email : ""
        })

    const componentClicked = () => {console.log("clicked")};
    const responseFacebook = response => {
        console.log(response);
        setStatus({
            isLoggedIn : true,
            name : response.name,
            email : response.email,
        })
    }

    let fbContent;
    if(status.isLoggedIn) {
        fbContent = <div>
            <h1 style={{"margin-right":"40%"}}>Logged IN !</h1>
        </div>
    }
    else {
        fbContent =(   <FacebookLogin
                appId="424191952365097"
                autoLoad={false}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook} />
        )
    }


    return(
        <div className={classes.outerContainer}>
            <div className={classes.level}>
                <Navbar level={window.location.href}></Navbar>
            </div>
            <div className={classes.content}>
                <h1> Login via Facebook</h1>
                <div className={classes.facebookButton}>
                    {fbContent}
                </div>

            </div>
            <div className={classes.buttonContainer}>
                <button><a href = "login-option/facebook-login">Yes</a></button>
                <button><a href="/login-option/email-sign-up">SignUp</a> </button>
            </div>
        </div>
    )
}

export default FaceBookLogin;


