import React from 'react';
import ReactPlayer from "react-player";
import { Carousel } from 'react-responsive-carousel';
import "./carousel.min.css";
import { v1 as uuidv4 } from 'uuid';

const VideoCarousel = (props) => {
    return (
        <Carousel infiniteLoop showThumbs={false} useKeyboardArrows dynamicHeight={true} >
            {props.misc_video.split(', ').map((video, i) => (
                
                <div className='player-wrapper' key={uuidv4()}>
                    
                    <ReactPlayer
                        key={i}
                        config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                        // Disable right click
                        onContextMenu={e => e.preventDefault()}
                        url={'/videos/' + video}
                        playIcon={<button>Play</button>}
                        controls={true}
                        width='100%'
                    />
                </div>
            ))}
        </Carousel>

    );
};

export default VideoCarousel;