import React, {Component} from "react";
import { Container, Row, Col } from "reactstrap";
import Card from "./BS-Card.js";
import ModalProject from './modal.js';
import resources from './asset-list.js';

const libArray = ['bootstrap', 'jquery', 'pouchDB.js','PHP','mySQLi'];

const webAppData = [
    {
        title: "SRJC Pitch Tracker",
        discription: `I took on a request by the Santa Rosa Junior College to create an interactive web application to collect pitch app data. This app was a means to replace the baseball department's old way of collecting data using pen and paper and then transferring that data by hand to an excel sheet. There were three main deliverables that I was focused on when developing this web app. The first was to create the main UI for the data collection page. The second was to have this data represented in some meaningful way, which can be seen on the Cub's pitch data page. The third was to create a mini CMS that could handle pitcher roster changes.
        Although each of these deliverables presented unique challenges, there was one complication that was necessary to solve yet not explicitly requested. That complication was that we could not rely on networked connectivity during the data collection portion of the app due to the nature of the locations of the baseball games.
 The only viable solution was an offline-first approach. I chose pouchdb.js to handle offline local storage because it leverages the power of IndexDB but with a promised based syntax. For remote storage, I chose MySQL because of its strong querying capabilities. With this stack, I was able to create a temporary local storage solution. This was preferable because it meant that data would only persist locally until transferred.  This helped alleviate the security vulnerability of storing local data in the browser.`,
        imgSrc: resources.pitchApp[0],
        imgGrp: resources.pitchApp,
        logoSrc: resources.srjcLogo,
        logoName: "SRJCCUBS",
        lib:['Bootstrap', 'Jquery', 'PouchDB.js','D3.js','PHP','MySQLi', 'FontAwesome', 'GoogleFonts'],
        siteUrl:"https://www.lindseyljackson.com/Sites/PitchApp/"
    },
    {
        title: "Google Maps API",
        discription: `A webpage/web app that displays visitors statistics for National Parks.  The website uses the Gmap javascript API to render a map that shows your distance from each National Park. I'm also using D3.js to create the pie and bar charts that compare the top visitor's statistics.`,
        imgSrc: resources.googleMaps[0],
        imgGrp: resources.googleMaps,
        logoSrc: resources.srjcLogo,
        logoName: "SRJC",
        lib: ['Bootstrap','JQuery','Google Maps API','D3.js'],
        siteUrl: "https://www.lindseyljackson.com/Sites/gmapsApi/"

    },
    {
        title: "Javascript Quiz Plugin",
        discription: `Here is a Jquery supported plugin I created using the jquery, jquery UI, and bootstrap libraries.  The plugin itself is an interactive quiz application. It's featured using the jquery UI elements like draggable, droppable, progress bar, tool-tip, dialog, and tabs. This promotional website that displays an example of the makeQuiz() plugin uses the jquery supported plugins scrollmagic.js, which creates the layered parallax effect, and prism.js, which is a lightweight syntax highlighter.`,
        imgSrc: resources.quizPlugin[0],
        imgGrp: resources.quizPlugin,
        logoSrc: resources.srjcLogo,
        logoName: "SRJC",
        lib: ['Bootstrap', 'JQuery','jQueryUI', 'ScrollMagic.js', 'Prism.js'],
        siteUrl: "https://www.lindseyljackson.com/Sites/QuizApp/quiz_app_2.html"

    },
    {
          title: "Cyborg Ninja",
          discription: `The final project that I submitted for a game development course. It resembles a traditional 2d  platformed except that it incorporates simple flight controls based on velocity by rotation method within the phaser2.js library.
There were two Challenges I faced when developing this game.  The first was making the AI's projectiles track the player. The second was figuring out a way to lower the amount of collision detection by enemies as this is a costly operation.
To solve the first issue, I used the trigonometric inverse tangent function that takes in the coordinates of the enemy and the player to calculate the angle the enemy needed to shoot a projectile. As a consequence of this, I also needed to make the arm and weapon of the enemy move on a pivot as well as shoot the projectile off the end of the weapon. To do this, I used the same data returned from the inverse tangent function joined with the Phaser point class.
The second challenge I solved by implementing a quadtree. Only enemies within the same quadrant as the player would execute collision detection in the game loop.  The quadtree implementation significantly reduced the lag I was experiencing.  All in all, this was a very satisfying and fun experience. `,
          imgSrc: resources.cyborgNinja[0],
          imgGrp: resources.cyborgNinja,
          logoSrc: resources.srjcLogo,
          logoName: "SRJC",
          lib: ['Phaser2.js','grunt.js','bower.js'],
          siteUrl: "https://www.lindseyljackson.com/Sites/CyborgNinja/"

      },
      {
            title: "Falling Moons",
            discription: `A game I made using the phaser2.js library. The goal is to shoot guided projectiles at moons falling to the ground. The gameplay gets increasingly difficult as the rate of falling moon increases with time. Overall this game was a nice experiment in using interval and math.random functions to create compelling gameplay.`,
            imgSrc: resources.fallingMoons[0],
            imgGrp: resources.fallingMoons,
            logoSrc: resources.srjcLogo,
            logoName: "SRJC",
            lib: ['Phaser2.js'],
            siteUrl: "https://www.lindseyljackson.com/Sites/Falling%20Moons/"

        }

];

const websiteData = [
  {
      title: "Brooklyn Arts Museum",
      discription: `This is a fully responsive website I built using the bootstrap library. The focus of this website was the frontend design. The goal was to create a website that had a layout and color palette that would really showcase the stunning images from the Brooklyn Museum of Art.  I achieved this by using neutral/toned down colors in order to allow the images to pop. \n I separated text content into bootstrap panels and placed images into the bootstrap thumbnail CSS class to give a cleaner and more organized aesthetic.  All content is sourced from the open-source, non-profit Internet archive https://archive.org/`,
      imgSrc: resources.brooklynMuseum[0],
      imgGrp: resources.brooklynMuseum,
      logoSrc: resources.srjcLogo,
      logoName: "SRJC",
      lib: ['Bootstrap','JQuery'],
      siteUrl: "http://lindseyljackson.com/Sites/Brooklyn-Arts/root/collection.html",
  },
  {
      title: "Garden Grill BBQ",
      discription: `This was a client request for a complete redesign of an old existing website. They wanted a fully responsive site that also could process catering form and reservation requests. I used the WordPress CMS along with a restaurant template theme from Pearl. The child theme I created for this website consisted of a densely customized CSS file in order to adhere to the branding, logos, and overall style of the business. Clients were very pleased with the end result.`,
      imgSrc: resources.gardenGrill[0],
      imgGrp: resources.gardenGrill,
      lib: ['Wordpress','Pearl Wordpress Theme'],
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
      modal: !prevState.modal,
      subIndex: 0
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

        <div className="top-spacing">
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
