import React from 'react';
import Navbar from './Components/Navbar';
import './Style/Navbar.css';
import Card from './Components/Card';
import Card2 from './Components/Card2';
import Card3 from './Components/Card3';
import Box from './Components/Box';
import BoxAPI from './Components/BoxAPI';
import Graph from './Components/Graph';
import './Style/Card.css';
import './Style/Card2.css';
import './Style/Card3.css';
import './Main.css';
import './Style/Box.css';

function Main() {

  const PositiveValue = '50';
  const NeutralValue = '30';
  const NegativeValue = '20';
  
  return (
    <div>
       <div className='Background'>

        <Navbar/>

        <Card name={"Positive"} card={<Box type={"Positive"}  value={PositiveValue}></Box>} />
        <Card name={"Neutral"} card={<Box type={"Neutral"} value={NeutralValue}></Box>}/>
        <Card name={"Negative"} card={<Box type={"Negative"} value={NegativeValue}></Box>}/>

        <Card2 graph={<Graph></Graph>}/>
       
        <Card2 />

        <Card3 />
        </div>
    </div>
  )
}

export default Main;
