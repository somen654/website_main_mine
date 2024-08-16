"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { ImagesSlider } from "./ui/ImageSlider";
import Image from "next/image";

import slide0 from "@/public/slide0.jpg";
import slide1 from "@/public/slide1.jpg";
import slide2 from "@/public/slide2.jpg";
import slide3 from "@/public/slide3.jpg";
import slide4 from "@/public/slide4.jpg";
import { StaticImageData } from "next/image";

const ImageSliderController = () => {
  const images: StaticImageData[] = [slide0, slide1, slide2, slide3, slide4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + images.length - 1) % images.length);
  };

  return (
    <ImagesSlider images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
      </motion.div>
      <Image key={currentImageIndex} src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
    </ImagesSlider>
  );
};

export default ImageSliderController;