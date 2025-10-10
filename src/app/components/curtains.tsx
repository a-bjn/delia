"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Curtains() {
  const leftCurtainRef = useRef<HTMLDivElement>(null);
  const rightCurtainRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const flowersContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate curtains opening after a short delay - but keep them partially visible
    const timeline = gsap.timeline({ delay: 0.5 });

    timeline
      .to(leftCurtainRef.current, {
        x: "-82%",
        duration: 1.5,
        ease: "power3.inOut",
      })
      .to(
        rightCurtainRef.current,
        {
          x: "82%",
          duration: 1.5,
          ease: "power3.inOut",
        },
        "<" // Start at the same time as previous animation
      )
      .to(containerRef.current, {
        pointerEvents: "none",
        duration: 0,
      });

    // Throw flowers from the curtain sides
    setTimeout(() => {
      throwFlowers();
    }, 1500); // Start throwing flowers when curtains are opening
  }, []);

  const throwFlowers = () => {
    if (!flowersContainerRef.current) return;

    const flowerImages = [
      "/orchid-flower (1) (1).png",
      "/lavender-flower.png",
      "/iris-flower (1).png",
      "/carnation-flower (2) (1).png",
      "/snapdragon-flower (1).png",
      "/orchid-flower (1).png",
      "/iris-flower.png",
      "/carnation-flower (2).png",
      "/snapdragon-flower.png"
    ];
    const numberOfFlowers = 50;

    for (let i = 0; i < numberOfFlowers; i++) {
      setTimeout(() => {
        const flowerImg = document.createElement("img");
        const randomFlower = flowerImages[Math.floor(Math.random() * flowerImages.length)];
        flowerImg.src = randomFlower;
        flowerImg.style.position = "absolute";
        flowerImg.style.width = `${Math.random() * 40 + 40}px`;
        flowerImg.style.height = "auto";
        flowerImg.style.zIndex = "110";
        flowerImg.style.pointerEvents = "none";

        // Random side (left or right)
        const fromLeft = Math.random() > 0.5;
        const startX = fromLeft ? "5%" : "95%";
        const startY = `${Math.random() * 40 + 20}%`;

        flowerImg.style.left = startX;
        flowerImg.style.top = startY;

        flowersContainerRef.current?.appendChild(flowerImg);

        // Animate flower
        gsap.to(flowerImg, {
          x: fromLeft ? Math.random() * 500 + 250 : -(Math.random() * 500 + 250),
          y: Math.random() * 700 + 350,
          rotation: Math.random() * 1080 - 540,
          opacity: 0,
          scale: Math.random() * 1.8 + 0.6,
          duration: Math.random() * 2.5 + 2.5,
          ease: "power2.out",
          onComplete: () => flowerImg.remove(),
        });
      }, i * 40); // Stagger the flowers
    }
  };

  return (
    <>
      {/* Flowers Container */}
      <div
        ref={flowersContainerRef}
        className="absolute inset-0 z-[110] pointer-events-none"
      />
      
      <div
        ref={containerRef}
        className="absolute inset-0 z-[100] pointer-events-auto"
        style={{ isolation: "isolate" }}
      >
      {/* Top Valance/Veil - Large draped swags */}
      <div className="absolute top-0 left-0 right-0 h-64 z-20 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 256">
          <defs>
            <linearGradient id="swagGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="30%" stopColor="#3A0000" />
              <stop offset="60%" stopColor="#4A0000" />
              <stop offset="90%" stopColor="#6B0000" />
              <stop offset="100%" stopColor="#8B0000" />
            </linearGradient>
            <filter id="swagShadow">
              <feGaussianBlur in="SourceAlpha" stdDeviation="8"/>
              <feOffset dx="0" dy="6" result="offsetblur"/>
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.7"/>
              </feComponentTransfer>
              <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <pattern id="fabricTexture" x="0" y="0" width="20" height="40" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="40" stroke="rgba(0,0,0,0.5)" strokeWidth="2"/>
              <line x1="5" y1="0" x2="5" y2="40" stroke="rgba(0,0,0,0.3)" strokeWidth="1"/>
              <line x1="10" y1="0" x2="10" y2="40" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
              <line x1="15" y1="0" x2="15" y2="40" stroke="rgba(0,0,0,0.3)" strokeWidth="1"/>
            </pattern>
          </defs>
          
          {/* Left swag */}
          <path
            d="M 0,0 L 0,50 Q 100,180 250,120 Q 400,60 500,100 L 500,0 Z"
            fill="url(#swagGradient)"
            filter="url(#swagShadow)"
            stroke="#2A0000"
            strokeWidth="3"
          />
          
          {/* Right swag */}
          <path
            d="M 1000,0 L 1000,50 Q 900,180 750,120 Q 600,60 500,100 L 500,0 Z"
            fill="url(#swagGradient)"
            filter="url(#swagShadow)"
            stroke="#2A0000"
            strokeWidth="3"
          />
          
          {/* Apply pleating texture to swags */}
          <path
            d="M 0,0 L 0,50 Q 100,180 250,120 Q 400,60 500,100 L 500,0 Z"
            fill="url(#fabricTexture)"
            opacity="0.8"
          />
          <path
            d="M 1000,0 L 1000,50 Q 900,180 750,120 Q 600,60 500,100 L 500,0 Z"
            fill="url(#fabricTexture)"
            opacity="0.8"
          />
        </svg>

        {/* Decorative gold tassels */}
        <div className="absolute top-32 left-1/4 flex flex-col items-center transform -translate-x-1/2">
          <div className="w-3 h-12 bg-gradient-to-b from-amber-300 to-amber-500 rounded-full"></div>
          <div className="w-8 h-8 bg-gradient-to-b from-amber-300 to-amber-600 rounded-full shadow-xl border-2 border-amber-400"></div>
          <div className="flex gap-1 mt-2">
            <div className="w-1.5 h-16 bg-amber-400 opacity-80 rounded-full"></div>
            <div className="w-1.5 h-20 bg-amber-400 opacity-80 rounded-full"></div>
            <div className="w-1.5 h-16 bg-amber-400 opacity-80 rounded-full"></div>
          </div>
        </div>

        <div className="absolute top-32 right-1/4 flex flex-col items-center transform translate-x-1/2">
          <div className="w-3 h-12 bg-gradient-to-b from-amber-300 to-amber-500 rounded-full"></div>
          <div className="w-8 h-8 bg-gradient-to-b from-amber-300 to-amber-600 rounded-full shadow-xl border-2 border-amber-400"></div>
          <div className="flex gap-1 mt-2">
            <div className="w-1.5 h-16 bg-amber-400 opacity-80 rounded-full"></div>
            <div className="w-1.5 h-20 bg-amber-400 opacity-80 rounded-full"></div>
            <div className="w-1.5 h-16 bg-amber-400 opacity-80 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Second Layer - Rounded corner decorations */}
      <div className="absolute top-0 left-0 right-0 h-screen z-5 pointer-events-none">
        {/* Left corner rounded decoration */}
        <div className="absolute top-0 left-0 w-100 h-130">
          <div
            className="absolute inset-0 shadow-2xl rounded-br-full"
            style={{
              background: "linear-gradient(to bottom right,rgb(0, 0, 0), #4A0000, #6B0000, #2A0000)",
              boxShadow: "5px 5px 40px rgba(0, 0, 0, 0.8)",
            }}
          >
            {/* Vertical pleating texture */}
            <div
              className="absolute inset-0 rounded-br-full"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  90deg,
                  rgba(0, 0, 0, 0.6) 0px,
                  rgba(0, 0, 0, 0.4) 3px,
                  rgba(0, 0, 0, 0.1) 6px,
                  rgba(255, 255, 255, 0.02) 10px,
                  rgba(0, 0, 0, 0.1) 14px,
                  rgba(0, 0, 0, 0.4) 17px,
                  rgba(0, 0, 0, 0.6) 20px
                )`,
              }}
            ></div>

            {/* Deep shadow folds */}
            <div
              className="absolute inset-0 rounded-br-full"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  90deg,
                  transparent 0px,
                  rgba(0, 0, 0, 0.5) 10px,
                  transparent 20px
                )`,
                opacity: 0.7,
              }}
            ></div>

            {/* Decorative tassel */}
            <div className="absolute bottom-2 right-18 flex flex-col items-center">
              <div className="w-2.5 h-12 bg-gradient-to-b from-amber-300 to-amber-500 rounded-full"></div>
              <div className="w-8 h-8 bg-gradient-to-b from-amber-300 to-amber-600 rounded-full shadow-xl border-2 border-amber-400"></div>
              <div className="flex gap-1 mt-2">
                <div className="w-1 h-16 bg-amber-400 opacity-80 rounded-full"></div>
                <div className="w-1 h-20 bg-amber-400 opacity-80 rounded-full"></div>
                <div className="w-1 h-16 bg-amber-400 opacity-80 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right corner rounded decoration */}
        <div className="absolute top-0 right-0 w-110 h-130">
          <div
            className="absolute inset-0 shadow-2xl rounded-bl-full"
            style={{
              background: "linear-gradient(to bottom left, #3A0000, #4A0000, #6B0000, #2A0000)",
              boxShadow: "-5px 5px 40px rgba(0, 0, 0, 0.8)",
            }}
          >
            {/* Vertical pleating texture */}
            <div
              className="absolute inset-0 rounded-bl-full"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  90deg,
                  rgba(0, 0, 0, 0.6) 0px,
                  rgba(0, 0, 0, 0.4) 3px,
                  rgba(0, 0, 0, 0.1) 6px,
                  rgba(255, 255, 255, 0.02) 10px,
                  rgba(0, 0, 0, 0.1) 14px,
                  rgba(0, 0, 0, 0.4) 17px,
                  rgba(0, 0, 0, 0.6) 20px
                )`,
              }}
            ></div>

            {/* Deep shadow folds */}
            <div
              className="absolute inset-0 rounded-bl-full"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  90deg,
                  transparent 0px,
                  rgba(0, 0, 0, 0.5) 10px,
                  transparent 20px
                )`,
                opacity: 0.7,
              }}
            ></div>

            {/* Decorative tassel */}
            <div className="absolute bottom-2 left-16 flex flex-col items-center">
              <div className="w-2.5 h-12 bg-gradient-to-b from-amber-300 to-amber-500 rounded-full"></div>
              <div className="w-8 h-8 bg-gradient-to-b from-amber-300 to-amber-600 rounded-full shadow-xl border-2 border-amber-400"></div>
              <div className="flex gap-1 mt-2">
                <div className="w-1 h-16 bg-amber-400 opacity-80 rounded-full"></div>
                <div className="w-1 h-20 bg-amber-400 opacity-80 rounded-full"></div>
                <div className="w-1 h-16 bg-amber-400 opacity-80 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Left Curtain */}
      <div
        ref={leftCurtainRef}
        className="absolute top-0 left-0 w-1/2 h-full rounded-br-[60px]"
        style={{
          background: "linear-gradient(to right, #6B0000 0%, #8B0000 25%, #A50000 50%, #8B0000 75%, #6B0000 100%)",
        }}
      >
        {/* Base vertical pleating - deep shadows */}
        <div
          className="absolute inset-0 rounded-br-[60px]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.6) 0px,
              rgba(0, 0, 0, 0.4) 5px,
              rgba(0, 0, 0, 0.1) 10px,
              rgba(255, 255, 255, 0.05) 15px,
              rgba(255, 255, 255, 0.1) 20px,
              rgba(255, 255, 255, 0.05) 25px,
              rgba(0, 0, 0, 0.1) 30px,
              rgba(0, 0, 0, 0.4) 35px,
              rgba(0, 0, 0, 0.6) 40px
            )`,
          }}
        ></div>
        
        {/* Secondary fold highlights */}
        <div
          className="absolute inset-0 opacity-80 rounded-br-[60px]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent 0px,
              rgba(139, 0, 0, 0.5) 8px,
              rgba(165, 0, 0, 0.3) 20px,
              rgba(139, 0, 0, 0.5) 32px,
              transparent 40px
            )`,
          }}
        ></div>

        {/* Fine texture detail */}
        <div
          className="absolute inset-0 opacity-30 rounded-br-[60px]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.3) 0px,
              transparent 1px,
              transparent 4px,
              rgba(0, 0, 0, 0.3) 5px
            )`,
          }}
        ></div>

        <div className="absolute top-1/2 right-10 flex flex-col items-center">
          <div className="w-2.5 h-20 bg-gradient-to-b from-amber-300 to-amber-500 rounded-full"></div>
          <div className="w-8 h-8 bg-gradient-to-b from-amber-300 to-amber-600 rounded-full shadow-xl border-2 border-amber-400"></div>
          <div className="flex gap-1 mt-2">
            <div className="w-1 h-16 bg-amber-400 opacity-80 rounded-full"></div>
            <div className="w-1 h-20 bg-amber-400 opacity-80 rounded-full"></div>
            <div className="w-1 h-16 bg-amber-400 opacity-80 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Right Curtain */}
      <div
        ref={rightCurtainRef}
        className="absolute top-0 right-0 w-1/2 h-full rounded-bl-[60px]"
        style={{
          background: "linear-gradient(to left, #6B0000 0%, #8B0000 25%, #A50000 50%, #8B0000 75%, #6B0000 100%)",
        }}
      >
        {/* Base vertical pleating - deep shadows */}
        <div
          className="absolute inset-0 rounded-bl-[60px]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.6) 0px,
              rgba(0, 0, 0, 0.4) 5px,
              rgba(0, 0, 0, 0.1) 10px,
              rgba(255, 255, 255, 0.05) 15px,
              rgba(255, 255, 255, 0.1) 20px,
              rgba(255, 255, 255, 0.05) 25px,
              rgba(0, 0, 0, 0.1) 30px,
              rgba(0, 0, 0, 0.4) 35px,
              rgba(0, 0, 0, 0.6) 40px
            )`,
          }}
        ></div>
        
        {/* Secondary fold highlights */}
        <div
          className="absolute inset-0 opacity-80 rounded-bl-[60px]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent 0px,
              rgba(139, 0, 0, 0.5) 8px,
              rgba(165, 0, 0, 0.3) 20px,
              rgba(139, 0, 0, 0.5) 32px,
              transparent 40px
            )`,
          }}
        ></div>

        

        <div className="absolute top-1/2 left-10 flex flex-col items-center">
          <div className="w-2.5 h-20 bg-gradient-to-b from-amber-300 to-amber-500 rounded-full"></div>
          <div className="w-8 h-8 bg-gradient-to-b from-amber-300 to-amber-600 rounded-full shadow-xl border-2 border-amber-400"></div>
          <div className="flex gap-1 mt-2">
            <div className="w-1 h-16 bg-amber-400 opacity-80 rounded-full"></div>
            <div className="w-1 h-20 bg-amber-400 opacity-80 rounded-full"></div>
            <div className="w-1 h-16 bg-amber-400 opacity-80 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
