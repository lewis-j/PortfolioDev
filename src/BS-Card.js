import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import img from './img/appscrrenshot3.png'

const BSCard = (props) => {
  return (
    <div>
      <Card>
        <a href= {props.siteUrl} ><CardImg top width="100%" src= { props.imgSrc } /></a>
        <CardBody>
          <CardTitle>{ props.title }</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>{ props.discription }</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default BSCard;
