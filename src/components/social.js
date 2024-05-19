import React from 'react';
import { motion } from "framer-motion";
import '../styles/style.css';
import { SocialIcon } from 'react-social-icons'
import { Slide } from 'react-awesome-reveal';


const Social = () => {

    const handleRedirect = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };


    return (
        <div className='social-container'>


            <Slide
                direction='up'
                triggerOnce>
                <div className='icons-container'>
                    <div className='social-icon'>
                        <motion.div
                            className='text-icon-flex'
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            onClick={() => handleRedirect("https://www.linkedin.com/in/lauri-torma/")}>
                            <SocialIcon className='social-icon' network='linkedin' />
                            <p className='link-text'>
                                Linkedin
                            </p>
                        </motion.div>
                    </div>
                </div>
            </Slide>

            <Slide
                direction='up'
                triggerOnce>
                <div className='icons-container'>
                    <div className='social-icon'>
                        <motion.div
                            className='text-icon-flex'
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            onClick={() => handleRedirect("https://github.com/lauritorma")}>
                            <SocialIcon className='social-icon' network='github' />
                            <p className='link-text'>
                                GitHub
                            </p>
                        </motion.div>
                    </div>
                </div>
            </Slide>

            <Slide
                direction='up'
                triggerOnce>
                <div className='icons-container'>
                    <div className='social-icon'>
                        <motion.div
                            className='text-icon-flex'
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            onClick={() => handleRedirect("mailto:tormalauri9@gmail.com")}>
                            <SocialIcon className='social-icon' network='email' />
                            <p className='link-text'>
                                Email
                            </p>
                        </motion.div>
                    </div>
                </div>
            </Slide>

        </div>

    );
}

export default Social;
