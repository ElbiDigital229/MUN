import SpeakerCard from "@/components/SpeakerCard";

const speakers = [
  {
    name: "Bill Clinton",
    event: "CWMUN NYC 2018 & 2022",
    image: "/speaker-1.jpg",
  },
  {
    name: "Bernardino Leon",
    event: "CWMUN Emirates 2024",
    image: "/speaker-2.jpg",
  },
  {
    name: "Dr. Abdullah bin Mohammed Belhaif Al Nuaimi",
    event: "CWMUN Emirates 2024",
    image: "/speaker-3.jpg",
  },
  {
    name: "Valerie Biden Owens",
    event: "CWMUN NYC 2024",
    image: "/speaker-4.jpg",
  },
  {
    name: "Francesco De Gregori",
    event: "CWMUN Emirates 2018, 2019, 2021 & CWMUN NYC 2022",
    image: "/speaker-5.jpg",
  },
  {
    name: "Michel Platini",
    event: "CWMUN NYC 2019 & CWMUN Emirates 2024",
    image: "/speaker-6.jpg",
  },
  {
    name: "Andriy Shevchenko",
    event: "CWMUN NYC 2022",
    image: "/speaker-7.jpg",
  },
  {
    name: "Boris Tadic",
    event: "CWMUN NYC 2023",
    image: "/speaker-8.jpg",
  },
  {
    name: "Amina J. Mohammed",
    event: "CWMUN NYC 2017",
    image: "/speaker-9.jpg",
  },
  {
    name: "Carlo Ancelotti",
    event: "CWMUN NYC 2018",
    image: "/speaker-10.jpg",
  },
  {
    name: "Catherine Colonna",
    event: "CWMUN Paris 2024",
    image: "/speaker-11.jpg",
  },
  {
    name: "Liliana Segre",
    event: "CWMUN NYC 2019, 2025",
    image: "/speaker-12.jpg",
  },
  {
    name: "Melissa Fleming",
    event: "CWMUN NYC 2025",
    image: "/speaker-13.jpg",
  },
  {
    name: "Nickolay Mladenov",
    event: "CWMUN Emirates 2024",
    image: "/speaker-14.jpg",
  },
  {
    name: "Caryl M. Stern",
    event: "CWMUN NYC 2025",
    image: "/speaker-15.jpg",
  },
];

export default function KeynoteSpeakers() {
  return (
    <section className="bg-gradient-to-b from-primary/75 to-primary/85 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24">
        {/* Number | Line | Heading */}
        <div className="flex items-stretch gap-6 mb-16">
          <div className="pt-2">
            <span className="text-white/25 text-lg font-light">04</span>
          </div>
          <div className="w-px bg-white/15 self-stretch" />
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight mb-4">
              Keynote speakers
            </h2>
            <p className="text-white/70 text-base leading-relaxed max-w-3xl">
              Some of the world leaders, world changers and international
              personalities who joined the CWMUN events over time. Click on
              speakers with videos to watch their keynote presentations.
            </p>
          </div>
        </div>

        {/* Speaker grid - 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker) => (
            <SpeakerCard
              key={speaker.name}
              name={speaker.name}
              event={speaker.event}
              image={speaker.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
