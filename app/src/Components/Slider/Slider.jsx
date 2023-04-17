import React, { useState } from 'react';
import img1 from '../../Images/1.jpg';
import img2 from '../../Images/2.jpg';
import img3 from '../../Images/3.jpg';
import './SliderStyle.css';


function Slider() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 1 : currentSlide + 1);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide(currentSlide === 1 ? 3 : currentSlide - 1);
  };

  return (
    <div>
      <div className="slider">
        <div className={`slide ${currentSlide === 1 ? "active" : ""}`}>
            <img className='slide-img' src={img1} alt="Image 1" />
        </div>
        <div className={`slide ${currentSlide === 2 ? "active" : ""}`}>
            <img className='slide-img' src={img2} alt="Image 2" />
        </div>
        <div className={`slide ${currentSlide === 3 ? "active" : ""}`}>
            <img className='slide-img' src={img3}  alt="Image 3" />
        </div>
        <button className='btn-slide btn-prev' onClick={handlePreviousSlide}>{'<'}</button>
        <button className='btn-slide btn-next' onClick={handleNextSlide}>{'>'}</button>
      </div>

    </div>
  );
}

export default Slider;