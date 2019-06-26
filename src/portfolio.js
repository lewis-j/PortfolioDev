import React, {Component} from "react";
import { Container, Row, Col } from "reactstrap";
import Card from "./BS-Card.js";
import ModalProject from './modal.js';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));
console.log(images);

const portfolioData = [
    {
        title: "Brooklyn Arts Museum",
        imgSrc: images[0],
        discription: "Here's a short discription",
        siteUrl: "http://lindseyljackson.com/Sites/Brooklyn-Arts/root/collection.html",
    },
    {
        title: "Phaser 2 game",
        discription: "here is another discription",
        imgSrc: images [1]
    },
    {
        title: "Quiz App",
        discription: "A quiz app made with Jquery and Bootstrap",
        imgSrc: images[1]

    },  {
          title: "Brooklyn Arts Museum",
          imgSrc: images[0],
          discription: "Here's a short discription",
          siteUrl: "http://lindseyljackson.com/Sites/Brooklyn-Arts/root/collection.html",
      },
      {
          title: "Phaser 2 game",
          discription: "here is another discription",
          imgSrc: images [1]
      },
      {
          title: "Quiz App",
          discription: "A quiz app made with Jquery and Bootstrap",
          imgSrc: images[1]

      },  {
            title: "Brooklyn Arts Museum",
            imgSrc: images[0],
            discription: "Here's a short discription",
            siteUrl: "http://lindseyljackson.com/Sites/Brooklyn-Arts/root/collection.html",
        },
        {
            title: "Phaser 2 game",
            discription: "here is another discription",
            imgSrc: images [1]
        },
        {
            title: "Quiz App",
            discription: "A quiz app made with Jquery and Bootstrap",
            imgSrc: images[1]

        },  {
              title: "Brooklyn Arts Museum",
              imgSrc: images[0],
              discription: "Here's a short discription",
              siteUrl: "http://lindseyljackson.com/Sites/Brooklyn-Arts/root/collection.html",
          },
          {
              title: "Phaser 2 game",
              discription: "here is another discription",
              imgSrc: images [1]
          },
          {
              title: "Quiz App",
              discription: "A quiz app made with Jquery and Bootstrap",
              imgSrc: images[1]

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
console.log(index);
    this.setState(prevState => ({
      modal: !prevState.modal,
      modalItem: portfolioData[index],
      index: index
    }));
  }

  updateIndex(index){
this.setState( {index: index,
                modalItem: portfolioData[index] });
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
        <ModalProject index = { this.state.index } updateIndex = {this.updateIndex} mod = { this.state.modal } toggle = { this.toggle } data = {this.state.modalItem}/>
</div>

    )
    }



}
