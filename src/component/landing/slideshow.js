import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import '../../external/css/slidershow.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
import sliderArr from '../helper/sliderimg.js';
import {Animated} from "react-animated-css"; 

export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
        className="landing-slider"
        visibleSlides={1}
        totalSlides={19}
        naturalSlideWidth={400}
        naturalSlideHeight={180}
        infinite={true}
        isPlaying={true}
        interval={4000}
      >
        <Animated animatedIn="fadeIn" animatedOut="fadeOut">
          <Slider classNameAnimation="fadeIn">
              <Slide className="slide-animate" classNameHidden="slide-out" classNameVisible="slide-in" index={0}><img src={sliderArr[0]} alt="First"/></Slide>
              <Slide className="slide-animate" classNameHidden="slide-out" classNameVisible="slide-in" index={1}><img src={sliderArr[1]} alt="Second"/></Slide>
              <Slide className="slide-animate" classNameHidden="slide-out" classNameVisible="slide-in" index={2}><img src={sliderArr[2]} alt="Third"/></Slide> 
              <Slide className="slide-animate" classNameHidden="slide-out" classNameVisible="slide-in" index={3}><img src={sliderArr[3]} alt="Fourth"/></Slide>
              <Slide className="slide-animate" classNameHidden="slide-out" classNameVisible="slide-in" index={4}><img src={sliderArr[4]} alt="Fifth"/></Slide>
              <Slide className="slide-animate" classNameHidden="slide-out" classNameVisible="slide-in" index={5}><img src={sliderArr[5]} alt="Sixth"/></Slide>
              <Slide className="slide-animate" classNameHidden="slide-out" classNameVisible="slide-in" index={6}><img src={sliderArr[6]} alt="Seventh"/></Slide>
              <Slide className="slide-animate" classNameHidden="slide-out" classNameVisible="slide-in" index={7}><img src={sliderArr[7]} alt="Eighth"/></Slide>
              <Slide className="slide-animate" classNameHidden="slide-out" classNameVisible="slide-in" index={8}><img src={sliderArr[8]} alt="Ninth"/></Slide>
              <Slide className="slide-animate" classNameHidden="slide-out" classNameVisible="slide-in"index={9}><img src={sliderArr[9]} alt="Tenth"/></Slide>
              <Slide className="slide-animate" classNameHidden="slide-out" classNameVisible="slide-in"index={10}><img src={sliderArr[10]} alt="Eleven"/></Slide>
              <Slide className="slide-animate" classNameHidden="slide-out" classNameVisible="slide-in" index={11}><img src={sliderArr[11]} alt="Twelve"/></Slide>
              <Slide className="slide-animate" classNameHidden="slide-out" classNameVisible="slide-in" index={12}><img src={sliderArr[12]} alt="Thirteen"/></Slide>
              <Slide className="slide-animate" classNameHidden="slide-out" classNameVisible="slide-in" index={13}><img src={sliderArr[13]} alt="Fourteen"/></Slide>
              <Slide className="slide-animate" classNameHidden="slide-out" classNameVisible="slide-in" index={14}><img src={sliderArr[14]} alt="Fifteen"/></Slide>
              <Slide className="slide-animate" classNameHidden="slide-out" classNameVisible="slide-in" index={15}><img src={sliderArr[15]} alt="Sixteen"/></Slide>
              <Slide className="slide-animate" classNameHidden="slide-out" classNameVisible="slide-in" index={16}><img src={sliderArr[16]} alt="Seventeen"/></Slide>
              <Slide className="slide-animate" classNameHidden="slide-out" classNameVisible="slide-in" index={17}><img src={sliderArr[17]} alt="Eighteen"/></Slide>
              <Slide className="slide-animate" classNameHidden="slide-out" classNameVisible="slide-in" index={18}><img src={sliderArr[18]} alt="Nineteen"/></Slide>
          </Slider>
          </Animated>
      </CarouselProvider>
    );
  }
}
