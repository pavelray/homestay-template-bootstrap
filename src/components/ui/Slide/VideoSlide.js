import React from "react";
import styles from "./VideoSlide.module.scss";

const VideoSlide = ({ backgroundImageSrc, children }) => {
  return (
    <div className={styles["slide-item"]}>
      <video className={styles["video-full"]} autoPlay loop muted>
        <source src={backgroundImageSrc} type="video/mp4" />
      </video>
      {children}
    </div>
  );
};

export default VideoSlide;
