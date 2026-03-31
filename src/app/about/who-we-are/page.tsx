import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";

export default function WhoWeArePage() {
  return (
    <>
      <Hero
        subtitle="About Us"
        title="Who We Are"
        backgroundImage="/who-we-are.jpg"
      />

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <h2 className="text-primary text-4xl md:text-5xl uppercase tracking-[0.5px] leading-none mb-6">
              <span className="font-extralight">
                Change the World Academy:
              </span>
              <span className="font-bold">
                Building the Future
              </span>
              <br />
              <span className="font-extralight">
                Together
              </span>
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-0">
              Change the World Academy (CWA) was established as the educational
              platform of{" "}
              <a
                href="https://diplomatici.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-lg font-bold hover:underline"
              >
                Associazione Diplomatici
              </a>{" "}
              (AD), a non-governmental organization with Special Consultative
              Status with the United Nations Economic and Social Council
              (ECOSOC).
            </p>

            <div className="mt-16 relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/who-we-are-2.jpg"
                alt="Speaker at Change the World event"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="text-gray-600 text-base leading-relaxed space-y-6">
            <p>
              Built upon more than 25 years of experience in global education,
              CWA is a global community of students seeking to strengthen their
              academic background, develop new skills, expand their networks,
              and prepare for the international job market.
            </p>

            <p>
              The Academy brings together all programs promoted by Associazione
              Diplomatici, with its flagship initiative being the Change the
              World Model United Nations (CWMUN). This international simulation
              engages over 10,000 students annually, offering them the
              opportunity to debate major global issues, take on the roles of UN
              ambassadors, and experience the inner workings of international
              diplomacy.
            </p>

            <p>
              Recognized today as the largest youth forum of its kind worldwide,
              CWMUN takes place in New York City, Abu Dhabi, Dubai, Paris,
              Singapore, Brussels, and Rome.
            </p>

            <p className="font-bold">
              Through its programs, Change the World Academy aims to reshape
              global and geopolitical education by promoting key values such as
              democracy, tolerance, inclusivity, and multiculturalism.
            </p>

            <div className="flex flex-col md:flex-row gap-6 pt-6">
              <a
                href="https://diplomatici.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-primary/10 text-primary text-base tracking-wide rounded hover:bg-primary/20 transition-colors"
              >
                Learn more about Diplomatici
              </a>
              <Link
                href="/about/our-mission"
                className="px-8 py-3 bg-cta text-primary text-base tracking-wide rounded hover:bg-cta-hover transition-colors"
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
