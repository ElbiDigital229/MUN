import Link from "next/link";

const impactItems = [
  {
    number: "01",
    text: "International training in 150 countries worldwide, focused on geopolitical topics with innovative methods.",
  },
  {
    number: "02",
    text: "Creation of unique events globally where students who have trained in our courses meet in person and engage in discussions.",
  },
  {
    number: "03",
    text: "A bridge between new generations with world leaders.",
  },
  {
    number: "04",
    text: "A community of changers for a new ruling class.",
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
                What is Change
                <br />
                the World
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
                Change the World Academy (CWA) is a global community dedicated
                to empowering students to excel academically, develop essential
                skills, build influential networks, and prepare for the
                international job market.
              </p>
              <p>
                Born from over 25 years of experience of{" "}
                <strong className="text-white">
                  Associazione Diplomatici (AD)—an NGO with Special Consultative
                  Status with the United Nations Economic and Social Council
                  (ECOSOC)
                </strong>
                —CWA unites all of AD&apos;s programs under one mission: to
                inspire the next generation of global leaders.
              </p>
            </div>
          </div>

          {/* Right Column - More body text */}
          <div className="text-white/70 text-base leading-relaxed space-y-6 lg:pt-6">
            <p>
              At the heart of our academy is a state-of-the-art digital
              e-learning platform, tailored to meet the diverse needs of our
              students. From mastering the role of a delegate at Model United
              Nations to navigating everyday student life in any school or
              university in any city of the world, our platform provides the
              tools and resources needed for success. By breaking down
              geographical barriers, it offers personalized learning
              experiences, empowering students to learn at their own pace,
              anytime and anywhere.
            </p>
            <p>
              With a community of over 100,000 young game changers from every
              corner of the world, we are nurturing a generation ready to lead
              with purpose and shape a better tomorrow. At CWA, we believe that
              education knows no boundaries—and neither do the dreams of our
              students.
            </p>
            <p className="text-white font-medium italic">
              Together, we are building the leaders of the future.
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
