import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Badge } from 'reactstrap';
import Carousel from './carousel.js';

class ModalProject extends React.Component {


  render() {
    {if(this.props.data.lib){
      this.listItems = this.props.data.lib.map((item, index)=> <Badge key= {index} color='dark'>{item}</Badge> )}
    if(this.props.data.discription){
      this.formattedText = this.props.data.discription.split("\n").map((item,index)=>{
        console.log("text item: ", item);
        return <p key={index}>{item}</p>

      });
    }
    }

    return (
      <div>

        <Modal isOpen={this.props.mod} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader toggle={this.props.toggle}><div style={{display: 'inline-block'}}>{ this.props.data.title }</div><div className='brand'><img className="logo" src = { this.props.data.logoSrc }/>
          <div className="brand-name">{this.props.data.logoName}</div></div></ModalHeader>
          <ModalBody>
          <Carousel index = { this.props.index } subIndex = { this.props.subIndex } next = {this.props.next } previous = { this.props.previous } updateIndex = { this.props.updateIndex } items = { this.props.data } pause={ this.props.toggleText }/>
            <div>{this.listItems}</div>
            <div style= {(this.props.toggleText)? {overflow: 'auto', height: 'auto'  }:{ overflow: 'hidden' , height: '100px'}}>{this.formattedText}</div>
            <div style={ {textAlign: 'center'}}><div className="show-more" onClick={ this.props.toggleShow}>{(this.props.toggleText)? "": "show more"  }</div></div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>{  window.open( this.props.data.siteUrl ,'_blank');   }}> Visit {this.props.data.title} </Button>{' '}
            <Button color="secondary" onClick={this.props.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalProject;
