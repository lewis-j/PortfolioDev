
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
        title: "Brooklyn Arts Museum",
        imgSrc: images[0],
        discription: "Here's a short discription",
        siteUrl: "http://lindseyljackson.com/Sites/Brooklyn-Arts/root/collection.html",
    },
    {
        title: "Phaser 2 game",
        discription: "here is another discription",
        imgSrc: images [1]
    },
    {
        title: "Quiz App",
        discription: "A quiz app made with Jquery and Bootstrap",
        imgSrc: images[1]

    },  {
          title: "Brooklyn Arts Museum",
          imgSrc: images[0],
          discription: "Here's a short discription",
          siteUrl: "http://lindseyljackson.com/Sites/Brooklyn-Arts/root/collection.html",
      },
      {
          title: "Phaser 2 game",
          discription: "here is another discription",
          imgSrc: images [1]
      },
      {
          title: "Quiz App",
          discription: "A quiz app made with Jquery and Bootstrap",
          imgSrc: images[1]

      },  {
            title: "Brooklyn Arts Museum",
            imgSrc: images[0],
            discription: "Here's a short discription",
            siteUrl: "http://lindseyljackson.com/Sites/Brooklyn-Arts/root/collection.html",
        },
        {
            title: "Phaser 2 game",
            discription: "here is another discription",
            imgSrc: images [1]
        },
        {
            title: "Quiz App",
            discription: "A quiz app made with Jquery and Bootstrap",
            imgSrc: images[1]

        },  {
              title: "Brooklyn Arts Museum",
              imgSrc: images[0],
              discription: "Here's a short discription",
              siteUrl: "http://lindseyljackson.com/Sites/Brooklyn-Arts/root/collection.html",
          },
          {
              title: "Phaser 2 game",
              discription: "here is another discription",
              imgSrc: images [1]
          },
          {
              title: "Quiz App",
              discription: "A quiz app made with Jquery and Bootstrap",
              imgSrc: images[1]

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
        <h3 className="myName-title">Lindsey Jackson's</h3>
        <h5 className="myName-subtitle">Portfolio</h5>
        <h1 className="splash-blerb">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h1>
        </section>

        <div className="port-heading">My Portfolio </div>
        <Portfolio data = { portfolioData } />
        </div>
    );
  }
}

export default App;
