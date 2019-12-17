
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
    start: ".portfolio-container",
    duration: 300,
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
        endValue: '#c69672',
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
      startValue: -150,
      endValue:  0,
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
         <Container className="portfolio-container" fluid={ true }>
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
         <div className="about-content p-width">
         <p>My name is Lindsey Jackson and I'm a full stack web developer.  I've had experience creating small business word press websites and  have created and managed a web application requested by the SRJC baseball department. I find developing websites and web applications fulfills my creative drive and is a great means of artistic expression.  Whether it's the structure of the data models or the front end look and feel, clean elegant design is somethings I'm always striving for.</p>
         <p>The rapidly evolving nature of web technologies is exciting and keeps me in constant pursuit of more knowledge.  I really enjoy  finding new and more effective ways to bring ideas to life. I'm truly passionate about coding and am looking forward to the future in this field.</p>
</div>
<figure className = "about-img-container" >
<img  className="about-img" src={ resources.aboutImg }/>
</figure>
        </Row>
        </Container>
        <div className='dark-background'>
        <Container>
        <Row className = "about-experience">
        <Col md='12'><Plx
        className='slide-in-plx'
        parallaxData={ plxSlideLeft }
        animateWhenNotInViewport = {true}
      >
      <h2>Web Technologies</h2>
        <p className="web-tech-content">I'm constantly seeking information on front and back end web technologies, currently experimenting with react.js and ecmascript 6 syntax. The web technologies I'm experienced in are as follows:  </p>
        {['Bootstrap','JQuery','PHP','React','mySQLi','PouchDB','d3.js'].map((item,index)=>{ return <Badge key={index} color='light'>{item}</Badge>})}


      </Plx>
      </Col>
      </Row>
      </Container>
      </div>
      <div>
<Container className="dev-container" >
  <Row>
<Col md="6" className='order-md-2'><div className='about-dev-img'><img className="atom-screenshot" src={ resources.aboutDev.atomScn }/><img className="mamp-logo" src={ resources.aboutDev.mamp }/><img className="atom-logo" src={ resources.aboutDev.atom }/><img className="git-logo" src={ resources.aboutDev.git }/></div></Col>
<Col md="6" className='order-md-1'><div className="dev-content"><h2>Development Process</h2>
<p>The majority of my  development experience I've used Bootstrap, jQuery,  and  JavaScript, although I'm starting to favor development in React.js.  For development tools I use Atom as my text editor, and MAMP for windows to set up a local environment. For any command line operations I'm using Git bash shell.</p>
<p>For the start of most projects the first thing I do is try to visualize a data model.  Then I map out how that data should be represented on the page and how the user needs to interact with that data in the UI.
This process often means also breaking data down into UI components on the page. After my UI is build  I will continually refine it until I have the intended look and feel.</p>
<p>Testing and feedback have always benefited the direction and results of my projects.  My UI design decisions are informed by user centered design thinking, which incorporates  methods of user centered design found at DesignKit.org</p>
</div>
  </Col>
</Row>
</Container>
</div>
<ContactForm/>
  <Footer />
</div>



    );
    }

  }
}

export default App;
