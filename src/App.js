
import React, { Component} from "react";
import Nav from "./navbar.js";
import Portfolio from "./portfolio.js";

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

class App extends Component{
    
  render(){
    return(
        
        <div>
        <Nav />
        <Portfolio data = { portfolioData } />
        </div>
    );
  }
}

export default App;