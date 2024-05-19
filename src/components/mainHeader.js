import React from 'react';
import '../styles/style.css';
import selfie from '../assets/selfie.jpg';
import AnimatedImage from './animatedImage';
import { Slide } from 'react-awesome-reveal';


const MainHeader = () => {

    return (
        <div className='header-container'>

            <h1 className='main-header'>Lauri Törmä</h1>
            <AnimatedImage src={selfie} alt='Description of the image'></AnimatedImage>

            <Slide
                direction='up'
                triggerOnce>
                <p className='intro-text'>
                    Moikka! Meitsi on 23-vuotias urani alussa oleva IT-tradenomi Helsingistä 🤓
                    <br /><br />
                    Tällä hetkellä työskentelen ohjelmistorobotiikan parissa ja viimeistelen opintojani Haaga-Helia Ammattikorkeakoulussa.
                    <br /><br />
                    Tervetuloa kotisivuilleni. Alta löytyy linkit, joiden kautta muhun voi ottaa yhteyttä! 🤝

                </p>
            </Slide>
        </div>

    );
}

export default MainHeader;
