import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  { src: "https://res.cloudinary.com/dlbliivcc/image/upload/v1740949258/WhatsApp_Image_2025-03-03_at_1.55.40_AM_1_lhwyqo.jpg", alt: "Image 1" },
  { src: "https://res.cloudinary.com/dlbliivcc/image/upload/v1740949251/WhatsApp_Image_2025-03-03_at_1.55.41_AM_teqfh4.jpg", alt: "Image 2" },
  { src: "https://res.cloudinary.com/dlbliivcc/image/upload/v1740949249/WhatsApp_Image_2025-03-03_at_1.56.13_AM_lw03lv.jpg", alt: "Image 3" },
  { src: "https://res.cloudinary.com/dlbliivcc/image/upload/v1740949248/WhatsApp_Image_2025-03-03_at_1.56.10_AM_i2l64v.jpg", alt: "Image 4" },
  { src: "https://res.cloudinary.com/dlbliivcc/image/upload/v1740949246/WhatsApp_Image_2025-03-03_at_1.56.13_AM_1_jodvnn.jpg", alt: "Image 5" },
  { src: "https://res.cloudinary.com/dlbliivcc/image/upload/v1740949247/WhatsApp_Image_2025-03-03_at_1.55.40_AM_ioi80l.jpg", alt: "Image 6" },
  { src: "https://res.cloudinary.com/dlbliivcc/image/upload/v1740949245/WhatsApp_Image_2025-03-03_at_1.55.28_AM_j7uvlk.jpg", alt: "Image 7" },
  { src: "https://res.cloudinary.com/dlbliivcc/image/upload/v1740949244/WhatsApp_Image_2025-03-03_at_1.55.30_AM_iksnjt.jpg", alt: "Image 8" },
  { src: "https://res.cloudinary.com/dlbliivcc/image/upload/v1740949239/WhatsApp_Image_2025-03-03_at_1.55.37_AM_iire3a.jpg", alt: "Image 9" },
  { src: "https://res.cloudinary.com/dlbliivcc/image/upload/v1740949238/WhatsApp_Image_2025-03-03_at_1.56.10_AM_1_n7a9yx.jpg", alt: "Image 10" },
  { src: "https://res.cloudinary.com/dlbliivcc/image/upload/v1740949238/WhatsApp_Image_2025-03-03_at_1.55.28_AM_1_ml2h4f.jpg", alt: "Image 11" },
  { src: "https://res.cloudinary.com/dlbliivcc/image/upload/v1740949238/WhatsApp_Image_2025-03-03_at_1.55.14_AM_ikmff4.jpg", alt: "Image 12" },
  { src: "https://res.cloudinary.com/dlbliivcc/image/upload/v1740949234/WhatsApp_Image_2025-03-03_at_1.55.02_AM_bzp4ee.jpg", alt: "Image 13" },
  { src: "https://res.cloudinary.com/dlbliivcc/image/upload/v1740949232/WhatsApp_Image_2025-03-03_at_1.56.00_AM_rodtkv.jpg", alt: "Image 14" },
  { src: "https://res.cloudinary.com/dlbliivcc/image/upload/v1740949229/WhatsApp_Image_2025-03-03_at_1.56.02_AM_sexrzp.jpg", alt: "Image 15" },
  { src: "https://res.cloudinary.com/dlbliivcc/image/upload/v1740949226/WhatsApp_Image_2025-03-03_at_1.55.20_AM_fpdz72.jpg", alt: "Image 16" },
  { src: "https://res.cloudinary.com/dlbliivcc/image/upload/v1740949224/WhatsApp_Image_2025-03-03_at_1.55.19_AM_iiavfv.jpg", alt: "Image 17" },
  { src: "https://res.cloudinary.com/dlbliivcc/image/upload/v1740949223/WhatsApp_Image_2025-03-03_at_1.55.58_AM_your0z.jpg", alt: "Image 18" },
  { src: "https://res.cloudinary.com/dlbliivcc/image/upload/v1740949223/WhatsApp_Image_2025-03-03_at_1.55.21_AM_x7cpdq.jpg", alt: "Image 19" },
  { src: "https://res.cloudinary.com/dlbliivcc/image/upload/v1740949221/WhatsApp_Image_2025-03-03_at_1.55.01_AM_hjsxmf.jpg", alt: "Image 20" },
  { src: "https://res.cloudinary.com/dlbliivcc/image/upload/v1740949216/WhatsApp_Image_2025-03-03_at_1.55.11_AM_1_idge91.jpg", alt: "Image 21" },
  { src: "https://res.cloudinary.com/dlbliivcc/image/upload/v1740949215/WhatsApp_Image_2025-03-03_at_1.55.55_AM_schzna.jpg", alt: "Image 22" },
  { src: "https://res.cloudinary.com/dlbliivcc/image/upload/v1740949214/WhatsApp_Image_2025-03-03_at_1.55.01_AM_1_sny5ku.jpg", alt: "Image 23" },
  { src: "https://res.cloudinary.com/dlbliivcc/image/upload/v1740949212/WhatsApp_Image_2025-03-03_at_1.54.56_AM_hfwo24.jpg", alt: "Image 24" },
  { src: "https://res.cloudinary.com/dlbliivcc/image/upload/v1740949210/WhatsApp_Image_2025-03-03_at_1.55.11_AM_g2dzhr.jpg", alt: "Image 25" },
  { src: "https://res.cloudinary.com/dlbliivcc/image/upload/v1740949208/WhatsApp_Image_2025-03-03_at_1.55.51_AM_t25ypw.jpg", alt: "Image 26" },
  { src: "https://res.cloudinary.com/dlbliivcc/image/upload/v1740949208/WhatsApp_Image_2025-03-03_at_1.55.52_AM_vumgos.jpg", alt: "Image 27" },
  { src: "https://res.cloudinary.com/dlbliivcc/image/upload/v1740949207/WhatsApp_Image_2025-03-03_at_1.55.52_AM_1_vcjurw.jpg", alt: "Image 28" },
  { src: "https://res.cloudinary.com/dlbliivcc/image/upload/v1740949204/WhatsApp_Image_2025-03-03_at_1.55.49_AM_quweoo.jpg", alt: "Image 29" },
  { src: "https://res.cloudinary.com/dlbliivcc/image/upload/v1740949203/WhatsApp_Image_2025-03-03_at_1.55.47_AM_jn94ir.jpg", alt: "Image 30" },
  { src: "https://res.cloudinary.com/dlbliivcc/image/upload/v1740949203/WhatsApp_Image_2025-03-03_at_1.55.08_AM_bkfizy.jpg", alt: "Image 31" },
  { src: "https://res.cloudinary.com/dlbliivcc/image/upload/v1740949197/WhatsApp_Image_2025-03-03_at_1.55.44_AM_hbtd8g.jpg", alt: "Image 32" }
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
