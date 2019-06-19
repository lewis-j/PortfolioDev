
import React, { Component} from "react";
import Nav from "./navbar.js";
import Portfolio from "./portfolio.js";
import Plx from 'react-plx';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

console.log( images );
const portfolioData = [
    {
        title: "Google Maps API",
        imgSrc: images[0],
        discription: "Here's a short discription",
        siteUrl: "www.something.com",
    },
    {
        title: "Phaser 2 game",
        discription: "here is another discription",
        imgSrc: images [1]
    }
    
];

const parallaxData = [
  {
    start: '.portfolio',
    duration: 200,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: 'opacity',
      },
         {
        startValue: 1,
        endValue: 0,
        property: 'opacity',
      },
    ],
  },
];

class App extends Component{
    
  render(){
    return(
        
        <div>
     
        <Plx
        className='MyAwesomeParallax'
        onPlxEnd = { ()=>{console.log("plx ran")}}
        parallaxData={ parallaxData }
animateWhenNotInViewport = {true}
      >
        <img className="banner-img" src={images[0]}/>
      </Plx>
        <section className="b-container">
        <h1 className="title">upcoming webdeveloper for hire</h1>
        </section>
        <Portfolio data = { portfolioData } />
        </div>
    );
  }
}

export default App;