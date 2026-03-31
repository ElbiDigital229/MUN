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
    title: "Life Changing Experiences",
    description:
      "Empowering youth through education, diplomacy and international opportunities",
    cta: "Explore our conferences",
    ctaLink: "/program",
    backgroundImage: "/hero-nyc.webp",
  },
  {
    subtitle: "May 2026",
    title: "Change the World MUN Singapore",
    description:
      "Revolutionizing Tomorrow: Harnessing Artificial Intelligence and Robotics for a Sustainable Future",
    cta: "Book your conference now",
    ctaLink: "/program/singapore",
    backgroundImage: "/hero-singapore.webp",
  },
  {
    subtitle: "October 2025",
    title: "Change the World MUN Emirates",
    description:
      "Renewable Energy Diplomacy: A Sustainable Path to a Global Future",
    cta: "Book your conference now",
    ctaLink: "/program/emirates",
    backgroundImage: "/hero-emirates.webp",
  },
  {
    subtitle: "November 2025",
    title: "Change the World MUN Paris",
    description:
      "Empowering Minds, Shaping the Future: Advancing Education for a Sustainable and Thriving Future",
    cta: "Book your conference now",
    ctaLink: "/program/paris",
    backgroundImage: "/hero-paris.webp",
  },
  {
    subtitle: "March 2026",
    title: "Change the World MUN NYC",
    description:
      "Shaping the Future: Empowering Global Collaboration for Sustainable Growth, Innovation, and Unity",
    cta: "Book your conference now",
    ctaLink: "/program/nyc",
    backgroundImage: "/hero-nyc.webp",
  },
  {
    subtitle: "February 2027",
    title: "Change the World MUN Rome",
    description:
      "Building the World: Advancing Food Security, Nutrition, and Sustainability for a Better Future",
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
