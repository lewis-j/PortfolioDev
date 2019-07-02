import React, {Component} from "react";
import { Container, Row, Col } from "reactstrap";
import Card from "./BS-Card.js";
import ModalProject from './modal.js';
import resources from './asset-list.js';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));



const portfolioData = [
    {
        title: "Brooklyn Arts Museum",
        imgSrc: resources[0],
        imgGrp: resources,
        discription: "Here's a short discription",
        siteUrl: "http://lindseyljackson.com/Sites/Brooklyn-Arts/root/collection.html",
    },
    {
        title: "Phaser 2 game",
        discription: "here is another discription",
        imgSrc: images[0],
        imgGrp: images,
    },
    {
        title: "Quiz App",
        discription: "A quiz app made with Jquery and Bootstrap",
        imgSrc: resources[0],
        imgGrp: resources,

    }

];

export default class Portfolio extends Component{

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalItem: {},
      index: 0
    };
    this.updateIndex = this.updateIndex.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleOn = this.toggleOn.bind(this);
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

  updateIndex( x ){
    switch(x){
      case "next": this.setState(prevState => ({index: (prevState.index === portfolioData.length - 1) ? 0 : prevState.index + 1 ,
                                               modalItem: portfolioData[(prevState.index === portfolioData.length - 1) ? 0 : prevState.index + 1 ] }));
            break;
      case "previous":
      console.log("previous ran");
      this.setState(prevState => ({
           index: (prevState.index === 0) ? portfolioData.length - 1 : prevState.index - 1,
           modalItem: portfolioData[(prevState.index === 0) ? portfolioData.length-1 : prevState.index - 1]
         }));
           return  portfolioData[(this.state.index === 0) ? portfolioData.length-1 : this.state.index - 1].imgGrp.length - 1;


  }

  }



    render() {

    return(
      <div>
    <Container  className="portfolio" >

        <Row>
        {
        portfolioData.map((item, index) => <Col key = {index} md="4" sm="6" ><Card item = {item} i = {index} toggleModal = { this.toggleOn } /> </Col>)
         }
        </Row>
        </Container>

        <ModalProject index = { this.state.index } updateIndex = {this.updateIndex} mod = { this.state.modal } toggle = { this.toggle } data = {this.state.modalItem} />

</div>

    )
    }



}
