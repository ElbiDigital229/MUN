interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

export default function TestimonialCard({
  quote,
  name,
  role,
}: TestimonialCardProps) {
  return (
    <div className="bg-primary rounded-md p-10 flex flex-col justify-between h-full">
      <p className="text-white/80 text-base leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>

      <div className="mt-6">
        <p className="text-cta font-bold text-base">{name}</p>
        <p className="text-white/60 text-sm mt-0.5">{role}</p>
      </div>
    </div>
  );
}
