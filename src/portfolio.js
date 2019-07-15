import React, {Component} from "react";
import { Container, Row, Col } from "reactstrap";
import Card from "./BS-Card.js";
import ModalProject from './modal.js';
import resources from './asset-list.js';


const portfolioData = [
    {
        title: "Brooklyn Arts Museum",
        imgSrc: resources.brooklynMuseum[0],
        imgGrp: resources.brooklynMuseum,
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        siteUrl: "http://lindseyljackson.com/Sites/Brooklyn-Arts/root/collection.html",
    },
    {
        title: "SRJC Pitch Tracker",
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        imgSrc: resources.pitchApp[0],
        imgGrp: resources.pitchApp,
        siteUrl:"https://www.lindseyljackson.com/Sites/pitchApp/"
    },
    {
        title: "Google Maps API",
        discription: "A webpage that displays visitors statistics for National Parks. The website uses the gmap javascript API to render a map that show your distance from each National Park. I'm also using D3.js to create the pie and bar charts that compare top visitors statistics. ",
        imgSrc: resources.googleMaps[0],
        imgGrp: resources.googleMaps,
        siteUrl: "https://www.lindseyljackson.com/Sites/gmapsApi/"

    },
    {
        title: "Javascript Quiz Plugin",
        discription: "A webpage that displays visitors statistics for National Parks. The website uses the gmap javascript API to render a map that show your distance from each National Park. I'm also using D3.js to create the pie and bar charts that compare top visitors statistics. ",
        imgSrc: resources.quizPlugin[0],
        imgGrp: resources.quizPlugin,
        siteUrl: "https://www.lindseyljackson.com/Sites/QuizApp/quiz_app_2.html"

    },
    {
          title: "Cyborg Ninja",
          discription: "A webpage that displays visitors statistics for National Parks. The website uses the gmap javascript API to render a map that show your distance from each National Park. I'm also using D3.js to create the pie and bar charts that compare top visitors statistics. ",
          imgSrc: resources.cyborgNinja[0],
          imgGrp: resources.cyborgNinja,
          siteUrl: "https://www.lindseyljackson.com/Sites/CyborgNinja/"

      },
      {
            title: "Falling Moons",
            discription: "A webpage that displays visitors statistics for National Parks. The website uses the gmap javascript API to render a map that show your distance from each National Park. I'm also using D3.js to create the pie and bar charts that compare top visitors statistics. ",
            imgSrc: resources.fallingMoons[0],
            imgGrp: resources.fallingMoons,
            siteUrl: "https://www.lindseyljackson.com/Sites/Falling%20Moons/"

        }

];

export default class Portfolio extends Component{

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalItem: {},
      index: 0,
      subIndex: 0
    };
    this.toggle = this.toggle.bind(this);
    this.toggleOn = this.toggleOn.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
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

  next(){

    const isLast = (this.state.subIndex === this.state.modalItem.imgGrp.length - 1 );
    const nextIndex = (isLast) ? 0 : this.state.subIndex + 1;
  this.setState({ subIndex: nextIndex },()=>{
    if(isLast) {
      this.setState(prevState => ({ index: (prevState.index === portfolioData.length - 1) ? 0 : prevState.index + 1,
                                    modalItem: portfolioData[(prevState.index === portfolioData.length - 1) ? 0 : prevState.index + 1]
                                    }));
    }

  } );


  }

  previous(){
    const isFirst = (this.state.subIndex === 0 );
    if(isFirst){
      this.setState(prevState => ({ index: ( prevState.index === 0) ? portfolioData.length -1 : prevState.index - 1,
                                    modalItem: portfolioData[( prevState.index === 0) ? portfolioData.length -1 : prevState.index - 1],
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


        <Row className="portfolio">
        {
        portfolioData.map((item, index) => <Col key = {index} md="4" sm="6" ><Card item = {item} i = {index} toggleModal = { this.toggleOn } /> </Col>)
         }

           <ModalProject index = { this.state.index } subIndex = { this.state.subIndex } next = { this.next } previous = { this.previous } updateIndex = {this.updateIndex} mod = { this.state.modal } toggle = { this.toggle } data = {this.state.modalItem} />
        </Row>


    )
    }



}
