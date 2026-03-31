"use client";

const partners = [
  "UNICEF",
  "TGR",
  "Linkiesta",
  "Fondazione Milan",
  "ASviS",
  "MedOr",
  "Rai Italia",
  "Rai Cultura",
];

export default function PartnersSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-8">
        {/* Centered heading */}
        <div className="text-center mb-10">
          <h2 className="text-primary text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight mb-4">
            Our partners
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mx-auto">
            The organisations and institutions that support the journey of
            Change The World Academy in helping students from all over the world
            build a more enlightened future together.
          </p>
        </div>

        {/* Powered by Diplomatici */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <span className="text-gray-400 text-sm">Powered by</span>
          <img
            src="/logo-diplomatici.jpg"
            alt="Diplomatici"
            className="h-14 w-auto"
          />
        </div>
      </div>

      {/* Infinite carousel with faded edges */}
      <div className="relative overflow-hidden pb-24">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex animate-scroll">
          {/* Double the items for seamless loop */}
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={`${partner}-${i}`}
              className="flex-shrink-0 flex items-center justify-center h-16 px-12"
            >
              <span className="text-gray-400 text-xl font-bold tracking-wider whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 28s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
