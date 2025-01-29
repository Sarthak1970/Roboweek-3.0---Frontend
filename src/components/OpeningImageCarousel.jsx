import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  { src: "https://res.cloudinary.com/dosnuagvu/image/upload/v1738133464/Image3_yohwkq.jpg", alt: "Image 1 - Campus Overview" },
  { src: "https://res.cloudinary.com/dosnuagvu/image/upload/v1738133464/image30_m55myl.jpg", alt: "Image 2 - Robotics Demo" },
  { src: "https://res.cloudinary.com/dosnuagvu/image/upload/v1738133466/image32_zc8qzv.jpg", alt: "Image 3 - Workshop Session" },
  { src: "https://res.cloudinary.com/dosnuagvu/image/upload/v1738133472/Image4_aetcli.jpg", alt: "Image 4 - Team Presentation" },
  { src: "https://res.cloudinary.com/dosnuagvu/image/upload/v1738133519/image15_h3awro.jpg", alt: "Image 6 - Award Ceremony" },
  { src: "https://res.cloudinary.com/dosnuagvu/image/upload/v1738133520/image18_asjjgh.jpg", alt: "Image 7 - Project Showcase" },
  { src: "https://res.cloudinary.com/dosnuagvu/image/upload/v1738133520/image12_u8dg3n.jpg", alt: "Image 8 - Networking Event" },
  { src: "https://res.cloudinary.com/dosnuagvu/image/upload/v1738133518/image17_zge3fd.jpg", alt: "Image 9 - Group Photo" },
  { src: "https://res.cloudinary.com/dosnuagvu/image/upload/v1738133518/image14_jnzyfa.jpg", alt: "Image 10 - Campus Overview" },
  { src: "https://res.cloudinary.com/dosnuagvu/image/upload/v1738133498/image16_uj7zxm.jpg", alt: "Image 11 - Campus Overview" },
  { src: "https://res.cloudinary.com/dosnuagvu/image/upload/v1738133497/image13_fwqzgw.jpg", alt: "Image 12 - Campus Overview" },
  { src: "https://res.cloudinary.com/dosnuagvu/image/upload/v1738133492/image10_niyifb.jpg", alt: "Campus Overview" },
  { src: "https://res.cloudinary.com/dosnuagvu/image/upload/v1738133490/image40_xcagsj.jpg", alt: "Campus Overview" },
  { src: "https://res.cloudinary.com/dosnuagvu/image/upload/v1738133490/image42_bh6gn1.jpg", alt: "Campus Overview" },
  { src: "https://res.cloudinary.com/dosnuagvu/image/upload/v1738133489/image11_nu4alq.jpg", alt: "Campus Overview" },
  { src: "https://res.cloudinary.com/dosnuagvu/image/upload/v1738133484/Image8_gvpiqt.jpg", alt: "Campus Overview" },
  { src: "https://res.cloudinary.com/dosnuagvu/image/upload/v1738133483/image41_kmok71.jpg", alt: "Campus Overview" },
  { src: "https://res.cloudinary.com/dosnuagvu/image/upload/v1738133482/Image1_bhqwq1.jpg", alt: "Campus Overview" },
  { src: "https://res.cloudinary.com/dosnuagvu/image/upload/v1738133481/image33_ovfu39.jpg", alt: "Campus Overview" },
  { src: "https://res.cloudinary.com/dosnuagvu/image/upload/v1738133481/image38_vf8krg.jpg", alt: "Campus Overview" },
  { src: "https://res.cloudinary.com/dosnuagvu/image/upload/v1738133481/image39_f6fpte.jpg", alt: "Campus Overview" },
  { src: "https://res.cloudinary.com/dosnuagvu/image/upload/v1738133481/Image6_cbvpsi.jpg", alt: "Campus Overview" },
  { src: "https://res.cloudinary.com/dosnuagvu/image/upload/v1738133480/image34_s4ptpf.jpg", alt: "Campus Overview" },
  { src: "https://res.cloudinary.com/dosnuagvu/image/upload/v1738133477/Image9_ftgzec.jpg", alt: "Campus Overview" },
  { src: "https://res.cloudinary.com/dosnuagvu/image/upload/v1738133474/image35_k6gtix.jpg", alt: "Campus Overview" },
  { src: "https://res.cloudinary.com/dosnuagvu/image/upload/v1738133474/image37_glchwx.jpg", alt: "Campus Overview" },
  { src: "https://res.cloudinary.com/dosnuagvu/image/upload/v1738133472/image36_f6m4dx.jpg", alt: "Campus Overview" },
  { src: "https://res.cloudinary.com/dosnuagvu/image/upload/v1738133465/Image2_snznr0.jpg", alt: "Campus Overview" },
  { src: "https://res.cloudinary.com/dosnuagvu/image/upload/v1738133465/image28_nuzo0o.jpg", alt: "Campus Overview" },
  { src: "https://res.cloudinary.com/dosnuagvu/image/upload/v1738133463/image29_yncflv.jpg", alt: "Campus Overview" },
  { src: "https://res.cloudinary.com/dosnuagvu/image/upload/v1738133462/image31_lsuqra.jpg", alt: "Campus Overview" },
];

