import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import img from './img/appscrrenshot3.png'

const BSCard = (props) => {
  return (
    <div>
      <Card>

        <div className ="image-holder" onClick= {()=>{ props.toggleModal(props.i)}} >
        <CardImg top width="100%" src= { props.item.imgSrc } />
                </div>
        <CardBody>
          <CardTitle>{ props.item.title }</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>{ props.item.discription }</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default BSCard;
