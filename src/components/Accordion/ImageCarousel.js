import React from 'react';
import "./carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { v1 as uuidv4 } from 'uuid';

const ImageCarousel = (props) => {
    let { misc_image } = props;

    return (
        <Carousel infiniteLoop showThumbs={false} useKeyboardArrows dynamicHeight={true} emulateTouch={true}>

            {misc_image.split(', ').map((image, i) => (
                <div className="film__box" key={uuidv4()}>
                    <div>
                        <img src={'/images/' + image} alt="" />
                    </div>
                </div>
            ))
            }
        </Carousel>
    )
};

export default ImageCarousel;