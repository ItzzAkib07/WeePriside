import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import "@splidejs/splide/dist/css/splide.min.css";
import honda from '../images/honda.png';
import hero from '../images/hero.png';
import yamaha from '../images/yamaha.png';
import ktm from '../images/ktm.png';
import suzuki from '../images/suzuki.png';
import bajaj from '../images/bajaj.png';
import RE from '../images/RE.png';
import jawa from '../images/jawa.png';
import tvs from '../images/tvs.png';

const Slideshow = () => {
    return (
        <>
            <Splide options={{
                type: 'loop',
                rewind: true,
                autoplay: true,
                perMove: 1,
                // perPage: 1,
                gap: '2rem',
                arrows: false,
                pagination: false,
                autoScroll: {
                    pauseOnHover: true,
                    pauseOnFocus: false,
                    speed: 2
                },
            }}
                extensions={{ AutoScroll }}>
                <SplideSlide>
                    <div className='brands-container'>

                        <div className='brands'>

                            <div className='brand'>
                                <img src={honda} alt="Our Partners"></img>
                            </div>

                            <div className='brand'>
                                <img src={yamaha} alt="Our Partners"></img>
                            </div>

                            <div className='brand'>
                                <img src={RE} alt="Our Partners"></img>
                            </div>

                            <div className='brand'>
                                <img src={jawa} alt="Our Partners"></img>
                            </div>

                            <div className='brand'>
                                <img src={suzuki} alt="Our Partners"></img>
                            </div>

                            <div className='brand'>
                                <img src={ktm} alt="Our Partners"></img>
                            </div>

                            <div className='brand'>
                                <img src={hero} alt="Our Partners"></img>
                            </div>

                            <div className='brand'>
                                <img src={tvs} alt="Our Partners"></img>
                            </div>

                            <div className='brand'>
                                <img src={bajaj} alt="Our Partners"></img>
                            </div>

                        </div>
                    </div>
                </SplideSlide>
            </Splide>

        </>
    )
}

export default Slideshow