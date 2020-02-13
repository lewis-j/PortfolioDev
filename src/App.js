
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
const plxNav2 = [
  {
    start:50,
    duration: 100,
    properties: [
      {
        startValue: 'rgba(255,255,255,1)',
        endValue: '#000000',
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
    this.myImg = React.createRef();
    this.state= {
      isAbout : false,
      styleHeight: 800
    }

    this.aboutSection = this.aboutSection.bind(this);
  }
  componentDidMount(){
    console.log("component mounted");
   this.updateContainer();
  }
  componentDidUpdate(){
    this.updateContainer();
  }

  updateContainer(){
    if(!this.isAbout){
    setTimeout(()=>{
     console.log("height", this.myImg.offsetHeight);
      if(this.myImg.offsetHeight>360){
        this.setState({ styleHeight: this.myImg.offsetHeight })
      }else{
        this.setState({ styleHeight: 650})
      }





    },1);
  }
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
            <Plx
              parallaxData={ plxNav2 }
              >
            <h3 className="myName-title">Lindsey Jackson</h3>
            </Plx>
            <h5 className="myName-subtitle">Full Stack Developer</h5>
            <div className="about-btn"  onClick={ this.aboutSection } >About</div>
            </Plx>
          <Plx
          className='banner-img-plx'
          parallaxData={ parallaxData }
          animateWhenNotInViewport = {true}
        >
          <img  ref={ div => { this.myImg = div; }} className="banner-img" src={ resources.myPortrait }/>
        </Plx>
          <section className="b-container" style={{ height: this.state.styleHeight } }>
          <h1 className="splash-blerb">I am a full-stack web developer and programmer living in Sonoma County. I have four years of experience creating interactive web applications, custom Wordpress website designs, and 2d games. </h1>
          </section>
          </Row>
          </ Container>
         <Container className="portfolio-container" fluid={ true }>

        <div className='title-wrapper'> <h1 className="portfolio-title">Projects</h1></div>

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
<div className="portfolio-btn" onClick={ this.aboutSection } >My Portfolio</div>
         <div className="about-content p-width">
         <div className="about-title">About Me</div>
         <p>My name is Lindsey Jackson, and I'm a full-stack web developer.  I have two years of experience creating small business websites on the WordPress platform. I currently develop and manage a web application requested by the SRJC baseball team, where I leverage both front and back end technologies to create full UI layouts and backend architecture. I pursue web development as a means of satisfying a drive for creativity and artistic expression. I strive for result-driven, elegant design in my work, from the structure of my data models to front-end look and feel.</p>
         <p>
I am continually updating my knowledge to reflect the rapidly evolving nature of web technologies.  I'm passionate about coding and enjoy finding new and more effective ways to bring ideas to life. </p>
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
        <p className="web-tech-content">My portfolio of both front and back end web technologies is continually expanding. I currently design/am proficient in the following:  </p>
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
<p> The majority of my development experience I use Bootstrap, jQuery, JavaScript, as well as React.js.  For development tools, I use Atom as my text editor and WAMP/MAMP for windows to set up a local environment. For any command-line operations, I use Cmder or Git bash shell.</p>
<p>I begin my projects by visualizing a data model and mapping out processes. I use a combination of an ERD(Entity-relationship Diagrams) and UML(Unified Modeling Language).  Then I map out how that data needs to arrange on the page and how the user needs to interact with that data in the UI.
This process often means also breaking data down into UI components on the page. After I build my UI, I will continually refine the design until I have the intended look and feel. </p>
<p>Testing and feedback always benefited the direction and results of my projects.  User-centered design informs my UI design decisions.  </p>
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
