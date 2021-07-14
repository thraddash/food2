import React, { Component } from 'react';
import ReactPlayer from "react-player";
import { Carousel } from 'react-responsive-carousel';
import "./carousel.min.css";

class VideoCarousel extends Component {
    render() {
        return (
            <Carousel infiniteLoop showThumbs={false} useKeyboardArrows dynamicHeight={true} >

                <div className='player-wrapper'>
                    <ReactPlayer
                        config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                        // Disable right click
                        onContextMenu={e => e.preventDefault()}
                        url='/videos/bc.mp4'
                        playIcon={<button>Play</button>}
                        controls={true}
                        width='100%'
                    />
                </div>
                <div className='player-wrapper'>
                    <ReactPlayer 
                        config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                        // Disable right click
                        onContextMenu={e => e.preventDefault()}
                        url='/videos/fw.mp4'
                        playIcon={<button>Play</button>}
                        controls={true}
                        width='100%'
                    />
                    
                </div>
                <div className='player-wrapper'>
                    <ReactPlayer
                        config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                        // Disable right click
                        onContextMenu={e => e.preventDefault()}
                        url='/videos/jones.mp4'
                        playIcon={<button>Play</button>}
                        controls={true}
                        width='100%'
                    />
                    
                </div>
            </Carousel>

        );
    }
};

export default VideoCarousel;