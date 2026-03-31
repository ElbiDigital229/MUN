import Image from "next/image";

interface SpeakerCardProps {
  name: string;
  event: string;
  image: string;
}

export default function SpeakerCard({ name, event, image }: SpeakerCardProps) {
  return (
    <div className="relative aspect-[3/4] rounded-sm overflow-hidden group cursor-pointer">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-white text-lg font-medium leading-snug">
          {name}
        </h3>
        <p className="text-cta text-sm mt-1">{event}</p>
      </div>
    </div>
  );
}
