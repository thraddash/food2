import React, { Component } from 'react';
import "./carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class ImageCarousel extends Component {
    render() {
        return (
            <Carousel infiniteLoop useKeyboardArrows dynamicHeight={true} emulateTouch={true}>
                <div className="film__box">
                    <img src="images/steak.jpg" alt="" />
                    <p className=""></p>
                </div>
                <div>
                    <img src="images/food.jpg" alt="" />
                    
                </div>
                <div className="film__box">
                    <img src="images/eggplant.jpg" alt="" />
               
                </div>
            </Carousel>
        );
    }
};

export default ImageCarousel;