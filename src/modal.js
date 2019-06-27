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
          <Carousel index = { this.props.index } updateIndex = { this.props.updateIndex } items = { this.props.data }/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalProject;
