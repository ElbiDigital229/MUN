import TestimonialCard from "@/components/TestimonialCard";

const testimonials = [
  {
    quote:
      "We\u2019re very excited to see the delegation from Pakistan with MUN International and Ali Aamir. We\u2019re very happy with this partnership and we hope to see more students coming from Pakistan to our conferences in New York, Emirates, Paris, and all over the globe.",
    name: "Alessandro Dimaiuta",
    role: "Executive Director, Change the World Academy",
  },
  {
    quote:
      "The Conference provided an excellent opportunity to meet people from various ethnicities and made this a very exciting experience.",
    name: "Alina Amjad",
    role: "Recipient of the Best Delegate Award at Rome 2026",
  },
  {
    quote:
      "It was an honor to come to Rome and represent my country, Pakistan, at the CWMUN held at the UN-FAO Headquarters. I was very excited to be here and to represent the United States of America in my Committee, the International Labour Organisation.",
    name: "Acacia Khurram Nawab",
    role: "Recipient of the Best Position Paper Award at Rome 2026",
  },
  {
    quote:
      "I\u2019m so filled with gratitude that we get to be here in Rome and that we were given an amazing opportunity to participate in the CWMUN. I\u2019m so grateful to the MUN International Academy and the organisers of CWMUN.",
    name: "Eshal Ansari",
    role: "Delegate",
  },
  {
    quote:
      "I\u2019m so happy to be representing Pakistan, and to add another award to Pakistan\u2019s list. The experience has been amazing and an honour.",
    name: "Ali Kumayl Rashid",
    role: "Delegate",
  },
  {
    quote:
      "I coached four delegates who participated in the FAO Committee as the United Kingdom, and won an honorable mention award. We also had a delegation representing the United States at the ILO, and they secured the best position paper award. Needless to say, I\u2019m very happy as their coach.",
    name: "Jennifer Johnson",
    role: "Coach and Founder of Skills Enrichment Institute",
  },
  {
    quote:
      "In my capacity as a chaperone, I have attended multiple conferences of MUN International, in New York, Rome, and the Emirates. I would definitely encourage delegates to participate, because debates not only foster critical and analytical skills, but also provide an opportunity to represent your school and your country.",
    name: "Maham Zain",
    role: "Co-Curriculum & Alumni Coordinator, Round Square REP",
  },
  {
    quote:
      "I had a wonderful time in Rome; we had very intense debates and I\u2019m very glad that the MUN International delegation has won awards. The Academy has also done a wonderful job managing the logistics!",
    name: "Azm Aftab",
    role: "Head of EPCAD, All Pakistan Beaconhouse International College",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24">
        {/* Centered heading */}
        <div className="text-center mb-16">
          <h2 className="text-primary text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight mb-4">
            What They Say About Us
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mx-auto">
            Hear from our Delegates, Trainers, and Partners About Their
            Experience With MUN International Academy
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
