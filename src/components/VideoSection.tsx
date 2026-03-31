import Link from "next/link";

export default function VideoSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24">
        {/* Number | Line | Content */}
        <div className="flex items-stretch gap-6 mb-12">
          {/* Col 1: Number */}
          <div className="pt-1">
            <span className="text-primary/25 text-lg font-light">02</span>
          </div>

          {/* Col 2: Vertical line */}
          <div className="w-px bg-primary/15 self-stretch" />

          {/* Col 3: Content */}
          <div>
            <p className="text-primary text-sm tracking-[0.1em] uppercase font-normal mb-4">
              Small Steps. Big Global Impact.
            </p>

            <h2 className="text-primary text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight mb-6 max-w-3xl">
              See How We&apos;re Preparing Leaders, One Delegate At A Time
            </h2>

            <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
              Every conversation starts with a voice. Our training gives those
              voices confidence and direction. Watch how a single conference can
              change a life — and how your participation can change yours.
            </p>
          </div>
        </div>

        {/* Video area */}
        <div className="relative w-full aspect-video bg-primary rounded-lg overflow-hidden mb-10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-6">
              <button
                className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white/50 hover:text-white hover:border-white/60 transition-colors"
                aria-label="Rewind"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z" />
                </svg>
              </button>
              <button
                className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                aria-label="Play"
              >
                <svg className="w-7 h-7 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <button
                className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white/50 hover:text-white hover:border-white/60 transition-colors"
                aria-label="Forward"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" />
                </svg>
              </button>
            </div>
          </div>

          <button
            className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-white/60 hover:text-white transition-colors"
            aria-label="Mute"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          </button>
        </div>

        {/* CTA Button - centered */}
        <div className="text-center">
          <Link
            href="/program"
            className="inline-block px-8 py-3.5 bg-cta text-primary text-base font-medium tracking-wide rounded hover:bg-cta-hover transition-colors"
          >
            Explore our Conferences
          </Link>
        </div>

        {/* Youth Diplomatic Circuit */}
        <div className="mt-24 border-t border-primary/10 pt-16">
          <h3 className="text-primary text-3xl md:text-4xl font-extralight leading-tight mb-6">
            Youth Diplomatic Circuit
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-gray-500 text-base leading-relaxed">
            <p>
              The Youth Diplomatic Circuit serves as a bridge between ambitious
              students and the people who shape global policy. Composed of senior
              diplomats, policymakers, judges, and leaders, this network gives
              our delegates and partner institutions direct access to mentorship,
              career guidance, and real-world insight beyond textbooks.
            </p>
            <div className="space-y-4">
              <p>
                Through speaker series, mentorship sessions, briefings, and
                panel discussions, students meet practitioners who have
                negotiated treaties, led ministries, and advised international
                organisations. These relationships open doors to internships,
                collaborations, and practical advice on navigating careers in
                diplomacy, law, and development.
              </p>
              <p>
                Institutions partnering with us benefit too: we organise
                workshops and roundtables that connect faculty and students with
                this global community, strengthening institutional programmes
                and creating pathways for joint projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
