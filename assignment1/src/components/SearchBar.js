import classes from './SearchBar.module.css';


const SearchBar = () => {
    return (
        <div className={classes.searchBarBody}>
            <form>
                <input className={classes.input} type="text" value="filter for e.g. Apple onChange (not implemented)">
                </input>
                </form>
        </div>
    )

}

export  default  SearchBar;