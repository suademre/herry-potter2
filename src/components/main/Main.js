import { useState } from "react";
import "./Main.css";


function Main({ data, checkLike }) {
    

  return (
    <>
      <div className="main">
        {data.map((d, key) => (
        <section className="card" key={key}>
          <div className="card__img">
            <img className="card__img__tag" src={d.image} alt={d.name} />
          </div>
                
            <div className="card_propertiesTag">
                <button onClick={()=>checkLike(d)}><i className="far fa-heart"></i></button>
            <h4 className="card__name">Name : {d.name} </h4>
            <h6 className="card__actor">Actor's Name{d.actor}</h6>
            <h6 className="card__house">House : {d.house}</h6>
            <button className="more">More</button>
          </div>
        </section>
         ))} 
      </div>
    </>
  );
}

export default Main;
