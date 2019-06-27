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
    const nextIndex = this.props.index === this.props.items.length - 1 ? 0 : this.props.index + 1;
  this.props.updateIndex( nextIndex );
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.props.index === 0 ? this.props.items.length - 1 : this.props.index - 1;
  this.props.updateIndex( nextIndex );
  }

  goToIndex(newIndex) {
    if (this.animating) return;
  this.props.updateIndex( nextIndex );
  }

  render() {
    const  activeIndex  = this.props.index;

    const slides = this.props.items.map((item, index) => {
      console.log("carousel"+index);
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={"carousel"+index}
        >
          <img src={item.imgSrc} alt={item.title} className = "carousel-img"/>
          <CarouselCaption captionText={item.title} captionHeader={item.title} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={this.props.items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default MyCarousel;
