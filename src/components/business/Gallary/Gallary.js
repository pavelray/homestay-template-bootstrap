import React, { Fragment, useEffect, useState } from "react";
import { storage } from "../../../../utils/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

import SimpleGallery from "../../ui/ImageGallary/ImageGallary";
const Gallary = () => {
  const [images, setImages] = useState([]);
  const roomImageRef = ref(storage, "Rooms/");

  const loadImages = async () => {
    const resp = listAll(roomImageRef);
    (await resp).items.forEach((image) => {
      getDownloadURL(image).then((url) => {
        setImages((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    loadImages();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatFirebaseImages = () => {
    return images.map(url => {
        return {
            largeURL: url,
            thumbnailURL: url,
            width: 1200,
            height: 1000,
        }
    })
  }

  return (
    <Fragment>
      <SimpleGallery
        galleryID="my-test-gallery"
        images={formatFirebaseImages()}
      />
    </Fragment>
  );
};

export default Gallary;
