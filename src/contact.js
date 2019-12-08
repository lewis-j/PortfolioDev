import * as emailjs from 'emailjs-com';
import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class ContactForm extends React.Component {

constructor(props)
{
  super(props);

this.formSubmit = this.formSubmit.bind(this);
this.state = {
    email:'',
    from_name: '',
    message: '',
    displayForm: true
  }
}
formSubmit(e){
  e.preventDefault();
  console.log(this.state);
  const data = {
    email: this.state.email,
    from_name: this.state.from_name,
    message: this.state.message
   };

     emailjs.send(
      'gmail2',
      'portfolio_email',
       data,
       'user_zgh74bhkxxkf3OgVgUq9q'
    );

   this.setState(prevState=>({
     displayForm: !prevState.displayForm
   }));




}


render() {
if(!this.state.displayForm){
var  message = <h1>Thank you for reaching out!</h1>
}else{
var  message = '';
}


return(
  <div>
<Form className={(this.state.displayForm)?"visable":"form-completed"} onSubmit={ this.formSubmit }>
<div className = "contact-title">
Contact Me
</div>
<FormGroup>
  <Label for="visitorEmail">Email:</Label>
  <Input
    type="email"
    name="email"
    id="visitorEmail"
    placeholder="Enter Your Email"
    onChange ={ e => this.setState({ email: e.target.value })}
    />
</FormGroup>
<FormGroup>
  <Label for="visitorName">Name:</Label>
  <Input
    type="text"
    name="name"
    id="visitorName"
    placeholder="Enter Your Full Name"
    onChange ={ e => this.setState({ from_name: e.target.value })}
    />
</FormGroup>
<FormGroup>
  <Label for="exampleText">Text Area</Label>
  <Input
    type="textarea"
    name="message"
    id="exampleText"
    onChange ={ e => this.setState({ message: e.target.value })}
    />
</FormGroup>
<Button >Submit</Button>
</Form>
{message}
</div>

);
}
}