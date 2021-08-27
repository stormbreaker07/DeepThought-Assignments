import './icon.css'
import classes from './Giphy.module.css';
import {useEffect, useState} from 'react';
import axios from "axios";
import Reddit from "./Reddit";



const Giphy = () => {

    const APIKEY =  "Peg9aT5W2QKAEjgFlyQWg6vhpDEmJbXD";

    const [searchHistory , setSearchHistory] = useState(
        {history : ["trending"]}
    )

    const [inputValue , setInputValue] = useState(
        {value : "trending"}
    );

    const onChangeHandler = (e) => {
        e.preventDefault();
            setInputValue({
                value: e.target.value})
    }

    const [responseData , setResponseData] = useState(
        {
            data : []
        }
    )

    useEffect(() => {
        let url = `https://api.giphy.com/v1/gifs/search?api_key=f4ee250fb7fc4ccf88cc2260099165c8&q=trending&limit=25&offset=0&rating=G&lang=en`;
        axios.get(url)
            .then((response) => {
                console.log(response.data.data)
                setResponseData({
                    data : response.data.data
                })
            }).catch((err) => {
            alert("operation unsuccessful");
        });
    },[])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let temp = searchHistory.history;
        let flag = 0;
        for(let i=0 ; i<temp.length ; i++) {
            if (temp[i] == inputValue.value) {
                flag = 1;
            }
        }

        if(flag === 0) {
            temp.push(inputValue.value)
        }

        setSearchHistory(
            {history : temp}
        )
        let search = inputValue.value.trim();
        asyncCallMethod(search);
        }

        const asyncCallMethod = (search) => {
            let url = `https://api.giphy.com/v1/gifs/search?api_key=f4ee250fb7fc4ccf88cc2260099165c8&q=${search}&limit=27&offset=0&rating=G&lang=en`;
            console.log(url);

            //axios get method
            axios.get(url)
                .then((response) => {
                    console.log(response.data.data)
                    setResponseData({
                        data : response.data.data
                    })
                }).catch((err) => {
                alert("operation unsuccessful");
            });
        }

        const onClickHistoryHander = (search) => {
            setInputValue( {
                value : search
            })
            asyncCallMethod(search);
        }


    return (
        <div>
        <header className={classes.header}>
            <nav>
                <a href="/reddit" className={classes.redditLinkPos}>
                    Reddit <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </a>
            </nav>
            <i className="fa fa-picture-o fa-6" aria-hidden="true"></i><h1 className="App-title">Hello, Giphy!</h1>
        </header>

        <div className={classes.mainBody}>
            <div className={classes.searchBar}>
                <h1># </h1>
                <form onSubmit={onSubmitHandler}>
                    <input className={classes.inputStyle} type="text" onChange={onChangeHandler} value={inputValue.value}></input>
                </form>
            </div>

            <div className={classes.resultBody}>
                <div className={classes.history}>
                    <h2>Search History</h2>
                    <ul className={classes.ulStyle}>
                        {
                            searchHistory.history.map((data) => <li key={data} className={classes.liStyle} onClick={() => onClickHistoryHander(data)}>{data}</li>)
                        }
                    </ul>
                </div>

                <section className={classes.searchResultBody}>
                    {
                        responseData.data.map(item => (
                            <div className={classes.gifOuterContainer} key={item.id}>
                                <h2 ><
                                    a className={classes.gifTestColor} href={item.bitly_url} >{item.title}</a>
                                </h2>
                                <a className={classes.gifImageBoundary} href={item.bitly_url} >
                                    <img className={classes.imageSize} src={item.images.preview_gif.url} alt="" />
                                </a>

                                <p><a className={classes.iconStyle} href={item.bitly_url} ><i className="fa fa-heart" aria-hidden="true"></i></a>
                                    <a className={classes.iconStyle} href={item.bitly_url} ><i className="fa fa-download" aria-hidden="true"></i></a>
                                    <a className={classes.iconStyle} href={item.bitly_url} ><i className="fa fa-link" aria-hidden="true"></i></a>
                                </p>
                            </div>
                        ))
                    }
                </section>
            </div>
        </div>

        </div>
    )
}

export default Giphy;