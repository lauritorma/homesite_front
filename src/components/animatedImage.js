import React from 'react';
import '../styles/style.css';
import { useSpring, animated } from '@react-spring/web';

const AnimatedImage = ({ src, alt }) => {
    const styles = useSpring({
        loop: false,
        from: { opacity: '0' },
        to: { opacity: '1' },
        config: { duration: '2000' },
    });
    return (
        <animated.div
            style={{
                width: 225,
                height: 225,
                borderRadius: 112.5,
                padding: 25,
                ...styles,
            }}
        >
            <img
                src={src}
                alt={alt}
                className='animated-image'
            />
        </animated.div>
    );
}

export default AnimatedImage;
