import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)


class Footer extends Component{
constructor(props){
  super(props);
  

}
render(){
  return(
  <div className="footer">
  <p className="follow-txt">Follow Me on Social Media</p>
  <section className="icon-grp">
    <FontAwesomeIcon icon={['fab', 'linkedin']}  size="6x"/>
    <FontAwesomeIcon onClick={()=>{window.open('https://www.instagram.com/lindseyjackson88/?hl=en','_blank');}} icon={['fab', 'instagram']} size="6x" />
    </section>
  </div>


  );

}



};

export default Footer;
