/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React, { useState } from "react";
import Slider from "react-slick";
import VideoSlide from "../Slide/VideoSlide";
import Slide from "../Slide/VideoSlide";
import styles from "./Carousel.module.scss";

export default function ControlledCarousel() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, right: "0px", fontSize: "40px" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, left: "0px", zIndex: "1", fontSize: "40px" }}
        onClick={onClick}
      />
    );
  }

  const imageslides = [
    {
      title: "Welcome to Aaltapori Homestay",
      description: "Lorem ipsum dolor sit amet",
      backgroundImageSrc:
        "https://firebasestorage.googleapis.com/v0/b/honey-cdqdqw.appspot.com/o/Hotel%2Fhero-image.jpeg?alt=media&token=3240e618-ce04-4eca-ba3e-c5050d852b9b",
    },
    {
      title: "Welcome to Aaltapori Homestay",
      description: "Lorem ipsum dolor sit amet",
      backgroundImageSrc:
        "https://firebasestorage.googleapis.com/v0/b/honey-cdqdqw.appspot.com/o/Hotel%2FHotel-Image-4.jpeg?alt=media&token=c1fb62a1-0e25-41d2-86c1-203ef68d6a54",
    },
    {
      title: "Welcome to Aaltapori Homestay",
      description: "Lorem ipsum dolor sit amet",
      backgroundImageSrc:
        "https://firebasestorage.googleapis.com/v0/b/honey-cdqdqw.appspot.com/o/Hotel%2FHotel-Image-1.jpeg?alt=media&token=4becef0e-c537-495c-8ffa-f877168bdf8d",
    },
  ];
  const slides = [
    {
      title: "Welcome to Aaltapori Homestay",
      description: "Lorem ipsum dolor sit amet",
      backgroundImageSrc:
        "https://firebasestorage.googleapis.com/v0/b/honey-cdqdqw.appspot.com/o/Videos%2Faaltapori_outdoor1.mp4?alt=media&token=07462765-5972-4883-9c91-98d125613793",
    },
    {
      title: "Welcome to Aaltapori Homestay",
      description: "Lorem ipsum dolor sit amet",
      backgroundImageSrc:
        "https://firebasestorage.googleapis.com/v0/b/honey-cdqdqw.appspot.com/o/Videos%2Faaltapori_room1.mp4?alt=media&token=3c7ef688-919d-4b43-b9fd-ebcb7cb962fc",
    },
    {
      title: "Welcome to Aaltapori Homestay",
      description: "Lorem ipsum dolor sit amet",
      backgroundImageSrc:
        "https://firebasestorage.googleapis.com/v0/b/honey-cdqdqw.appspot.com/o/Videos%2Faaltapori_room2.mp4?alt=media&token=927cd940-2927-43fe-86f0-aeeb493b39fc",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className={styles["slick-next"]} />,
    prevArrow: <SamplePrevArrow />,
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
            <VideoSlide key="" backgroundImageSrc={s.backgroundImageSrc}>
              <div className={styles["slide-content"]}>
                <div className="display-3 text-center">{s.title}</div>
                <div className="display-6 text-center">{s.description}</div>
              </div>
            </VideoSlide>
          ))}
        </Slider>
      </div>
    </>
  );
}
