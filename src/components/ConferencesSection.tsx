"use client";

import { useRef } from "react";
import ConferenceCard from "@/components/ConferenceCard";

const conferences = [
  {
    title: "Rome",
    date: "CWMUN at FAO in Rome",
    tagline:
      "Debate food security and climate action at our Rome Conference",
    description:
      "Hosted at the UN FAO in Rome; the MUN conference provides an opportunity for delegates to engage in real-world simulations on food security, climate resilience, and sustainable agriculture.",
    image: "/hero-rome.jpg",
    href: "/program/rome",
  },
  {
    title: "New York",
    date: "CWMUN at UN General Assembly HQ",
    tagline:
      "Step into the world\u2019s most important multilateral chamber",
    description:
      "Hosted at the UN General Assembly Headquarters in New York, the conference gives students the opportunity to debate in committees focused on high-level multilateral policy, advocacy skills, and global networking.",
    image: "/hero-nyc.webp",
    href: "/program/nyc",
  },
  {
    title: "Paris",
    date: "CWMUN at UNESCO in Paris",
    tagline:
      "Explore culture, education and policy in UNESCO\u2019s halls",
    description:
      "Hosted at the UNESCO headquarters in Paris; the MUN\u2019s themes include cultural diplomacy, education, and science-policy intersections \u2014 a unique experience inside the world\u2019s cultural governance spaces.",
    image: "/hero-paris.webp",
    href: "/program/paris",
  },
  {
    title: "Singapore",
    date: "CWMUN in Singapore",
    tagline:
      "Tackle global challenges in Singapore\u2019s innovation and diplomacy hub",
    description:
      "Hosted in Singapore; the conference is organised in collaboration with UNICEF and the Italian Embassy. Delegates debate on issues crucial to global perspectives: child rights, digital safety, and innovation-led development.",
    image: "/hero-singapore.webp",
    href: "/program/singapore",
  },
  {
    title: "Emirates",
    date: "CWMUN in Emirates",
    tagline:
      "Engage regional leaders and global peers on resilient cities and economics",
    description:
      "Hosted in the Emirates, the conference is held in collaboration with New York University Abu Dhabi and Harvard University. The MUN serves as a year-end forum focusing on sustainable cities, economic resilience, and humanitarian response.",
    image: "/hero-emirates.webp",
    href: "/program/emirates",
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
              Our MUN Conferences
            </h2>
            <p className="text-white/70 text-base leading-relaxed max-w-3xl">
              MUN International Academy facilitates participation in Change the
              World Model United Nations conferences held at prestigious UN
              venues around the globe. From Rome to New York, Paris to
              Singapore, our delegates debate where real diplomacy takes place.
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
