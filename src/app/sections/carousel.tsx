"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface CarouselItem {
  image: string | string[];
  caption: string;
  date?: string;
  isVideo?: boolean;
}

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const bouquet1Ref = useRef<HTMLImageElement>(null);
  const bouquet2Ref = useRef<HTMLImageElement>(null);

  // Sample photos - replace with your actual images
  const items: CarouselItem[] = [
    {
      image: "/carousel_sarut.jpg",
      caption: "Primul Sărut (nu am poza de atunci dar intelegi ideea)",
      date: "24.12.2024",
    },
    {
      image: "/handshake.jpg",
      caption: "Foot Handshake",
      date: "23.04.2025",
    },
    {
      image: ["/delia_vin.jpg", "/vita.jpg"],
      caption: "Cea mai fancy masă in oraș",
      date: "19.09.2025",
    },
    {
      image: "/young_love.jpg",
      caption: "Amprentă Mondială a cuplului perfect",
      date: "Intr-o zi foarte fericită",
    },
    {
      image: "/dulce.jpg",
      caption: "Cel mai dulce date <3",
      date: "Intr-i zi foarte dulce :)",
    },
    {
      image: "/anime.mp4",
      caption: "Iubire ca in anime-uri",
      date: "02.10.2025",
      isVideo: true,
    },
    {
      image: "/piatra.jpg",
      caption: "Love engraved into stone that will last forever",
      date: "Scrie pe ea :D",
    },
    {
      image: "/cinema.jpg",
      caption: "Absolute Cinema ✋🏻🤚🏻",
      date: "Decembrie 2024",
    },
    {
      image: "/gd.jpg",
      caption: "Iubirile mele (Delia prima bineinteles)",
      date: "In lumina Deliei",
    },
    
  ];

  useEffect(() => {
    animateCards();
  }, [currentIndex]);

  const animateCards = () => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const offset = index - currentIndex;
      const absOffset = Math.abs(offset);

      if (absOffset <= 2) {
        gsap.to(card, {
          x: offset * 200,
          z: -absOffset * 200,
          opacity: absOffset === 0 ? 1 : 0.4,
          scale: absOffset === 0 ? 1 : 0.85 - absOffset * 0.15,
          rotateY: offset * 15,
          duration: 0.8,
          ease: "power3.out",
          zIndex: 10 - absOffset,
        });
      } else {
        gsap.to(card, {
          opacity: 0,
          scale: 0.5,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Animate bouquets
  useEffect(() => {
    if (bouquet1Ref.current && bouquet2Ref.current) {
      // Bouquet 1 - Floating and rotating animation
      gsap.to(bouquet1Ref.current, {
        y: -40,
        rotation: 25,
        duration: 3.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Bouquet 2 - Opposite floating and rotating animation
      gsap.to(bouquet2Ref.current, {
        y: 40,
        rotation: -25,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
  }, []);

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Rose Bouquets Background */}
      <div className="absolute top-[100px] left-0 right-0 flex justify-between max-w-8xl mx-auto z-0 pointer-events-none">
        <img 
          ref={bouquet1Ref}
          src="/bouquet.png" 
          alt="Rose Bouquet" 
          className="relative object-contain"
          style={{ width: '32rem', transform: 'rotate(15deg)' }}
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-delay="200"
        />
        <img 
          ref={bouquet2Ref}
          src="/romantic-bouquet-pink-roses.png" 
          alt="Rose Bouquet" 
          className="relative object-contain"
          style={{ width: '36rem', transform: 'rotate(-15deg)' }}
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-delay="200"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mt-20">
          <h2 
            className="text-7xl mb-4 zinc-800"
            data-aos="fade-up"
          >
            Amintirile Noastre
          </h2>
          <div 
            className="flex items-center justify-center gap-4"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="w-48 h-px bg-gray-400"></div>
            <svg
              className="w-10 h-10 fill-red-500"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <div className="w-48 h-px bg-gray-400"></div>
          </div>
          <p 
            className="text-2xl text-gray-600 mt-2"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Fiecare moment cu tine este o poveste de neuitat
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative h-[500px] flex items-center justify-center perspective-2000">
          <div
            ref={containerRef}
            className="relative w-full h-full flex items-center justify-center preserve-3d"
          >
            {items.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="absolute w-[550px] cursor-pointer"
                onClick={() => goToSlide(index)}
              >
                {/* Card */}
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform-gpu hover:shadow-3xl transition-shadow duration-300">
                  {/* Image/Video */}
                  <div className="relative h-[330px] overflow-hidden">
                    {item.isVideo ? (
                      <video
                        src={item.image as string}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : Array.isArray(item.image) ? (
                      <div className="flex h-full">
                        {item.image.map((img, imgIndex) => (
                          <img
                            key={imgIndex}
                            src={img}
                            alt={`${item.caption} ${imgIndex + 1}`}
                            className="w-1/2 h-full object-cover"
                          />
                        ))}
                      </div>
                    ) : (
                      <img
                        src={item.image}
                        alt={item.caption}
                        className={`w-full h-full ${item.image === "/cinema.jpg" ? "object-contain shadow-2xl" : "object-cover"}`}
                      />
                    )}
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-radial"></div>
                    
                    {/* Caption Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-xl font-playfair mb-2">{item.caption}</p>
                      {item.date && (
                        <p className="text-sm opacity-80">{item.date}</p>
                      )}
                    </div>
                  </div>

                  {/* Decorative Border */}
                  <div className="h-2 bg-gradient-to-r from-pink-400 via-red-400 to-pink-400"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-24 z-20 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group"
            aria-label="Previous"
          >
            <svg
              className="w-6 h-6 text-gray-800 group-hover:text-red-500 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-24 z-20 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group"
            aria-label="Next"
          >
            <svg
              className="w-6 h-6 text-gray-800 group-hover:text-red-500 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-12 h-3 bg-red-500"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="text-center mt-8">
          <p className="text-lg text-gray-600">
            <span className="font-semibold text-2xl text-red-500">
              {currentIndex + 1}
            </span>
            <span className="mx-2">/</span>
            <span className="text-gray-400">{items.length}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
