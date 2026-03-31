import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";

export default function MissionPage() {
  return (
    <>
      <Hero
        subtitle="About Us"
        title="Our Mission"
        backgroundImage="/hero-mission.jpg"
      />

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <h2 className="text-primary text-4xl md:text-5xl uppercase tracking-[0.5px] leading-none mb-8">
              <span className="font-extralight">
                Our Global Commitment:
              </span>
              <span className="font-bold">
                To Help You Building the World You Deserve
              </span>
            </h2>

            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/mission-students.jpg"
                alt="Students at CWMUN"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="text-gray-600 text-base leading-relaxed space-y-6">
            <p>
              At the heart of everything we do lies a conviction: a better world
              is built through listening deeply, collaborating sincerely, and
              fostering a spirit of unity that crosses cultures and borders.
            </p>

            <p>
              We draw our inspiration from the great international entities that
              serve as beacons of hope for humanity—organizations dedicated to
              dialogue, democracy, peace, and sustainable advancement.
            </p>

            <p>
              Our core objective is to educate, empower, and motivate emerging
              leaders. Leadership development extends beyond conference
              participation—students gain valuable experiences, diplomatic
              abilities, and an international perspective that prepares them for
              meaningful global engagement.
            </p>

            <p>
              We are not just preparing them to create change—we are teaching
              them to embrace it, grow with it, and lead through it.
            </p>

            <p className="font-bold">
              These young leaders are the World Changers, and we are the Academy
              dedicated to guiding and supporting them on their journey to make
              a difference.
            </p>

            <div className="pt-6">
              <Link
                href="/about/our-governance"
                className="px-8 py-3 bg-cta text-primary text-base tracking-wide rounded hover:bg-cta-hover transition-colors inline-block"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
