import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import VideoSection from "@/components/VideoSection";
import ConferencesSection from "@/components/ConferencesSection";
import KeynoteSpeakers from "@/components/KeynoteSpeakers";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import CWAPlusSection from "@/components/CWAPlusSection";

const heroSlides = [
  {
    title: "Debate Where History is Made",
    description:
      "Debate with peers worldwide, meet diplomats, and turn experience into opportunities.",
    cta: "Explore our conferences",
    ctaLink: "/program",
    backgroundImage: "/hero-nyc.webp",
  },
  {
    title: "Debate Where History is Made",
    description:
      "Debate with peers worldwide, meet diplomats, and turn experience into opportunities.",
    cta: "Book your conference now",
    ctaLink: "/program/singapore",
    backgroundImage: "/hero-singapore.webp",
  },
  {
    title: "Debate Where History is Made",
    description:
      "Debate with peers worldwide, meet diplomats, and turn experience into opportunities.",
    cta: "Book your conference now",
    ctaLink: "/program/emirates",
    backgroundImage: "/hero-emirates.webp",
  },
  {
    title: "Debate Where History is Made",
    description:
      "Debate with peers worldwide, meet diplomats, and turn experience into opportunities.",
    cta: "Book your conference now",
    ctaLink: "/program/paris",
    backgroundImage: "/hero-paris.webp",
  },
  {
    title: "Debate Where History is Made",
    description:
      "Debate with peers worldwide, meet diplomats, and turn experience into opportunities.",
    cta: "Book your conference now",
    ctaLink: "/program/nyc",
    backgroundImage: "/hero-nyc.webp",
  },
  {
    title: "Debate Where History is Made",
    description:
      "Debate with peers worldwide, meet diplomats, and turn experience into opportunities.",
    cta: "Book your conference now",
    ctaLink: "/program/rome",
    backgroundImage: "/hero-rome.jpg",
  },
];

export default function Home() {
  return (
    <>
      <HeroSlider slides={heroSlides} />
      <AboutSection />
      <VideoSection />
      <ConferencesSection />
      <KeynoteSpeakers />
      <CWAPlusSection />
      <TestimonialsSection />
      <PartnersSection />
    </>
  );
}
