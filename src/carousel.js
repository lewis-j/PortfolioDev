import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {activeIndex : 0 }
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const isLast = (this.state.activeIndex === this.props.items.imgGrp.length - 1 );
    const nextIndex = (isLast) ? 0 : this.state.activeIndex + 1;
  this.setState({ activeIndex: nextIndex },()=>{
    if(isLast) {
     this.props.updateIndex("next");
    }

  } );





  }

  previous() {
    if (this.animating) return;
    const isFirst = (this.state.activeIndex === 0 );
    const nextIndex = (isFirst) ? this.props.items.length - 1 : this.state.activeIndex - 1;
    if(isFirst){
     const subI = this.props.updateIndex( "previous" );

     this.setState({ activeIndex: subI });
    }else{
      this.setState({ activeIndex: nextIndex });
  }

  }

  goToIndex(newIndex) {
    if (this.animating) return;
  this.setState({ activeIndex: nextIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const slides = this.props.items.imgGrp.map((item, index) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={"carousel"+index}
        >
          <img src={item} alt={this.props.items.title} className = "carousel-img"/>
          <CarouselCaption captionText={this.props.items.title} captionHeader={this.props.items.title} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={this.props.items.imgGrp} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default MyCarousel;
