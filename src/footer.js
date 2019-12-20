import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab);
library.add(fas);

const iconGrp = ['instagram','linkedin'];

class Footer extends Component{


  goToLink(url){
    window.open(url,'_blank');
  }
  goToEmail(url){
    window.location.href = url;
  }

render(){
  return(
  <div className="footer">
  <section className="icon-grp">
    <FontAwesomeIcon className="social-icon" onClick={ ()=> {this.goToLink('https://www.linkedin.com/in/lindseyljackson') }} icon={['fab', 'linkedin']}  size="4x"/>
    <FontAwesomeIcon className="social-icon" onClick={ ()=> { this.goToEmail('mailto:linlewjack@gmail.com?subject=Subject&body=message%20goes%20here";') }} icon={['fas', 'envelope']} size="4x" />
      <FontAwesomeIcon className="social-icon" onClick={ ()=> {this.goToLink('https://github.com/lewis-j/') }} icon={['fab', 'github']} size="4x" />
    </section>
<div className="site-footer-info"> © Copywrite lindseyljackson.com 2019 <a target="_blank" href="/icons/set/bootstrap">Bootstrap icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></div>

  </div>


  );

}
}

export default Footer;
