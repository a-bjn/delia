"use client";

import { useState, useEffect } from "react";
import Letter from "../components/letter";
import Curtains from "../components/curtains";

export default function Hero() {
  const [showLetter, setShowLetter] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);
  
  useEffect(() => {
    // Start playing the background music when the component mounts
    const iframe = document.getElementById('background-music') as HTMLIFrameElement;
    if (iframe && !musicStarted) {
      // YouTube iframe will autoplay if allowed by browser
      iframe.src = "https://www.youtube.com/embed/LG558yBrNfk?autoplay=1&loop=1&playlist=LG558yBrNfk&mute=0&controls=0&showinfo=0&rel=0&modestbranding=1";
      setMusicStarted(true);
    }
  }, [musicStarted]);

  const startMusic = () => {
    const iframe = document.getElementById('background-music') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = "https://www.youtube.com/embed/LG558yBrNfk?autoplay=1&loop=1&playlist=LG558yBrNfk&mute=0&controls=0&showinfo=0&rel=0&modestbranding=1";
      setMusicStarted(true);
    }
  };

  return (
    <section className="flex flex-col min-h-screen justify-center items-center w-full px-6 relative overflow-hidden">
      {/* Background Music */}
      <iframe 
        id="background-music"
        className="hidden"
        width="0" 
        height="0"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
      
      <Curtains />
      
      {/* Bouquet Image Behind Content */}
      <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none">
        <img 
          src="/bouchet.png" 
          alt="Bouquet" 
          style={{ width: '64rem', height: '64rem' }}
          className="object-contain opacity-20"
        />
      </div>
      
      {/* Heart icon in top left */}
      <div className="absolute top-12 left-12 z-10">
        <svg
          className="w-16 h-16 fill-gray-300"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        <h1 
          className="text-8xl font-medium text-zinc-800 mb-4"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          La Multi Ani!
        </h1>
        <h2 
          className="text-6xl font-normal text-zinc-700 mb-8"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          Iubita mea
        </h2>
        {/* Decorative divider with heart */}
        <div 
          className="flex items-center gap-4 mb-8"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <div className="w-16 h-px bg-gray-400"></div>
          <svg
            className="w-5 h-5 fill-gray-800"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <div className="w-16 h-px bg-gray-400"></div>
        </div>

        <p 
          className="text-2xl leading-relaxed mb-12 text-gray-700"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          Astăzi te sărbătorim pe tine, cea mai minunată persoană din viața mea. 
          Fiecare moment cu tine este un dar și sunt atât de recunoscător să împart 
          această zi specială cu tine.
        </p>

        <button 
          onClick={() => {
            startMusic();
            setShowLetter(true);
          }}
          className="bg-gray-900 text-white font-sans text-base px-8 py-4 rounded-full hover:bg-gray-800 transition-colors flex items-center gap-3"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          Deschide Mesajul Tău
          <svg
            className="w-5 h-5 fill-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>

      {/* Letter Modal */}
      {showLetter && <Letter onClose={() => setShowLetter(false)} />}

      
    </section>
  );
}