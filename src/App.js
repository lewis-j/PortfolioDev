
import React, { Component} from "react";
import Nav from "./navbar.js";
import Portfolio from "./portfolio.js";
import Footer from "./footer.js";
import Plx from 'react-plx';
import ContactForm from './contact.js';
import { Button, Container, Row, Col, Badge } from "reactstrap";
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
      },
      {
        startValue: 'rgba(255,255,255,1)',
        endValue: 'rgba(255,0,0,1)',
        property: 'color'
      }
    ],
  },
];
const plxSlideLeft = [
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
const plxSlideRight = [
  {
    start: '.dev-container',
    duration: 500,
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: 'opacity',
      },
      {
      startValue: 600,
      endValue:  0,
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
    window.open('#','_self');
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
            <h5 className="myName-subtitle">Full Stack Developer</h5>
            <div className="about-btn"  onClick={ this.aboutSection } >About</div>
            </Plx>
          <Plx
          className='MyAwesomeParallax'
          parallaxData={ parallaxData }
          animateWhenNotInViewport = {true}
        >
          <img className="banner-img" src={ resources.myPortrait }/>
        </Plx>
          <section className="b-container">
          <h1 className="splash-blerb">I am a full stack Web Developer and Programmer from Sonoma County. I like to create everything from interactive web applications, custom small business Wordpress websites, and even 2d games using javascript . </h1>
          </section>
          </Row>
          </ Container>
         <Container fluid={ true }>
         <Plx
         className='plx-title'
         parallaxData={ plxTitle }
         animateWhenNotInViewport = {true}
       >
         <h1 className="portfolio-title">Projects</h1>
       </Plx>
          <Portfolio  />
          </Container>
          <Footer />
          </div>
      );
    }else{
      return(
        <div>
      <Container className="about-container" fluid = {true}>
        <Row className="header">

        <h3 className="about-title">About Me</h3>
         <div className="about-btn" onClick={ this.aboutSection } >My Portfolio</div>
         <div className="about-content">
         My name is Lindsey Jackson and I'm a full stack web developer.  I've had experience creating small business word press websites and  have created and managed a web application requested by the SRJC baseball department. I find developing websites and web applications fulfills my creative drive and is a great means of artistic expression.  Whether it's the structure of the data models, or the front end look and feel, clean elegant design is somethings I'm always striving for.
          <br/>  <br/>The rapidly evolving nature of web technologies is exciting and has kept me in constant pursuit of more knowledge. The beauty of coding to me is that it feels infectious. When presented with a challenging coding problem I find that will pursue it to the fullest extent and will not rest until I've found a suitable solution.
</div>
<figure className = "about-img" >
<img src={ resources.aboutImg }/>
</figure>
        </Row>
        <Row className = "about-experience">
        <Plx
        className='slide-in-plx'
        parallaxData={ plxSlideLeft }
        animateWhenNotInViewport = {true}
      >
      <h2>Web Technologies</h2>
        <p>I'm constantly seeking information on front and back end web technologies, currently < br/>experimenting with react.js and ecmascript 6 syntax.<br /> The web technologies I'm experienced in are as follows:  </p>
        {['Bootstrap','JQuery','PHP','React','mySQLi','PouchDB','d3.js'].map((item,index)=>{ return <Badge key={index} color='light'>{item}</Badge>})}


      </Plx>
      </Row>
      </Container>

      <Plx
      className='slide-in-plx'
      parallaxData={ plxSlideRight }
      animateWhenNotInViewport = {true}
    >
        <Container className="dev-container" fluid={true}>
    <Row>
<Col md="6"><h2>Development Process</h2></Col>
<Col md="6"><img className="atom-screenshot" src={ resources.atomScn }/></Col>
</Row>
</Container>
</Plx>
  <Footer />
</div>



    );
    }

  }
}

export default App;
