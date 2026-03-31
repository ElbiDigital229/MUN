import TestimonialCard from "@/components/TestimonialCard";

const testimonials = [
  {
    quote:
      "It was wonderful to find that so many international students visited my country for the Change the World MUN. Working together was great and made me want to travel and discover new cultures and languages.",
    name: "Maryam Al Zaabi",
    role: "21 years old",
  },
  {
    quote:
      "The reason why I loved Change the World is because it gives the students the ability to learn how to cooperate with others and find a way to all work together from different perspectives to come up with a shared resolution.",
    name: "Emma Egbumokei",
    role: "19 years old",
  },
  {
    quote:
      "Change the World is pure energy: commitment, personal and professional growth, networking. When you realize that there are thousands of young people out there ready to change the world, you feel very energized and motivated.",
    name: "Milad Talakoob",
    role: "24 years old",
  },
  {
    quote:
      "CWMUN is more than just a conference\u2014it\u2019s a transformative journey for students. Watching them develop critical thinking, diplomacy, and leadership skills in such a dynamic, global setting is truly inspiring.",
    name: "Professor Elizabeth Carter",
    role: "Academic Advisor",
  },
  {
    quote:
      "The opportunity for students to engage in real-world discussions, network with peers from across the globe, and step into the shoes of diplomats at CWMUN is unparalleled. It\u2019s an experience that shapes future leaders.",
    name: "Professor Michael Reynolds",
    role: "International Relations Expert",
  },
  {
    quote:
      "CWMUN provides an extraordinary platform where education meets diplomacy. Seeing students grow in confidence, express their ideas with passion, and work towards solutions for global challenges is incredibly rewarding.",
    name: "Professor Sara Montini",
    role: "Education Specialist",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24">
        {/* Centered heading */}
        <div className="text-center mb-16">
          <h2 className="text-primary text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight mb-4">
            What they say about us
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mx-auto">
            Hear from our community of changemakers and academic experts about
            their experiences with Change the World Academy
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.name}
              quote={t.quote}
              name={t.name}
              role={t.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
