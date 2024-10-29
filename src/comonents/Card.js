import React from "react";


const Card = ({data}) => {
    function truncate(str,n){
        return str?.length > n ? str.substr(0, n-1) + "..." :str;
    }

    return (
        <>         
            <div className="cardContainer">
                {data.map((item , index) => {
                    if(!item.urlToImage){
                        return null;
                    }else{
                    return(
                        <div className="card">
                            <img src={item.urlToImage} alt={index}/>
                            <div className="cardContent">
                                <a className="title" href={item.url}>{item.title}</a>
                                <p className="description">{truncate(item.description,120)}</p>
                                <button onClick={()=>window.open(item.url)} >Read More</button>
                            </div>
                        </div>
                        )
                    }
                })}
            </div>
          
        </>
    )
};

export default Card;