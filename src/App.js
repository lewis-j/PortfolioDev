
import React, { Component} from "react";
import Nav from "./navbar.js";
import Portfolio from "./portfolio.js";
import Footer from "./footer.js";
import Plx from 'react-plx';
import { Button } from "reactstrap";
import resources from './asset-list.js';

const parallaxData = [
  {
    start: 100,
    duration: 200,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: 'opacity',
      }
    ],
  },
];

const plxTitle = [
  {
    start: 0,
    duration: 400,
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: 'opacity',
      },
      {
      startValue: 0,
      endValue: -150,
      property: "translateY"
    },
    {
       startValue: 1,
       endValue: 1.5,
       property: "scale"
     },{
        startValue: 1,
        endValue: 1.5,
        property: "scale"
      }, {
        startValue: 20,
        endValue: 0,
        property: "blur"
      }
    ],
  },
];

class App extends Component{

  render(){
    return(

        <div>
        <Plx
        className='MyAwesomeParallax'
        parallaxData={ parallaxData }
        animateWhenNotInViewport = {true}
      >
        <img className="banner-img" src={ resources.myPortrait }/>
      </Plx>
        <section className="b-container">
        <h3 className="myName-title">Lindsey Jackson's</h3>
        <h5 className="myName-subtitle">Portfolio</h5>
        <Button className="about-btn" outline color="primary">About</Button>
        <h1 className="splash-blerb">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h1>
        </section>

        <Plx
        className='plx-title'
        parallaxData={ plxTitle }
        animateWhenNotInViewport = {true}
      >
        <h1 className="portfolio-title">My Projects</h1>
      </Plx>

        <Portfolio  />
        <Footer />
        </div>
    );
  }
}

export default App;
