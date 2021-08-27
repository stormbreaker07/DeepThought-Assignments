import classes from "./Reddit.module.css";
import './icon.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Giphy from "./Giphy";


const Reddit =() => {


    const [inputValue , setInputValue] = useState(
        {value : "aww"}
    );


    const [gifDataList , setGifDataList] = useState({
        data : []
    })

    useEffect(() => {
        let url = `https://www.reddit.com/r/aww/new.json?sort=new`;
        axios.get(url)
            .then((response) => {
                console.log(response.data.data.children)
                setGifDataList({
                    data : response.data.data.children
                })
            }).catch((err) => {
            alert("operation unsuccessful");
        });
    },[])

    const onChangeHandler = (e) => {
        e.preventDefault();
        setInputValue({
            value: e.target.value})
    }



    const onSubmitHandler = (e) => {
        e.preventDefault();
        const search = inputValue.value;
        asyncCall(search);
    }

    const asyncCall = (search) => {
        axios.get(`https://www.reddit.com/r/${search}/new.json?sort=new`)
            .then((response) => {
                 setGifDataList({data : response.data.data.children})
                console.log(gifDataList.data)
            }).catch((err) => {
                alert("operation unsuccessful");
        })
    }




    return (
        <div>
            <header className={classes.header}>
                <nav>
                    <a href="/giphy" className={classes.redditLinkPos}>
                        Giphy <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                </nav>
                <i className="fa fa-reddit-alien fa-6" aria-hidden="true"></i><h1 className="App-title">Hello, Reddit!</h1>
            </header>

            <div className={classes.mainBody}>
                <div className={classes.searchBar}>
                    <h1>/r/ </h1>
                    <form onSubmit={onSubmitHandler}>
                        <input className={classes.inputStyle} type="text" onChange={onChangeHandler} value={inputValue.value}></input>
                    </form>
                </div>

                <div className={classes.searchResultBody}>
                    {
                    gifDataList.data.map(item => (
                    <div className={classes.gifOuterContainer} key={item.data.id}>
                        <p className={classes.para}><a className={classes.paraAnchor} href={`https://www.reddit.com/${item.data.subreddit_name_prefixed}`} >{item.data.subreddit_name_prefixed}
                            </a>
                        </p>

                        <p>
                            <a className={classes.paraAnchor} href={`https://www.reddit.com/u/${item.data.author}`} target="_blank" rel="noopener">u/{item.data.author}
                            </a>
                        </p>

                        {
                            item.data.thumbnail &&
                            <a href={`https://www.reddit.com/${item.data.permalink}`} target="_blank" rel="noopener">
                                <img className={classes.imageSize} src={item.data.thumbnail} alt="" />
                            </a>
                        }

                        {
                            item.data.url==='' &&
                            <a  href={`https://www.reddit.com/${item.data.permalink}`} target="_blank" rel="noopener"><img src={item.data.url} alt="" /></a>
                        }

                        <h3><a className={classes.gifTestColor} href={`https://www.reddit.com/${item.data.permalink}`} target="_blank" rel="noopener">{item.data.title}</a></h3>

                        <p>Comments {item.data.num_comments}</p>
                    </div>
                    ))}
                </div>


            </div>


        </div>
    )
}

export default Reddit;

