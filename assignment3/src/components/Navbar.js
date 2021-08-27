import classes from './Navbar.module.css';

const Navbar = (props) => {

    let str = props.level.substr(22 ,props.level.length ).trim();
    const levels = str.split("/");
    console.log(levels)
    let level = null;
    if(levels[0]!== "") {
         level = levels.map((x) => {
            return (<div>
                <h2 className={classes.leveling}> --> &nbsp;{x} </h2>
            </div>)
        })
    }


    return (
        <div className={classes.container}>
            <h2 className={classes.leveling}> / </h2>
            {level}
        </div>
    )
}

export default Navbar;