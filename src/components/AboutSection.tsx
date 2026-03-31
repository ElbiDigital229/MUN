import Link from "next/link";

const impactItems = [
  {
    number: "01",
    text: "Since 2014, MUN International Academy has opened international doors for 1,500+ students from across Pakistan, giving them the opportunity to step beyond the classroom and build an international network of global peers.",
  },
  {
    number: "02",
    text: "The Academy has successfully facilitated students in gaining internships at the United Nations.",
  },
  {
    number: "03",
    text: "We have served as a bridge between the youth of Italy and the youth of Pakistan, enabling cross-cultural exchange and limitless opportunities.",
  },
  {
    number: "04",
    text: "At its heart, our impact is measured not just in numbers, but in the journeys we help begin — empowering young Pakistanis to see themselves as capable contributors to the global conversation.",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-b from-primary to-primary/90 text-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24">
        {/* Section number + ABOUT US inline */}
        <div className="flex items-baseline gap-4 mb-12">
          <div className="text-white/30 text-sm font-light tracking-wider">
            <span className="text-white/40 text-lg font-light">01</span>
            <span className="mx-1">/05</span>
          </div>
          <p className="text-white text-sm tracking-[0.15em] uppercase font-normal">
            About Us
          </p>
        </div>

        {/* Two column: Heading + body left, more body right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Left Column - Heading + paragraphs */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase leading-none tracking-[1.5px] mb-10">
              <span className="font-light">
                What is MUN
                <br />
                International
                <br />
              </span>
              <span className="font-light text-white/50">
                Academy
                <br />
                About?
              </span>
            </h2>

            <div className="space-y-6 text-white/70 text-base leading-relaxed">
              <p>
                Founded in 2014, MUN International Academy is Pakistan&apos;s
                first and largest academy dedicated to training young people in
                Model United Nations, public speaking, and the art of diplomacy.
                Our purpose is simple yet powerful: to give students the
                confidence, knowledge, and global perspective they need to step
                beyond the classroom and engage with the world.
              </p>
              <p>
                Working in partnership with some of Pakistan&apos;s leading
                schools and universities, we deliver hands-on training programs
                to prepare students to participate in some of the world&apos;s
                top MUN conferences. Through workshops, simulations, and
                mentorship, students learn how to research complex issues,
                communicate their ideas clearly, and collaborate with others to
                build meaningful solutions. These experiences do more than
                prepare students for conferences — they shape confident
                individuals who are able to listen, negotiate, and lead with
                empathy.
              </p>
            </div>
          </div>

          {/* Right Column - More body text */}
          <div className="text-white/70 text-base leading-relaxed space-y-6 lg:pt-6">
            <p>
              Our international partnerships make these experiences even more
              meaningful. MUN International Academy proudly serves as the
              regional partner in Pakistan and the Middle East for Change the
              World Model United Nations (CWMUN), a global initiative of
              Associazione Diplomatici — an Italian organisation with Special
              Consultative Status at the United Nations Economic and Social
              Council (ECOSOC).
            </p>
            <p>
              Through this partnership, our delegates receive the rare
              opportunity to participate in conferences hosted at UN venues,
              such as the UN Headquarters in New York, UNESCO Headquarters in
              Paris, and the UN — FAO Headquarters in Rome, as well as in
              United Nations Centers in Singapore and the Emirates. These
              platforms allow students to debate global challenges where real
              diplomacy takes place — building international networks,
              discovering their voices, and representing Pakistan with
              confidence on the global stage.
            </p>
            <p className="text-white font-medium italic">
              Together, we teach young people to listen, speak, and build
              solutions that matter.
            </p>
          </div>
        </div>

        {/* Our Impact section */}
        <div>
          <h3 className="text-4xl md:text-5xl font-light mb-12">
            Our Impact
          </h3>
          <div className="space-y-6 max-w-3xl">
            {impactItems.map((item) => (
              <div key={item.number} className="flex gap-6 items-start">
                <span className="text-cta/40 text-2xl font-light shrink-0 w-10">
                  {item.number}
                </span>
                <p className="text-white/70 text-base leading-relaxed pt-1">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/about/our-mission"
              className="inline-block px-8 py-3 bg-cta text-primary text-base font-medium tracking-wide rounded hover:bg-cta-hover transition-colors"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
