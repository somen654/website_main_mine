import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface ImagesSliderProps {
  images: StaticImageData[];
  className?: string;
  children?: React.ReactNode;
}

export function ImagesSlider({ images, className, children }: ImagesSliderProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + images.length - 1) % images.length);
  };

  return (
    <div className={`relative w-full h-30 ${className}`}>
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
          transition={{ duration: 1 }}
          className={`absolute inset-0 flex justify-center items-center ${
            currentImageIndex === index ? "z-10" : "z-0"
          }`}
        >
          <Image src={image} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
        </motion.div>
      ))}
      {children}
      <div className="absolute top-0 left-0 bottom-0 flex justify-center items-center z-50">
        <button
          onClick={handlePreviousImage}
          className="flex px-5 py-2 bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.1] hover:shadow-lg"
          aria-label="Previous Image"
        >
          &#8592;
        </button>
      </div>
      <div className="absolute top-0 right-0 bottom-0 flex justify-center items-center z-50">
        <button
          onClick={handleNextImage}
          className="flex px-5 py-2 bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.1] hover:shadow-lg"
          aria-label="Next Image"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}