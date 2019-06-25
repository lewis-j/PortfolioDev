import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import img from './img/appscrrenshot3.png'

const BSCard = (props) => {
  return (
    <div>
      <Card>
        <a href= {props.item.siteUrl} ><CardImg top width="100%" src= { props.item.imgSrc } /></a>
        <CardBody>
          <CardTitle>{ props.item.title }</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>{ props.item.discription }</CardText>
          <Button onClick= {()=>{ props.toggleModal(props.i)}} >Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default BSCard;
