import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'; // Import the Image component from Next.js
import '../styles/Home.module.css'; // Import the CSS file for styling
import { Carousel } from 'react-bootstrap';

const Slider = ({ images }) => {
    return (
        <Carousel className="slider bg-dark shadow">
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <Image src={image} alt={`Slide ${index}`} className="d-block w-100 rounded-3 slider-image " width={1080} height={640} />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

// Define PropTypes for the Slider component
Slider.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
