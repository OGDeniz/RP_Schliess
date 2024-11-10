import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'; // Import the Image component from Next.js
import '../styles/Home.module.css'; // Import the CSS file for styling

const Slider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        const lastIndex = images.length - 1;
        const shouldResetIndex = currentIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    };

    const prevSlide = () => {
        const lastIndex = images.length - 1;
        const shouldResetIndex = currentIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentIndex - 1;
        setCurrentIndex(index);
    };

    return (
        <div className="slider bg-dark d-flex justify-content-between align-items-center shadow">
        <button onClick={prevSlide} className="slider-button prev">Previous</button>
            <div className="slider-image-container">
                <Image src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slider-image" />
            </div>
            <button onClick={nextSlide} className="slider-button next">Next</button>
        </div>
    );
};
// Definieren Sie die PropTypes für den Slider-Komponenten, wie z.B. die images-Prop, die ein Array von Bildern erwartet.s
Slider.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
