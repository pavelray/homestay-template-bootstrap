import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import Image from "next/image";
import { v4 as uid } from "uuid";
import styles from "./ImageGallary.module.css";

export default function SimpleGallery(props) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + props.galleryID,
      children: "a",
      initialZoomLevel: 'fit',
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, [props.galleryID]);

  return (
    <div className={["pswp-gallery", [styles.mediaContainer]].join(" ")} id={props.galleryID}>
      {props.images.map((image, index) => (
        <div key={uid()} className={styles.mediaImage}>
          <a
            href={image.largeURL}
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            key={props.galleryID + "-" + index}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={image.thumbnailURL}
              alt=""
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </a>
        </div>
      ))}
    </div>
  );
}
