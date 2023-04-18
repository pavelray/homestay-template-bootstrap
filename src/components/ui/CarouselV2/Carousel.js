import React, { Fragment, useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { style } from "./ImageCarousel.style";

const Carousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
  hideControl = false,
}) => {
  const [current, setCurrent] = useState(0);
  const goToPrevSlide = () => {
    setCurrent((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };
  const goToNextSlide = useCallback(() => {
    setCurrent((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  }, [slides.length]);
  const goToSlide = (index) => {
    setCurrent(index);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const nextBtn = document.getElementById("carousel-slide");
    if (nextBtn === null) return;
    const slideInterval = setInterval(goToNextSlide, autoSlideInterval);
    nextBtn.addEventListener("mouseenter", () => {
      clearInterval(slideInterval);
    });
    nextBtn.addEventListener("mouseleave", () => {
      setInterval(goToNextSlide, autoSlideInterval);
    });
    // eslint-disable-next-line consistent-return
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, goToNextSlide]);

  return (
    <Fragment>
      <div className="slide-container">
        <div
          className={`slide`}
          style={{ transform: `translateX(-${current * 100}%)` }}
          id="carousel-slide"
        >
          {slides}
        </div>
        <div
          className={
            !hideControl
              ? `slide-control-wrapper`
              : `slide-control-wrapper slide-control-center`
          }
        >
          {!hideControl && (
            <button onClick={goToPrevSlide}>
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
          )}
          <div className="slide-content text-center">
            <h1 className="hero-title">Welcome to Aaltapori Homestay</h1>
          </div>
          {!hideControl && (
            <button onClick={goToNextSlide}>
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          )}
        </div>
        <div className="carousel-indicators">
          <div className="carousel-indicators--wrapper">
            {slides.map((_, index) => (
              <div
                key={`carousel_indicator_${uuidv4()}`}
                className={
                  current === index
                    ? "carousel-indicator carousel-indicator--active"
                    : "carousel-indicator"
                }
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{style}</style>
    </Fragment>
  );
};

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  autoSlide: PropTypes.bool,
  autoSlideInterval: PropTypes.number,
  hideControl: PropTypes.bool,
};

Carousel.defaultProps = {
  autoSlide: false,
  autoSlideInterval: 3000,
  hideControl: false,
};

export default Carousel;
