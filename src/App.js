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

    const checkLike = (charterName) => {
    if (like.includes(charterName)) {
      let temp = like.filter((f) => f.name !== charterName.name);
      setLike(temp);
    } else {
      setLike([...like, charterName]);
    }
    console.log(like);
  };
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
