/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { style } from "./ImageCarousel.style";
import Carousel from "./Carousel";

const ImageCarousel = ({ carouselSlides }) => {
  const slides = carouselSlides;
  return (
    <Fragment>
      <div className="carousel-container">
        <Carousel autoSlide autoSlideInterval={8000} hideControl>
          {slides.map((slide) => (
            <div
              key={`carousel_slide_${uuidv4()}`}
              className="slide-image img-fluid"
            >
              <video autoPlay loop muted className="video">
                <source src={slide.url} type="video/mp4" />
              </video>
            </div>
          ))}
        </Carousel>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};

ImageCarousel.propTypes = {
  carouselSlides: PropTypes.array.isRequired,
};

export { ImageCarousel };
