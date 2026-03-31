import Hero from "@/components/Hero";
import TeamCard from "@/components/TeamCard";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

const leadershipCommittee: TeamMember[] = [
  {
    name: "Claudio Corbino",
    role: "CEO & Founder",
    bio: "Founded Associazione Diplomatici in 2000 and established the Change the World Model United Nations in 2012. He holds a Law degree from the University of Catania, graduated cum laude.",
    image: "/team-1.jpg",
  },
  {
    name: "Salvatore Carrubba",
    role: "Chairman",
    bio: "Journalist and writer. Former Editor-in-Chief of a leading Italian economic weekly and financial daily. Served as Milan Culture and Foreign Relations Councilor for eight years. President of Accademia del Teatro alla Scala and Piccolo Teatro di Milano.",
    image: "/team-2.jpg",
  },
  {
    name: "Fabrizio Rindi",
    role: "President, Steering & Strategic Committee",
    bio: "Holds an Economics and Business Sciences degree from La Sapienza University and completed an Advanced Management program at INSEAD. Held executive positions at Winterthur, Unipol, Credit Suisse, and Julius Baer. Appointed Cavaliere del Lavoro in 2003.",
    image: "/team-3.jpg",
  },
  {
    name: "Chiara Boni",
    role: "Designer & Cavaliere del Lavoro",
    bio: "Italian fashion designer who founded Chiara Boni La Petite Robe in 2007, known for timeless, versatile, and travel-friendly garments.",
    image: "/team-4.jpg",
  },
  {
    name: "Boris Collardi",
    role: "President of the Advisory Board",
    bio: "Global wealth management industry leader. Third largest shareholder and Board Member of EFG International AG. Former CEO of Julius Baer, appointed at age 34 in 2009. Joined Pictet Group in 2018 as managing partner.",
    image: "/team-5.jpg",
  },
];

const advisoryBoard: TeamMember[] = [
  {
    name: "Serge Telle",
    role: "Member",
    bio: "Minister of State of Monaco (2016–2020). Studied at Sciences Po and INALCO. Diplomatic career began in 1982 at the French Embassy in Tanzania.",
    image: "/team-6.jpg",
  },
  {
    name: "Michael Møller",
    role: "Member",
    bio: "Danish diplomat with over 40 years of UN experience. 12th Director-General of the UN Office at Geneva (2013–2019). Secretary-General of the Conference on Disarmament.",
    image: "/team-9.jpg",
  },
  {
    name: "Catherine Colonna",
    role: "Member",
    bio: "French diplomat since 1983. Minister for Europe and Foreign Affairs (2022–2024). Served as Permanent Representative to UNESCO and Ambassador to the United Kingdom.",
    image: "/team-7.jpg",
  },
  {
    name: "Caryl M. Stern",
    role: "Member",
    bio: "Chief Impact Officer at LionTree. Former Executive Director of the Walton Family Foundation. President and CEO of UNICEF USA for 14 years. Named one of \"25 Women Changing the World in 2017\" by People Magazine.",
    image: "/team-8.jpg",
  },
  {
    name: "Bernardino León",
    role: "Member",
    bio: "Spanish diplomat since 1990. Served as State Secretary of the Spanish Ministry of Foreign Affairs. Advisor to the EU Special Envoy for the Middle East and Sherpa for the G20.",
    image: "/team-11.jpg",
  },
  {
    name: "Giampiero Massolo",
    role: "Member",
    bio: "Italian diplomatic service since 1978. Served as Secretary-General of the Ministry of Foreign Affairs (2007–2012) and Director-General of the Department of Information for Security (2012–2016).",
    image: "/team-12.jpg",
  },
];

const scientificCommittee: TeamMember[] = [
  {
    name: "Giuseppe Ayala",
    role: "Italian Magistrate",
    bio: "Prosecutor in the historic Maxi Trial (1986–1987), leading the conviction of hundreds of Sicilian Mafia members. Associated with judges Giovanni Falcone and Paolo Borsellino.",
    image: "/team-15.jpg",
  },
  {
    name: "Tania Cagnotto",
    role: "Diving World Champion 2016",
    bio: "One of Italy's most successful divers. Gold medal at the 2015 FINA World Championship. First Italian female diver to win a World Championship. Five-time Olympian and 20-time European champion.",
    image: "/team-10.jpg",
  },
  {
    name: "Lucio Caracciolo",
    role: "Editor in Chief of LIMES",
    bio: "Italian journalist and geopolitical analyst. Founded LIMES magazine in 1993, Italy's leading geopolitics journal. Teaches Political and Economic Geography at San Raffaele University, Milan.",
    image: "/team-19.jpg",
  },
  {
    name: "Maria Latella",
    role: "Journalist",
    bio: "Member of Consiglio Superiore dell'Istruzione. Adjunct Professor at LUISS Guido Carli university. Named Dame of the Republic by President Carlo Azeglio Ciampi in 2005.",
    image: "/team-14.jpg",
  },
  {
    name: "Myrta Merlino",
    role: "Journalist",
    bio: "Italian TV presenter and journalist. Career began in 1994 across major Italian media outlets. Presents \"Pomeriggio 5\" since 2023.",
    image: "/team-16.jpg",
  },
  {
    name: "Dario Nardella",
    role: "Member of the European Parliament",
    bio: "MEP since 2024. Mayor of Florence (2014–2024). First Metropolitan Mayor of Florence. President of Eurocities in 2020.",
    image: "/team-17.jpg",
  },
  {
    name: "Stefano Pistolini",
    role: "Writer, Movie Director and Journalist",
    bio: "Directed music magazines in the 1980s–1990s. Contributed to L'Espresso, Il Manifesto, Il Foglio. Created documentaries for RAI, La7, and Discovery.",
    image: "/team-18.jpg",
  },
  {
    name: "Christian Rocca",
    role: "Editor in Chief of Linkiesta",
    bio: "Italian journalist specializing in political and international affairs. Directed IL monthly magazine (2012–2018). Editorial director of Linkiesta since 2019.",
    image: "/team-13.jpg",
  },
  {
    name: "Marco Tardelli",
    role: "CWMUN Goodwill Ambassador & World Soccer Champion '82",
    bio: "Five-time Italian champion. FIFA World Cup winner 1982. One of only 9 players in history to win all three major European cups.",
    image: "/team-20.jpg",
  },
];

function TeamSection({
  title,
  members,
}: {
  title: string;
  members: TeamMember[];
}) {
  return (
    <div className="mb-20">
      <h2 className="text-primary text-3xl md:text-4xl uppercase tracking-[0.5px] leading-none mb-12">
        <span className="font-extralight">{title}</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member) => (
          <TeamCard
            key={member.name}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
}

export default function GovernancePage() {
  return (
    <>
      <Hero
        subtitle="About Us"
        title="Our Governance"
        description="Strong governance is the foundation of impactful education. Our leadership is committed to transparency, integrity, and excellence across all programs."
        backgroundImage="/hero-governance.jpg"
      />

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <TeamSection
          title="Leadership Committee"
          members={leadershipCommittee}
        />
        <TeamSection title="Advisory Board" members={advisoryBoard} />
        <TeamSection
          title="Scientific Committee"
          members={scientificCommittee}
        />
      </section>
    </>
  );
}
