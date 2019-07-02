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
        imgGrp: images,
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
        imgGrp: images,

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
    this.goToIndex = this.goToIndex.bind(this);
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

  goToIndex(newIndex) {
  this.setState({ subIndex: nextIndex });
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

        <ModalProject index = { this.state.index } subIndex = { this.state.subIndex } next = { this.next } previous = { this.previous } updateIndex = {this.updateIndex} mod = { this.state.modal } toggle = { this.toggle } data = {this.state.modalItem} />

</div>

    )
    }



}
