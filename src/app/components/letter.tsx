"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

interface LetterProps {
  onClose: () => void;
}

export default function Letter({ onClose }: LetterProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldDropDown, setShouldDropDown] = useState(false);
  const envelopeRef = useRef<HTMLDivElement>(null);
  const mainContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setIsVisible(true), 50);
  }, []);

  useEffect(() => {
    // Trigger confetti when envelope opens
    if (isOpened && envelopeRef.current) {
      createConfetti();
      
      // Trigger dropdown animation after a short delay
      setTimeout(() => {
        setShouldDropDown(true);
        if (mainContainerRef.current) {
          gsap.fromTo(mainContainerRef.current, 
            { y: 0 },
            { 
              y: 128, 
              duration: 0.8, 
              ease: "power2.out",
              delay: 0.2
            }
          );
        }
      }, 800); // Wait for flap animation to complete
    }
  }, [isOpened]);

  const createConfetti = () => {
    if (!envelopeRef.current) return;

    const confettiColors = [
      '#ec4899', // pink-500
      '#f472b6', // pink-400
      '#fb7185', // rose-400
      '#fda4af', // pink-300
      '#fbbf24', // amber-400
      '#db2777', // pink-600
      '#be185d', // pink-700
      '#f43f5e', // rose-500
      '#e11d48', // rose-600
      '#ef4444', // red-500
      '#dc2626', // red-600
      '#f87171', // red-400
    ];
    const confettiCount = 1000;

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement("div");
      const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
      const size = Math.random() * 12 + 8; // 8-20px (bigger)
      const shape = Math.random() > 0.5 ? 'circle' : 'square';
      
      confetti.style.position = "fixed";
      confetti.style.width = `${size}px`;
      confetti.style.height = `${size}px`;
      confetti.style.backgroundColor = color;
      confetti.style.left = "50%";
      confetti.style.top = "40%";
      confetti.style.pointerEvents = "none";
      confetti.style.zIndex = "9999";
      
      if (shape === 'circle') {
        confetti.style.borderRadius = "50%";
      }
      
      document.body.appendChild(confetti);

      gsap.to(confetti, {
        x: (Math.random() - 0.5) * 1400, // Much wider spread
        y: (Math.random() - 0.5) * 1000 - 200, // Much more vertical spread
        opacity: 0,
        rotation: Math.random() * 720,
        duration: 2.5 + Math.random() * 1.5,
        ease: "power2.out",
        onComplete: () => confetti.remove(),
      });
    }
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-4 transition-all duration-500 ${
      isVisible ? "bg-black/50" : "bg-black/0"
    }`}>
      <div ref={mainContainerRef} className={`relative w-full max-w-2xl transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-8"
      }`}>
        {/* Envelope */}
        <div ref={envelopeRef} className="relative w-full aspect-[4/3] perspective-1000">
          {/* Envelope Body */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg shadow-2xl">
            {/* Envelope Flap */}
            <div
              className={`absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-br from-amber-100 to-amber-200 origin-top transition-transform duration-1000 ease-out ${
                isOpened ? "-rotate-x-180" : ""
              }`}
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Wax Seal */}
              {!isOpened && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-red-600 rounded-full shadow-lg flex items-center justify-center animate-pulse">
                  <svg
                    className="w-10 h-10 fill-red-400"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              )}
            </div>

            {/* Letter inside */}
            <div
              className={`absolute inset-8 bg-white rounded shadow-xl transition-all duration-1000 ease-out overflow-hidden ${
                isOpened
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="h-full overflow-y-auto p-8">
                {/* Letter content */}
                <div className="space-y-6">
                  <div className="text-center border-b border-gray-200 pb-4">
                    <h2 className="text-4xl font-playfair mb-2">Dragostea Mea</h2>
                    <p className="text-sm text-gray-500">O Scrisoare Pentru Tine</p>
                  </div>

                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p className="text-lg italic text-center">
                      În această zi specială, vreau să știi cât de norocos sunt să te am în viața mea și că te iubesc,
                      cu fiecare bătaie a inimii mele. Promit că îți voi fi alături, oricât ar fi drumul de greu, oricând, 
                      orice s-ar întâmpla.
                    </p>

                    <p>
                      Fiecare moment pe care îl petrecem împreună este un dar minunat, le voi păstra aproape de inima mea pentru 
                      totdeauna. Zâmbetul și energia ta dinamică îmi luminează cele mai întunecate zile, râsul tău este mai 
                      dulce decât mierea și mai melodic decât orice melodie pe care o voi asculta vreodată, iar dragostea ta 
                      este cea mai mare binecuvântare pe care o voi primi, chiar dacă uneori îți mai greșesc.
                    </p>

                    <p>
                      Astăzi, când sărbătorim un alt an al existenței tale frumoase, vreau să îți reamintesc cât de 
                      specială ești, nu doar pentru mine, ci și pentru toată lumea a cărei viață o atingi, atât familia ta, 
                      cât și prietenii tăi. Bunătatea, puterea și grația ta mă inspiră în fiecare zi și mă fac să mă îndrăgostesc
                      de tine din ce în ce mai mult, în fiecare zi, in fiecare clipă.
                    </p>

                    <p>
                      Prin felul tău de a fi — blândețea, răbdarea, inteligența, puterea de a ierta și iubirea pe care mi-o porți,
                      mă înveți să fiu un om mai bun, un bărbat mai puternic și mai înțelept. Mă inspiri să cresc, să iubesc mai curat
                      și mai sincer, să privesc lumea cu mai multă speranță. Pentru tot ceea ce ești și pentru tot ceea ce mă ajuți să devin, 
                      te iubesc mai mult decât pot cuvintele să spună.
                    </p>

                    <p>
                      Îți urez să fie un an plin de aventuri, bucurii, reușite, râsete, dragoste și amintiri frumoase împreună. Îți doresc din
                      toată inima să intri la Medicină și să ajungi un medic excepțional. 
                      
                      La mulți ani, dragostea mea!
                    </p>
                    <div className="pt-6 text-right">
                      <div className="text-xl font-playfair italic inline-block">
                        <p>Al Tău Pentru Totdeauna,</p>
                        <p className="flex justify-end items-center gap-2">
                          Andrei
                          <svg
                            className="w-5 h-5 fill-red-500 mt-1"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          {!isOpened ? (
            <button
              onClick={() => setIsOpened(true)}
              className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors shadow-lg"
            >
              Deschide Plicul
            </button>
          ) : (
            <button
              onClick={onClose}
              className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors shadow-lg"
            >
              Închide Scrisoarea
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
