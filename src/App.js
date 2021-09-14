import React from 'react';
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Like from './components/Like';
import Main from './components/main/Main';
import data from './data.json'

function App() {
  console.log(data);
  
    const [like, setLike] = useState([]);

    const  checkLike = (charterName) => {
        // console.log(like.includes(charterName));
        const cardLike = like;
        if (cardLike.includes(charterName)) {
            let temp = cardLike.indexOf(charterName)
            cardLike.splice(temp, 1)
        } else {
            cardLike.push(charterName)
        }
        setLike(cardLike)
        console.log(like);

    }
  return (
    <React.Fragment>
      <Header/>
      
        <Switch>
          
          <Route exact path="/">
            <Main data={data} checkLike={checkLike}/>
          </Route>
          <Route path="/like">
          <Like data={like} checkLike={checkLike}/>
          </Route>
          
        </Switch>
   
      <Footer/>
    </React.Fragment>
  );
}

export default App;
