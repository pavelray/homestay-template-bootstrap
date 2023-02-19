import React, { Fragment, useEffect, useState } from "react";
import { storage } from "../../../../utils/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

import SimpleGallery from "../../ui/ImageGallary/ImageGallary";
const Gallary = ({ count, containerName = "Rooms" }) => {
  const [images, setImages] = useState([]);
  const roomImageRef = ref(storage, `${containerName}/`);

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
    const imageCount = count || images.length;
    return images.slice(0, imageCount).map((url) => {
      return {
        largeURL: url,
        thumbnailURL: url,
        width: 1200,
        height: 1000,
      };
    });
  };

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
