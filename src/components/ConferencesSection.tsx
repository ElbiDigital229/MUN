"use client";

import { useRef } from "react";
import ConferenceCard from "@/components/ConferenceCard";

const conferences = [
  {
    title: "Emirates",
    date: "October 2026",
    tagline:
      "Renewable energy diplomacy: a sustainable path to a global future",
    description:
      "The United Arab Emirates is a land of contrasts, blending modern skyscrapers with vast deserts and stunning coastlines. From the futuristic skyline of Dubai to the cultural heart of Abu Dhabi, the country offers a unique fusion of innovation and tradition.",
    image: "/hero-emirates.webp",
    href: "/program/emirates",
  },
  {
    title: "Rome",
    date: "February 2027",
    tagline:
      "Building the World: Advancing Food Security, Nutrition, and Sustainability for a Better Future",
    description:
      "As the cradle of Western civilization and home to millennia of history, Rome stands as an open-air museum where ancient ruins coexist with vibrant city life. From the majestic Colosseum to the Vatican, Rome offers a unique setting.",
    image: "/hero-rome.jpg",
    href: "/program/rome",
  },
  {
    title: "Paris",
    date: "November 2026",
    tagline:
      "Empowering Minds, Shaping the Future: Advancing Education for a Sustainable and Thriving Future",
    description:
      "The City of Light is renowned for its timeless elegance, artistic legacy, and influence on world affairs. Change the World MUN Paris brings students together in an atmosphere of intellectual curiosity and cultural richness.",
    image: "/hero-paris.webp",
    href: "/program/paris",
  },
  {
    title: "New York City",
    date: "March 2026",
    tagline:
      "Shaping the Future: Empowering Global Collaboration for Sustainable Growth, Innovation, and Unity",
    description:
      "Over 3,000 students gather at the heart of global decision-making, steps from the United Nations headquarters. New York City provides an unparalleled backdrop for diplomatic simulation and leadership development.",
    image: "/hero-nyc.webp",
    href: "/program/nyc",
  },
  {
    title: "Singapore",
    date: "May 2026",
    tagline:
      "Revolutionizing Tomorrow: Harnessing Artificial Intelligence and Robotics for a Sustainable Future",
    description:
      "Singapore serves as the gateway between East and West, and a global leader in innovation and technology. This vibrant city-state offers students a window into Asia's dynamic future.",
    image: "/hero-singapore.webp",
    href: "/program/singapore",
  },
];

export default function ConferencesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    // Scroll by the full visible width (3 cards worth)
    const containerWidth = scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -containerWidth : containerWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-gradient-to-b from-primary/85 to-primary/75 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24">
        {/* Number | Line | Heading */}
        <div className="flex items-stretch gap-6 mb-16">
          <div className="pt-2">
            <span className="text-white/25 text-lg font-light">03</span>
          </div>
          <div className="w-px bg-white/15 self-stretch" />
          <div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight uppercase leading-tight mb-6">
              Our Change the World MUN Conferences
            </h2>
            <p className="text-white/70 text-base leading-relaxed max-w-3xl">
              Every year, Change the World Academy organises multiple conferences
              around the world to shape a global new generation of leaders. From
              the skyscrapers of New York to the deserts of the Emirates,
              you&apos;ll find more than one occasion to shape your future
              together with us.
            </p>
          </div>
        </div>

        {/* Carousel with arrows */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-primary transition-colors z-10"
            aria-label="Previous"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards row */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden snap-x snap-mandatory scroll-smooth"
          >
            {conferences.map((conf) => (
              <div
                key={conf.title}
                className="w-[calc(33.333%-16px)] flex-shrink-0 snap-start"
              >
                <ConferenceCard {...conf} />
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-primary transition-colors z-10"
            aria-label="Next"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Scroll to explore */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <div className="w-12 h-px bg-white/20" />
          <p className="text-white/40 text-sm tracking-wider">
            Scroll to explore
          </p>
          <div className="w-12 h-px bg-white/20" />
        </div>
      </div>
    </section>
  );
}
