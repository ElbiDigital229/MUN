import Image from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  image?: string;
}

export default function TeamCard({ name, role, image }: TeamCardProps) {
  const nameParts = name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");
  const initials = nameParts.map((n) => n[0]).join("");

  return (
    <div className="relative aspect-[3/4] rounded-lg overflow-hidden group">
      {/* Background image or placeholder */}
      {image ? (
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
          <span className="text-white/20 text-8xl font-bold">{initials}</span>
        </div>
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* Name - top left */}
      <div className="absolute top-5 left-5 text-white">
        <span className="block text-lg font-light">{firstName}</span>
        <span className="block text-2xl font-bold uppercase tracking-wide">
          {lastName}
        </span>
      </div>

      {/* Role - bottom center */}
      <div className="absolute bottom-5 left-5 right-5">
        <div className="bg-cta text-primary text-sm font-medium text-center py-2.5 px-4 rounded-full">
          {role}
        </div>
      </div>
    </div>
  );
}
