import React from "react";
import def from '../img/default.jpeg';


const Card = ({data}) => {
    const handleImageError = (e) => { 
        e.target.onerror = null;
        e.target.src = def; };
    function truncate(str,n){
        return str?.length > n ? str.substr(0, n-1) + "..." :str;

    }

    return (
        <>         
            <div className="cardContainer">
                {data.map((item , index) => {
                    return(
                        <div className="card">
                           <img src={item.image_url || {def}} alt={index} onError={handleImageError} />
                            <div className="cardContent">
                                <a className="title" href={item.link}>{item.title}</a>
                                <p className="description">{truncate(item.description,120)}</p>
                                <button onClick={()=>window.open(item.link)} >Read More</button>
                            </div>
                        </div>
                        )
                    
                })}
            </div>
          
        </>
    )
};

export default Card;