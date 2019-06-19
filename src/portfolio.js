import React, {Component} from "react";
import { Container, Row, Col } from "reactstrap";
import Card from "./BS-Card.js";

export default class Portfolio extends Component{
    
    render() {

    return(
    <Container  className="portfolio" > 
        <Row>
        {
        this.props.data.map((item, index) => <Col key = {index} md="4" sm="6" ><Card title = {item.title} imgSrc = {item.imgSrc} /> </Col>)
         }
        </Row>
        </Container>
    
    
    )
    }
    
    
    
}
