import { useState, useEffect, useRef } from 'react';
import slideshow0 from "@assets/slideshow_1762526346224.jpg";
import slideshow1 from "@assets/slideshow1_1762526346225.jpg";
import slideshow2 from "@assets/slideshow2_1762526346225.jpg";
import slideshow3 from "@assets/slideshow3_1762526346226.jpg";
import slideshow4 from "@assets/slideshow4_1762526346226.jpg";
import slideshow5 from "@assets/slideshow5_1762526346227.jpg";
import slideshow6 from "@assets/slideshow6_1762526346227.jpg";
import slideshow7 from "@assets/slideshow7_1762526346228.jpg";
import slideshow8 from "@assets/slideshow8_1762526346229.jpg";
import slideshow9 from "@assets/slideshow9_1762526346229.jpg";

const SlideshowSection = () => {
  const images = [
    slideshow0,
    slideshow1,
    slideshow2,
    slideshow3,
    slideshow4,
    slideshow5,
    slideshow6,
    slideshow7,
    slideshow8,
    slideshow9
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('slideshow');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isVisible, images.length]);

  return (
    <section id="slideshow" className="relative py-8 bg-background overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={`bg-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover"
              style={{
                display: 'block',
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                objectPosition: 'top',
                margin: 0,
                padding: 0
              }}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Main Slideshow Container - Centered */}
      <div className="relative z-10 flex items-center justify-center px-4">
        <div className="relative w-full max-w-md">
          {images.map((image, index) => (
            <div
              key={index}
              className={`transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
              }`}
            >
              <img
                src={image}
                alt={`Phil John and Cheska moments ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                style={{
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  objectPosition: 'top',
                  margin: 0,
                  padding: 0
                }}
                loading={index === 0 ? 'eager' : 'lazy'}
                data-testid={`img-slideshow-${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Progress indicators */}
      <div className="relative z-10 flex justify-center space-x-2 pt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-[#ffffff] w-8'
                : 'bg-[#333333]/70 hover:bg-[#ffffff]/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default SlideshowSection;