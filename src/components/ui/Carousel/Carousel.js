/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React from "react";
import Slider from "react-slick";
import VideoSlide from "../Slide/VideoSlide";
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
