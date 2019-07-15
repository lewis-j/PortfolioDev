import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Carousel from './carousel.js';

class ModalProject extends React.Component {


  render() {
    return (
      <div>
        <Modal isOpen={this.props.mod} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader toggle={this.props.toggle}>{ this.props.data.title }</ModalHeader>
          <ModalBody>
          <Carousel index = { this.props.index } subIndex = { this.props.subIndex } next = {this.props.next } previous = { this.props.previous } updateIndex = { this.props.updateIndex } items = { this.props.data }/>
            {this.props.data.discription}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>{  window.open( this.props.data.siteUrl ,'_blank');   }}> Visit {this.props.data.title} </Button>{' '}
            <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalProject;