const AUTO_SCROLL_DELAY = 3000; // 3 seconds

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalImageSize, setModalImageSize] = useState({ width: 0, height: 0 });

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsPaused(true);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setIsPaused(true);
  };

  const openModal = (index) => {
    const img = new Image();
    img.src = images[index].src;

    img.onload = () => {
      const aspectRatio = img.naturalWidth / img.naturalHeight;

      const maxModalWidth = window.innerWidth * 0.9;
      const maxModalHeight = window.innerHeight * 0.9;

      if (img.naturalWidth > maxModalWidth || img.naturalHeight > maxModalHeight) {
        if (maxModalWidth / aspectRatio < maxModalHeight) {
          setModalImageSize({
            width: maxModalWidth,
            height: maxModalWidth / aspectRatio,
          });
        } else {
          setModalImageSize({
            width: maxModalHeight * aspectRatio,
            height: maxModalHeight,
          });
        }
      } else {
        setModalImageSize({ width: img.naturalWidth, height: img.naturalHeight });
      }

      setModalImage(images[index]);
      setIsModalOpen(true);
    };
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, AUTO_SCROLL_DELAY);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  useEffect(() => {
    if (isPaused) {
      const timeout = setTimeout(() => setIsPaused(false), AUTO_SCROLL_DELAY * 2);
      return () => clearTimeout(timeout);
    }
  }, [isPaused]);

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-16 text-pink-600 font-squidFont">
          Gallery
        </h2>

        <div className="relative flex justify-center items-center">
          <button
            onClick={handlePrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-pink-500 p-3 rounded-full shadow-lg hover:bg-pink-600 transition z-10"
          >
            ❮
          </button>

          <div className="flex items-center space-x-8">
            <motion.div
              className="w-64 h-96 flex-shrink-0 overflow-hidden rounded-lg shadow-md bg-gray-200"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ filter: "blur(5px)" }}
            >
              <img
                src={images[(currentIndex - 1 + images.length) % images.length].src}
                alt={images[(currentIndex - 1 + images.length) % images.length].alt}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              key={currentIndex}
              className="w-96 h-[500px] flex-shrink-0 overflow-hidden rounded-lg shadow-2xl bg-gray-300 cursor-pointer"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => openModal(currentIndex)}
            >
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              className="w-64 h-96 flex-shrink-0 overflow-hidden rounded-lg shadow-md bg-gray-200"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ filter: "blur(5px)" }}
            >
              <img
                src={images[(currentIndex + 1) % images.length].src}
                alt={images[(currentIndex + 1) % images.length].alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-pink-500 p-3 rounded-full shadow-lg hover:bg-pink-600 transition z-10"
          >
            ❯
          </button>
        </div>
      </div>

      {isModalOpen && modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div
            className="relative rounded-lg bg-transparent"
            style={{
              width: modalImageSize.width,
              height: modalImageSize.height,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-lg z-10"
            >
              ❌
            </button>
            <motion.img
              src={modalImage.src}
              alt={modalImage.alt}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                backgroundColor: "transparent",
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageCarousel;
