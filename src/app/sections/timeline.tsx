"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Lottie from "lottie-react";
import cherryBlossomAnimation from "../../../public/cherry blossom.json";

gsap.registerPlugin(ScrollTrigger);

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  emoji: string;
  color: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
}

export default function TimelineSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<(HTMLElement | null)[]>([]);

  const events: TimelineEvent[] = [
    {
      date: "15 Ianuarie 2023",
      title: "Prima Întâlnire",
      description: "Ziua în care ne-am cunoscut și am știut că ești specială. Ochii tăi m-au captivat instant.",
      emoji: "💫",
      color: "primary",
    },
    {
      date: "10 Februarie 2023",
      title: "Primul Date",
      description: "Prima noastră întâlnire adevărată. Am râs toată seara și timpul s-a oprit din loc.",
      emoji: "🌹",
      color: "error",
    },
    {
      date: "14 Martie 2023",
      title: "Primul Sărut",
      description: "Sub cerul înstelatat, totul a devenit magic. Momentul care a schimbat totul.",
      emoji: "✨",
      color: "warning",
    },
    {
      date: "1 Mai 2023",
      title: "Împreună Oficial",
      description: "Ziua în care am devenit un cuplu. Începutul celei mai frumoase povești.",
      emoji: "💑",
      color: "secondary",
    },
    {
      date: "15 Iulie 2023",
      title: "Prima Vacanță",
      description: "Prima noastră aventură împreună la mare. Apusuri, plimbări pe plajă și amintiri neprețuite.",
      emoji: "🏖️",
      color: "info",
    },
    {
      date: "20 Septembrie 2023",
      title: "Prima Aniversare",
      description: "Sărbătorind 6 luni împreună. Fiecare zi cu tine este un cadou.",
      emoji: "🎉",
      color: "success",
    },
    {
      date: "24 Decembrie 2023",
      title: "Primul Crăciun",
      description: "Sărbătorind împreună cele mai frumoase sărbători. Căldură, iubire și bucurie.",
      emoji: "🎄",
      color: "error",
    },
    {
      date: "14 Februarie 2024",
      title: "Ziua Îndrăgostiților",
      description: "Celebrând dragostea noastră într-un mod special. Tu ești Valentine-ul meu pentru totdeauna.",
      emoji: "💝",
      color: "error",
    },
    {
      date: "Astăzi",
      title: "Ziua Ta Specială",
      description: "Sărbătorindu-te pe tine, persoana care îmi face fiecare zi mai frumoasă. La mulți ani, iubirea mea!",
      emoji: "🎂",
      color: "primary",
    },
  ];

  useEffect(() => {
    // Animate each event on scroll
    eventsRef.current.forEach((event, index) => {
      if (!event) return;

      gsap.set(event, {
        opacity: 0,
        y: 50,
      });

      ScrollTrigger.create({
        trigger: event,
        start: "top 80%",
        onEnter: () => {
          gsap.to(event, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.2)",
          });
        },
        once: true,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Lily Background Images */}
      <div className="absolute left-0 top-0 bottom-0 pointer-events-none z-0">
        <img 
          src="/left-lily.png" 
          alt="Left Lily" 
          className="h-full object-cover opacity-50"
          style={{ width: 'auto' }}
        />
      </div>
      <div className="absolute right-0 top-0 bottom-0 pointer-events-none z-0">
        <img 
          src="/right-lily.png" 
          alt="Right Lily" 
          className="h-full object-cover opacity-50"
          style={{ width: 'auto' }}
        />
      </div>
      
      {/* Scattered Lottie Animations */}
      <div className="absolute top-[10%] left-[5%] pointer-events-none z-0" style={{width: '12rem'}}>
        <Lottie animationData={cherryBlossomAnimation} loop={true} autoplay={true} />
      </div>
      <div className="absolute top-[25%] right-[8%] pointer-events-none z-0" style={{width: '16rem'}}>
        <Lottie animationData={cherryBlossomAnimation} loop={true} autoplay={true} />
      </div>
      <div className="absolute top-[45%] left-[3%] pointer-events-none z-0" style={{width: '14rem'}}>
        <Lottie animationData={cherryBlossomAnimation} loop={true} autoplay={true} />
      </div>
      <div className="absolute top-[60%] right-[10%] pointer-events-none z-0" style={{width: '18rem'}}>
        <Lottie animationData={cherryBlossomAnimation} loop={true} autoplay={true} />
      </div>
      <div className="absolute top-[80%] left-[7%] pointer-events-none z-0" style={{width: '15rem'}}>
        <Lottie animationData={cherryBlossomAnimation} loop={true} autoplay={true} />
      </div>
      <div className="absolute top-[35%] right-[5%] pointer-events-none z-0" style={{width: '13rem'}}>
        <Lottie animationData={cherryBlossomAnimation} loop={true} autoplay={true} />
      </div>
      <div className="absolute top-[70%] right-[12%] pointer-events-none z-0" style={{width: '17rem'}}>
        <Lottie animationData={cherryBlossomAnimation} loop={true} autoplay={true} />
      </div>
      <div className="absolute top-[15%] left-[15%] pointer-events-none z-0" style={{width: '11rem'}}>
        <Lottie animationData={cherryBlossomAnimation} loop={true} autoplay={true} />
      </div>
      <div className="absolute top-[50%] left-[12%] pointer-events-none z-0" style={{width: '14rem'}}>
        <Lottie animationData={cherryBlossomAnimation} loop={true} autoplay={true} />
      </div>
      <div className="absolute top-[90%] right-[6%] pointer-events-none z-0" style={{width: '16rem'}}>
        <Lottie animationData={cherryBlossomAnimation} loop={true} autoplay={true} />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 
            className="text-5xl md:text-6xl font-playfair mb-4 text-gray-800"
            data-aos="fade-down"
          >
            Povestea Noastră
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
            className="text-xl text-gray-600"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Fiecare moment împreună este parte din frumoasa noastră călătorie
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef}>
          <Timeline position="alternate">
            {events.map((event, index) => (
              <TimelineItem 
                key={index}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
              >
                <TimelineOppositeContent
                  ref={(el) => {
                    if (index % 2 === 0) eventsRef.current[index] = el;
                  }}
                  sx={{ m: 'auto 0' }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                  className="font-playfair"
                >
                  <div className="text-base font-semibold text-red-500 mb-1">
                    {event.date}
                  </div>
                  <div className="text-4xl mb-2">{event.emoji}</div>
                </TimelineOppositeContent>
                
                <TimelineSeparator>
                  <TimelineConnector sx={{ bgcolor: '#f472b6' }} />
                  <TimelineDot color={event.color} sx={{ boxShadow: 3 }}>
                    <div className="w-3 h-3"></div>
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: '#f472b6' }} />
                </TimelineSeparator>
                
                <TimelineContent
                  ref={(el) => {
                    if (index % 2 === 1) eventsRef.current[index] = el;
                  }}
                  sx={{ py: '12px', px: 2 }}
                >
                  <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
                    <h3 className="text-2xl font-playfair text-gray-800 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                    <div className="mt-4 h-1 bg-gradient-to-r from-pink-400 via-red-400 to-purple-400 rounded-full"></div>
                  </div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>

        {/* Footer */}
        <div className="text-center mt-20">
          <div className="inline-block bg-white rounded-full px-8 py-4 shadow-xl">
            <p className="text-2xl font-playfair text-gray-700">
              Să continuăm să scriem această poveste împreună... 
              <span className="text-red-500 ml-2">♾️</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}