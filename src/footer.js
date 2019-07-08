import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const iconGrp = ['instagram','linkedin'];

class Footer extends Component{


  goToLink(url){
    window.open(url,'_blank');
  }

render(){
  return(
  <div className="footer">
  <p className="follow-txt">Follow Me on Social Media</p>
  <section className="icon-grp">
    <FontAwesomeIcon className="social-icon" onClick={ ()=> {this.goToLink('https://www.linkedin.com/in/lindseyljackson') }} icon={['fab', 'linkedin']}  size="6x"/>
    <FontAwesomeIcon className="social-icon" onClick={ ()=> {this.goToLink('https://www.instagram.com/lindseyjackson88/?hl=en') }} icon={['fab', 'instagram']} size="6x" />
    </section>


  </div>


  );

}
}

export default Footer;
