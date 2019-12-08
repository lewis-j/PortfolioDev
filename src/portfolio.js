import React, {Component} from "react";
import { Container, Row, Col } from "reactstrap";
import Card from "./BS-Card.js";
import ModalProject from './modal.js';
import resources from './asset-list.js';


const webAppData = [
    {
        title: "SRJC Pitch Tracker",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        imgSrc: resources.pitchApp[0],
        imgGrp: resources.pitchApp,
        siteUrl:"https://www.lindseyljackson.com/Sites/pitchApp/"
    },
    {
        title: "Google Maps API",
        discription: "A webpage/webapp that displays visitors statistics for National Parks. The website uses the gmap javascript API to render a map that show your distance from each National Park. I'm also using D3.js to create the pie and bar charts that compare top visitors statistics. ",
        imgSrc: resources.googleMaps[0],
        imgGrp: resources.googleMaps,
        siteUrl: "https://www.lindseyljackson.com/Sites/gmapsApi/"

    },
    {
        title: "Javascript Quiz Plugin",
        discription: "Here is a Jquery supported plugin I created using the jquery, jquery UI, and bootstrap libraries. The plugin itself is a interactive quiz application. It's featured using the jquery UI elements like draggable, droppable, progress bar, tool-tip, dialog, and tabs. This promotional website that displays an example of the makeQuiz() plugin uses the jquery supported plugins scrollmagic.js, which creates the layered parallax effect, and prism.js, which is a lightweight syntax highlighter.",
        imgSrc: resources.quizPlugin[0],
        imgGrp: resources.quizPlugin,
        siteUrl: "https://www.lindseyljackson.com/Sites/QuizApp/quiz_app_2.html"

    },
    {
          title: "Cyborg Ninja",
          discription: "This is the final project that I submitted for a game development course. It resembles a traditional 2d  platformed except that it incorporates simple flight controls based on a velocity by rotation method within the phaser2.js library.%0A There were two challenges I faced when developing this game.  The first was making the A.I.'s projectiles track the main player. The second was figuring out a way to lower the amount of collision detection by enemies as this is a very expensive operation. In order to solve the first issue I used the trigonometric inverse tangent function that takes in the coordinates of the enemy and of the player to calculate the angle the enemy needed to shoot a projectile.  This also meant that I needed to make the arm of the enemy move on a pivot in order to make the animation more fluid. This was done using the same data returned from the inverse tangent function. The second challenge I solved by implementing a quad tree. Only enemies within the same quadrant as the player would execute collision detection in the game loop.  This significantly reduced  lag I was experiencing .  All in all this was a very satisfying and fun experience. ",
          imgSrc: resources.cyborgNinja[0],
          imgGrp: resources.cyborgNinja,
          siteUrl: "https://www.lindseyljackson.com/Sites/CyborgNinja/"

      },
      {
            title: "Falling Moons",
            discription: "A game made using the phaser2.js library. The goal is to shoot guided projectiles at moons falling to the ground. The game play gets increasingly difficult as the rate of falling moon increases with time. Overall this game was a nice experiment in using interval functions and math.random functions to create compelling game play. ",
            imgSrc: resources.fallingMoons[0],
            imgGrp: resources.fallingMoons,
            siteUrl: "https://www.lindseyljackson.com/Sites/Falling%20Moons/"

        }

];

const websiteData = [
  {
      title: "Brooklyn Arts Museum",
      discription: "This is a fully responsive website I built using the bootstrap library. The focus for this website was the frontend design. The goal was to create a website that has a layout, and color pallete that would really showcase the stunning images from the Brooklyn Museum of Art.  I was hoping to achieve this by using neutral/toned down colors in order to allow the colors of the images to pop. I separated text content into bootstrap panels, and places images into the bootstrap thumbnail css class to give a cleaner and more organized aesthetic .  All content is sourced from the open source non-profit Internet archive https://archive.org/",
      imgSrc: resources.brooklynMuseum[0],
      imgGrp: resources.brooklynMuseum,
      siteUrl: "http://lindseyljackson.com/Sites/Brooklyn-Arts/root/collection.html",
  },
  {
      title: "Garden Grill BBQ",
      discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      imgSrc: resources.gardenGrill[0],
      imgGrp: resources.gardenGrill,
      siteUrl: "https://gardengrillbbq.com/",
  }
];

const portfolioData = [...webAppData, ...websiteData];

export default class Portfolio extends Component{

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalItem: {},
      index: 0,
      subIndex: 0,
      toggleText: false
    };
    this.toggle = this.toggle.bind(this);
    this.toggleOn = this.toggleOn.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggle() {

    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  toggleOn(index) {

    this.setState(prevState => ({
      modal: !prevState.modal,
      modalItem: portfolioData[index],
      index: index
    }));
  }

  toggleShow(){
    this.setState(prevState=> ({ toggleText: !prevState.toggleText }));
    console.log("toggleshow", this.state.toggleText);
  }

  next(){

    const isLast = (this.state.subIndex === this.state.modalItem.imgGrp.length - 1 );
    const nextIndex = (isLast) ? 0 : this.state.subIndex + 1;
  this.setState({ subIndex: nextIndex },()=>{
    if(isLast) {
      this.setState(prevState => ({ index: (prevState.index === portfolioData.length - 1) ? 0 : prevState.index + 1,
                                    modalItem: portfolioData[(prevState.index === portfolioData.length - 1) ? 0 : prevState.index + 1],
                                    toggleText: false
                                    }));
    }

  } );


  }

  previous(){
    const isFirst = (this.state.subIndex === 0 );
    if(isFirst){
      this.setState(prevState => ({ index: ( prevState.index === 0) ? portfolioData.length -1 : prevState.index - 1,
                                    modalItem: portfolioData[( prevState.index === 0) ? portfolioData.length -1 : prevState.index - 1],
                                    toggleText: false,
                                  }), ()=>{
                                    this.setState({subIndex:  this.state.modalItem.imgGrp.length -1 })
                                  });
    }else{
      this.setState(prevState => ({ subIndex: prevState.subIndex -1 }));
  }



  }

  updateIndex(newIndex) {
  this.setState({ subIndex: newIndex });
  }



    render() {

    return(

        <div>
        <Row><h1 className="port-section-header">WebApps</h1></Row>
        <Row className="portfolio">
        {
        webAppData.map((item, index) => <Col key = {index} md="4" sm="6" ><Card item = {item} i = {index} toggleModal = { this.toggleOn } /> </Col>)
         }

           <ModalProject index = { this.state.index } subIndex = { this.state.subIndex } next = { this.next } previous = { this.previous } updateIndex = {this.updateIndex} mod = { this.state.modal } toggle = { this.toggle } toggleText= { this.state.toggleText } data = {this.state.modalItem} toggleShow = {this.toggleShow}/>
        </Row>
        <Row><h1 className="port-section-header">Websites</h1></Row>
        <Row className="portfolio">
        {
        websiteData.map((item, index) => <Col key = {webAppData.length + index} md="4" sm="6" ><Card item = {item} i = {webAppData.length + index} toggleModal = { this.toggleOn } /> </Col>)
         }

        </Row>
   </div>

    )
    }



}
