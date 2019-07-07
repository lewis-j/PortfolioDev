import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import img from './img/appscrrenshot3.png'

class BSCard extends Component {

  constructor(props){
    super(props);
    this.state = { hovering: false };
    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);

  }

  hoverOn(){
      this.setState({ hovering: true });
  }

  hoverOff(){
      this.setState({ hovering: false });
  }

  render(){
  return (
    <div>
      <Card>

        <div className ="image-holder" onMouseEnter={ this.hoverOn }  onMouseLeave={ this.hoverOff } onClick= {()=>{ this.props.toggleModal(this.props.i)}} >
        <div className="img-title" >{ (this.state.hovering) ? "" : this.props.item.title}</div>
        <CardImg top width="100%" src= { this.props.item.imgSrc } />

                </div>
        
      </Card>
    </div>
  );
}
};

export default BSCard;
