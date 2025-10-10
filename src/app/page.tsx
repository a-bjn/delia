import Image from "next/image";
import Hero from "./sections/hero";
import Carousel from "./sections/carousel";
import WhyILoveYou from "./sections/why-i-love-you";
import Timeline from "./sections/timeline";

export default function Home() {
  return (
    <div style={{
      background: "linear-gradient(to bottom, #fff5f7 0%, #fff9f5 50%, #fff5f7 100%)"
    }}>
      <Hero/>
      <Carousel/>
      <WhyILoveYou/>
      <Timeline/>
    </div>
  );
}
