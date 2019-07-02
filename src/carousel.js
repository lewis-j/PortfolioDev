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
    this.props.next();
  }

  previous() {
    if (this.animating) return;
this.props.previous();
  }

  goToIndex(newIndex) {
    if (this.animating) return;
  this.props.goToIndex(newIndex);
  }

  render() {
    const  activeIndex  = this.props.subIndex;
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
