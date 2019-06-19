import React, { Component } from 'react';
import Plx from 'react-plx';
import img from './img/appscrrenshot3.png';

const parallaxData = [
  {
    start: 0,
    end: 100,
    properties: [
        {
        startValue: 1,
        endValue: 0,
        property: "opacity"
      },
    ],
  },
];

const parallaxData2 = [
  {
    start: 110,
    end: 200,
    properties: [
        {
        startValue: 1,
        endValue: 0,
        property: "opacity"
      },
    ],
  },
];

class Example extends Component {
  render() {
    return (
        <div>
      <Plx
        className='MyAwesomeParallax'
        parallaxData= { parallaxData}
      >
      <img src={ img }/>
        
      </Plx>
              <Plx
        className='awesomeness'
        parallaxData= { parallaxData2}
      >
      Here is some tent
        
      </Plx>
     
         <div
        className='MyAwesomeParallax2'
      
      >
       here is some more content
        
      </div>
        </div>
 
    );
  }
}

export default Example;