import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class ContactForm extends React.Component {

render() {
return(
<Form>
<FormGroup>
  <Label for="visitorEmail">Email:</Label>
  <Input type="email" name="email" id="visitorEmail" placeholder="Enter Your Email"></Input>
</FormGroup>
<FormGroup>
  <Label for="exampleText">Text Area</Label>
  <Input type="textarea" name="text" id="exampleText" />
</FormGroup>
<Button>Submit</Button>
</Form>
);
}
}
