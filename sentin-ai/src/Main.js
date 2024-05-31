import React from 'react';
import Navbar from './Components/Navbar';
import './Style/Navbar.css';
import Card from './Components/Card';
import Card2 from './Components/Card2';
import Card3 from './Components/Card3';
import Box from './Components/Box';
import './Style/Card.css';
import './Style/Card2.css';
import './Style/Card3.css';
import './Main.css';
import './Style/Box.css';

function Main() {
  return (
    <div>
       <div className='Background'>

        <Navbar/>

        <Card name={"Positive"} card={<Box name="50" type={"Positive"}></Box>} />
        <Card name={"Neutral"} card={<Box name="40" type={"Neutral"}></Box>}/>
        <Card name={"Negative"} card={<Box name="10" type={"Negative"}></Box>}/>

        <Card2 className="Card_Graph"/>
        <Card2 className="Card_WordCloud"/>

        <Card3 />

       
      
        </div>
    </div>
  )
}

export default Main;
