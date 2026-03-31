import Image from "next/image";
import Link from "next/link";

interface ConferenceCardProps {
  title: string;
  date: string;
  tagline: string;
  description: string;
  image: string;
  href: string;
}

export default function ConferenceCard({
  title,
  date,
  tagline,
  description,
  image,
  href,
}: ConferenceCardProps) {
  return (
    <div className="rounded-lg overflow-hidden bg-white flex flex-col h-full">
      {/* Image with overlay text */}
      <div className="relative h-[280px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-5 right-5">
          <h3 className="text-white text-xl font-medium uppercase leading-snug mb-1">
            Our Change the World MUN{" "}
            <span className="block">{title}</span>
          </h3>
          <p className="text-white/70 text-sm">{date}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h4 className="text-primary font-medium text-base leading-snug mb-3">
          {tagline}
        </h4>
        <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1 line-clamp-4">
          {description}
        </p>
        <Link
          href={href}
          className="block w-full text-center px-6 py-3 bg-cta text-primary text-sm font-medium rounded hover:bg-cta-hover transition-colors"
        >
          Book your conference now
        </Link>
      </div>
    </div>
  );
}
