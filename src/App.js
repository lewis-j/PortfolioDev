
import React, { Component} from "react";
import Nav from "./navbar.js";
import Portfolio from "./portfolio.js";
import Footer from "./footer.js";
import Plx from 'react-plx';
import ContactForm from './contact.js';
import { Button, Container, Row, Col } from "reactstrap";
import resources from './asset-list.js';

const parallaxData = [
  {
    start: 0,
    duration: 100,
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
    start: ".portfolio",
    duration: 100,
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: 'opacity',
      },
      {
      startValue: 30,
      endValue: -100,
      property: "translateY"
    }
    ],
  },
];

const plxNav = [
  {
    start:50,
    duration: 100,
    properties: [
      {
        startValue: 'rgba(255,255,255,0)',
        endValue: 'rgba(255,255,255,1)',
        property: 'backgroundColor'
      },
      {
        startValue: 'rgba(230, 233, 233,0)',
        endValue: 'rgba(230, 233, 233,1)',
        property: 'borderBottomColor'
      }
    ],
  },
];
const plxAbout = [
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
      endValue:  150,
      property: "translateX"
    }
  ]
}
];

class App extends Component{

  constructor(props){
    super(props);
    this.state= {
      isAbout : false
    }

    this.aboutSection = this.aboutSection.bind(this);
  }

  aboutSection(){
    this.setState(prevState => ({ isAbout: !prevState.isAbout }));
  }

  render(){
    if(!this.state.isAbout){
      return(

          <div>
          <Container fluid = {true} className="jumbo-container">
          <Row>
          <Plx
            className="navBar"
            parallaxData={ plxNav }
            >
            <h3 className="myName-title">Lindsey Jackson's</h3>
            <h5 className="myName-subtitle">UI/UX Designer</h5>
            <Button className="about-btn" outline color="primary" onClick={ this.aboutSection } >About</Button>
            </Plx>
          <Plx
          className='MyAwesomeParallax'
          parallaxData={ parallaxData }
          animateWhenNotInViewport = {true}
        >
          <img className="banner-img" src={ resources.myPortrait }/>
        </Plx>
          <section className="b-container">
          <h1 className="splash-blerb">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h1>
          </section>
          </Row>
          </ Container>
         <Container fluid={ true }>
         <Plx
         className='plx-title'
         parallaxData={ plxTitle }
         animateWhenNotInViewport = {true}
       >
        <img className="srjc-logo" src = { resources.srjcLogo }/>
         <h1 className="portfolio-title">Santa Rosa Jr College <br/> Projects</h1>
       </Plx>
          <Portfolio  />
          </Container>
          <Footer />
          </div>
      );
    }else{
      return(
      <Container className="about-container" fluid = {true}>
        <Row className="header">

        <h3 className="about-title">About Me</h3>
         <Button className="about-btn" outline color="primary" onClick={ this.aboutSection } >My Portfolio</Button>
         <div className="about-content">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
</div>
<figure className = "about-img" >
<img src={ resources.aboutImg }/>
</figure>
        </Row>
        <Row className = "about-footer">
        <Plx
        className='form-plx'
        parallaxData={ plxAbout }
        animateWhenNotInViewport = {true}
      >
      <ContactForm/>
      </Plx>
        </Row>
        <Row>
            <Footer />
            </Row>
      </Container>
    );
    }

  }
}

export default App;
