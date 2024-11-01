import React ,{useEffect, useState} from "react";
import Card from './Card.js';
import logo from '../img/logo.png';

const NewsApp = () => {
    const [newsData , setnewsData] = useState(null);
    const [Search , setSearch] = useState('india');
    const api_key = process.env.REACT_APP_API_KEY;

    const getData = async() => {
        const response = await fetch(`https://newsdata.io/api/1/latest?apikey=${api_key}&q=${Search}&language=en`);
        const jsonData = await response.json();
        // console.log(jsonData);
        let sData = jsonData.results;
        console.log(sData);
        
        setnewsData(sData)
    }
    useEffect(()=>{
        getData()
    },[])

    const handelInput = (e) =>{
        setSearch(e.target.value)
    };

    const userInput = async(event) =>{
         setSearch(event.target.value)
    };



    return (
        <>
          <nav>
            <div className="nav-left">
                <img className="logo" src={logo} alt="logo"/>
                <h1 className="header">Trending News</h1>
            </div>
            <div className="nav-right">
                <input type="text" placeholder="Search News" onChange={handelInput} />   
                <button onClick={getData}>Search</button>             
            </div>
          </nav>
          <div>
            <p className='head'>Stay Update with TrendyNews</p>
          </div>

          <div className="categoryBtn">
            <button onClick={getData} onMouseDown={userInput} value="sports">Sports</button>           
            <button onClick={getData} onMouseDown={userInput} value="politics">Politics</button>
            <button onClick={getData} onMouseDown={userInput} value="entertainment">Entertainment</button>
            <button onClick={getData} onMouseDown={userInput} value="health">Health</button>
            <button onClick={getData} onMouseDown={userInput} value="fitness">Fitness</button>
          </div>

          <div>
            {newsData? 
            <Card data={newsData}/> : null
            }
          </div>
        </>
    )
};

export default NewsApp;