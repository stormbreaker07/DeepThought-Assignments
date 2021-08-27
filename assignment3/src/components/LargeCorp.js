import classes from './LargeCorp.module.css';
import Navbar from "./Navbar";

const LargeCorp = () => {


    return(
        <div className={classes.outerContainer}>
            <div className={classes.level}>
                <Navbar level={window.location.href}></Navbar>
            </div>
            <div className={classes.content}>
                <h1> Large Companies</h1>

                    <a href="https://www.walmart.com/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/1920px-Walmart_logo.svg.png">
                        </img>
                    </a>
                <a href="https://www.amazon.com/amazonprime">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg">
                    </img>
                </a>
                <a href="https://www.ford.com/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg">
                    </img>
                </a>
                <a href="https://www.att.com/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/AT%26T_logo_2016.svg">
                    </img>
                </a>
                <a href="https://www.ibm.com/in-en">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg">
                    </img>
                </a>
            </div>
            <div className={classes.buttonContainer}>
                <button> <a href="/">GoBack</a></button>
                <button> <a href="/">Exit</a></button>
            </div>
        </div>
    )
}

export default LargeCorp;