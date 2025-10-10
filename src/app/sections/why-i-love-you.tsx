"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactElement } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

interface Reason {
  title: string;
  description: string;
  icon: ReactElement;
  color: string;
}

export default function WhyILoveYou() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const rose1Ref = useRef<HTMLImageElement>(null);
  const rose2Ref = useRef<HTMLImageElement>(null);

  const reasons: Reason[] = [
    {
      title: "Zâmbetul Tău",
      description: "Îmi luminează zilele și îmi încălzește inima în fiecare moment.",
      icon: (
        <svg className="w-16 h-16 fill-white" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm10 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-5 7c2.14 0 3.92-1.28 4.72-3.11H7.28C8.08 16.72 9.86 18 12 18z"/>
        </svg>
      ),
      color: "bg-gradient-to-br from-pink-400 to-rose-400",
    },
    {
      title: "Bunătatea Ta",
      description: "Modul în care îți pasă de toți cei din jurul tău mă inspiră mereu.",
      icon: (
        <svg className="w-16 h-16 fill-white" viewBox="0 0 24 24">
          <path d="M12 1l2.5 5.5L20 8l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1.5L12 1z"/>
          <circle cx="4" cy="4" r="1.5"/>
          <circle cx="20" cy="4" r="1.5"/>
          <circle cx="4" cy="20" r="1.5"/>
          <circle cx="20" cy="20" r="1.5"/>
        </svg>
      ),
      color: "bg-gradient-to-br from-red-400 to-pink-400",
    },
    {
      title: "Râsul Tău",
      description: "Este cea mai frumoasă melodie pe care am auzit-o vreodată.",
      icon: (
        <svg className="w-16 h-16 fill-white" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        </svg>
      ),
      color: "bg-gradient-to-br from-purple-400 to-pink-400",
    },
    {
      title: "Inteligența Ta",
      description: "Conversațiile noastre sunt mereu captivante și pline de semnificație.",
      icon: (
        <svg className="w-16 h-16 fill-white" viewBox="0 0 24 24">
          <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
        </svg>
      ),
      color: "bg-gradient-to-br from-amber-400 to-orange-400",
    },
    {
      title: "Pasiunea Ta",
      description: "Energia cu care faci tot ce îți place este molipsitoare.",
      icon: (
        <svg className="w-16 h-16 fill-white" viewBox="0 0 24 24">
          <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/>
        </svg>
      ),
      color: "bg-gradient-to-br from-orange-400 to-red-400",
    },
    {
      title: "Puterea Ta",
      description: "Reziliența și curajul tău în fața provocărilor este de admirat.",
      icon: (
        <svg className="w-16 h-16 fill-white" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
        </svg>
      ),
      color: "bg-gradient-to-br from-indigo-400 to-purple-400",
    },
    {
      title: "Privirea Ta",
      description: "Ochii tăi sunt plini de sentimente și iubire.",
      icon: (
        <svg className="w-16 h-16 fill-white" viewBox="0 0 24 24">
          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
        </svg>
      ),
      color: "bg-gradient-to-br from-violet-400 to-purple-400",
    },
    {
      title: "Frumusețea Ta",
      description: "Nu doar fizică, ci și cea din suflet care mă fascinează în fiecare zi.",
      icon: (
        <svg className="w-16 h-16 fill-white" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      ),
      color: "bg-gradient-to-br from-purple-400 to-pink-400",
    },
    {
      title: "Iubirea Ta",
      description: "Modul în care mă iubești mă face să mă simt special.",
      icon: (
        <svg className="w-16 h-16 fill-white" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      ),
      color: "bg-gradient-to-br from-rose-400 to-red-400",
    },
  ];

  useEffect(() => {
    const draggables: Draggable[] = [];
    const floatTimelines: gsap.core.Timeline[] = [];

    // Wait for section to be rendered
    setTimeout(() => {
      if (!sectionRef.current) return;
      
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        // Set initial random position scattered across the container
        const randomX = Math.random() * 800 - 400; // ±400px from center
        const randomY = Math.random() * 400 - 200; // -200 to 200px

        gsap.set(card, {
          x: randomX,
          y: randomY,
          rotation: Math.random() * 30 - 15,
          scale: 1,
          zIndex: index,
        });

        // Add floating animation
        const floatTimeline = gsap.timeline({ repeat: -1, yoyo: true });
        floatTimeline.to(card, {
          y: `+=${15 + Math.random() * 10}`,
          rotation: `+=${5 + Math.random() * 5}`,
          duration: 2 + Math.random() * 2,
          ease: "sine.inOut",
        });
        floatTimelines.push(floatTimeline);

        // Enable dragging
        const draggable = Draggable.create(card, {
          type: "x,y",
          inertia: true,
          bounds: sectionRef.current,
          onPress: function() {
            // Bring card to front and pause floating animation
            floatTimeline.pause();
            gsap.to(card, {
              scale: 1.1,
              zIndex: 100,
              duration: 0.2,
            });
          },
          onDragEnd: function() {
            // Resume floating animation
            floatTimeline.resume();
            
            gsap.to(card, {
              scale: 1,
              duration: 0.3,
              ease: "back.out(1.7)",
            });
          },
        })[0];

        draggables.push(draggable);
      });
    }, 100);

    return () => {
      draggables.forEach((d) => d.kill());
      floatTimelines.forEach((t) => t.kill());
    };
  }, []);

  // Animate roses
  useEffect(() => {
    if (rose1Ref.current && rose2Ref.current) {
      // Rose 1 - Floating and rotating animation
      gsap.to(rose1Ref.current, {
        y: -30,
        rotation: 75,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Rose 2 - Opposite floating and rotating animation
      gsap.to(rose2Ref.current, {
        y: 30,
        rotation: -75,
        duration: 3.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
  }, []);

  const handleCardClick = (index: number, event: React.MouseEvent<HTMLDivElement>) => {
    if (flippedCards.has(index)) return;

    // Flip the card
    setFlippedCards((prev) => new Set(prev).add(index));

    // Heart-shaped confetti effect
    const confettiColors = ['#ec4899', '#f43f5e', '#f59e0b', '#8b5cf6', '#06b6d4', '#ef4444', '#f472b6'];
    const cardElement = event.currentTarget;
    
    for (let i = 0; i < 15; i++) {
      const confetti = document.createElement("div");
      const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
      const size = Math.random() * 12 + 12; // 12-24px hearts
      
      confetti.innerHTML = `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="${color}" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      `;
      
      confetti.style.position = "absolute";
      confetti.style.left = "50%";
      confetti.style.top = "50%";
      confetti.style.pointerEvents = "none";
      confetti.style.zIndex = "1000";
      confetti.style.display = "inline-block";
      
      cardElement.appendChild(confetti);

      gsap.to(confetti, {
        x: (Math.random() - 0.5) * 500,
        y: (Math.random() - 0.5) * 500 - 150,
        opacity: 0,
        rotation: Math.random() * 720,
        scale: Math.random() * 0.5 + 0.5,
        duration: 2.5 + Math.random() * 0.5,
        ease: "power2.out",
        onComplete: () => confetti.remove(),
      });
    }
  };


  return (
    <section
      ref={sectionRef}
      className="py-16 px-6 overflow-hidden"
    > 
      <div className="relative flex justify-between max-w-8xl mx-auto mt-[-200px] z-0">
        <img 
          ref={rose1Ref}
          src="/rose.png" 
          alt="Rose" 
          className="relative w-164 object-contain"
          style={{ transform: 'rotate(65deg)' }}
        />
        <img 
          ref={rose2Ref}
          src="/rose.png" 
          alt="Rose" 
          className="relative w-164 object-contain"
          style={{ transform: 'rotate(-65deg)' }}
        />
      </div>
      <div className="relative max-w-7xl mx-auto mt-[-500px] z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-7xl mb-4 text-zinc-800"
            data-aos="fade-down"
          >
            De Ce Te Iubesc
          </h2>
          <div 
            className="flex items-center justify-center gap-4 mb-6"
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
            className="text-xl text-gray-600 mb-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Apasă pe bilete pentru a le descoperi
          </p>
          <p 
            className="text-sm text-gray-500"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {flippedCards.size} / {reasons.length} descoperite
          </p>
        </div>

        {/* Floating Cards */}
        <div className="relative min-h-[600px]">
          {reasons.map((reason, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              onClick={(e) => handleCardClick(index, e)}
              className="absolute perspective-1000 cursor-grab active:cursor-grabbing w-56"
              style={{ transformStyle: "preserve-3d", left: "50%", top: "50%", marginLeft: "-112px" }}
            >
              <div className="relative preserve-3d h-72">
                {/* Front of card */}
                <div
                  className={`absolute inset-0 ${reason.color} rounded-2xl shadow-2xl p-6 flex flex-col items-center justify-center backface-hidden transition-transform duration-600`}
                  style={{
                    backfaceVisibility: "hidden",
                    transform: flippedCards.has(index) ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  <div className="mb-4">{reason.icon}</div>
                  <div className="text-white text-center">
                    <p className="text-sm opacity-90 mb-2">Apasă pentru</p>
                    <p className="text-xs opacity-80">a descoperi</p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-3 right-3 opacity-20">
                    <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                  <div className="absolute bottom-3 left-3 opacity-20">
                    <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                    </svg>
                  </div>
                </div>

                {/* Back of card */}
                <div
                  className="absolute inset-0 bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-center justify-center backface-hidden transition-transform duration-600"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: flippedCards.has(index) ? "rotateY(0deg)" : "rotateY(-180deg)",
                  }}
                >
                  <div className={`w-10 h-10 ${reason.color} rounded-full flex items-center justify-center mb-2`}>
                    <div className="scale-50">{reason.icon}</div>
                  </div>
                  <h3 className="text-base font-playfair text-gray-800 mb-2 text-center">
                    {reason.title}
                  </h3>
                  <p className="text-xs text-gray-600 text-center leading-relaxed">
                    {reason.description}
                  </p>
                  
                  {/* Border decoration */}
                  <div className={`absolute bottom-0 left-0 right-0 h-2 ${reason.color} rounded-b-2xl`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Message */}
        <div className="text-center mt-8">
          {flippedCards.size === reasons.length ? (
            <div className="animate-bounce-slow">
              <p className="text-3xl font-playfair text-gray-700 mb-4">
                Ai descoperit toate motivele!
              </p>
              <p className="text-xl text-gray-600 italic">
                Și lista continuă... pentru că tu ești specială în atât de multe moduri!
              </p>
            </div>
          ) : (
            <p className="text-lg text-gray-500">
              Mai sunt {reasons.length - flippedCards.size} motive de descoperit...
            </p>
          )}
        </div>
      </div>
    </section>
  );
}