/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React, { useState } from "react";
import Slider from "react-slick";
import Slide from "../Slide/Slide";
import styles from "./Carousel.module.scss";

export default function ControlledCarousel() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, right: "0px", fontSize: '40px' }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, left: "0px", zIndex: "1", fontSize: '40px' }}
        onClick={onClick}
      />
    );
  }

  const slides = [
    {
      title: "Welcome to Aaltapori Homestay",
      description: "Lorem ipsum dolor sit amet",
      backgroundImageSrc:
        "https://images.unsplash.com/photo-1618756501529-a591ffb93392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Welcome to Aaltapori Homestay",
      description: "Lorem ipsum dolor sit amet",
      backgroundImageSrc:
        "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGRvb2FycyUyMG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Welcome to Aaltapori Homestay",
      description: "Lorem ipsum dolor sit amet",
      backgroundImageSrc:
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGRvb2FycyUyMG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className={styles['slick-next']} />,
    prevArrow: <SamplePrevArrow  />,
  };
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <div className={styles["carousel-wrapper"]}>
        <Slider {...settings}>
          {slides.map((s) => (
            <Slide key="" backgroundImageSrc={s.backgroundImageSrc}>
              <div className={styles['slide-content']}>
                <div className="display-3 text-center">{s.title}</div>
                <div className="display-6 text-center">{s.description}</div>
              </div>
            </Slide>
          ))}
        </Slider>
      </div>
    </>
  );
}
