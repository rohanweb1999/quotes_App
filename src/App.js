import React from 'react'
import { useState } from 'react';
import "./App.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import "./script.js"
const App = () => {

  const [newQuotes, setnewQuotes] = useState("Click Next to see random quotes");
  const [getauthor, setgetauthor] = useState("")
  let realData = "";
  let quotesData = "";

  const nextbtn = () => {
    let rnum = Math.floor(Math.random() * 10);

    quotesData = realData[rnum];
    // console.log(rnum)
    // console.log(quotesData.text);
    setnewQuotes(quotesData.text);
    setgetauthor(quotesData.author)
    console.log(rnum)
    console.log(newQuotes);

  }

  const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
      let data = await fetch(api);
      realData = await data.json();


    } catch (error) { }
  }
  getQuotes();

  return (
    <div className="mainClass">
      <div className="subClass">
        <h1>quotes</h1>
      </div>
      <div className="box">
        <div className="boxItems">
          <p className="quotes" id="newquotes">"{newQuotes}"</p>
          <div className="btnDiv">
            <ArrowForwardIosIcon className="next-btn" fontSize="large" onClick={nextbtn} />
          </div>
          <div className="viewAuthor">
            <p id="view-author" >@{getauthor}</p>
          </div>
        </div>

      </div>
    </div>


  )

}


export default App;

