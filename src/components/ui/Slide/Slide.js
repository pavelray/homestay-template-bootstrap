import React from "react";
import styles from './Slide.module.scss'

const Slide = ({ backgroundImageSrc, children }) => {
  const customStyle = {
    backgroundImage: `url(${backgroundImageSrc})`,
  };
  return (
    <div className={styles['slide-item']}>
      <div className={styles['overlay-image']} style={customStyle}></div>
      {children}
    </div>
  );
};

export default Slide;
