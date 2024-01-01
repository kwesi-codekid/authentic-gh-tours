import { galleryData } from "../../data/gallery";
import { useEffect, useState } from "react";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  const fetchData = async () => {
    try {
      const data = await galleryData();
      setPhotos(data);
    } catch (error) {
      console.error("Error fetching gallery data:", error);
    }
  };
  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 py-10 md:px-12 md:py-16 lg:px-20 lg:py-16 gap-5">
      {photos.map((photo, index) => (
        <img key={index} src={photo.src.original} alt="" />
      ))}
    </div>
  );
};

export default Gallery;
