import Image from "next/image";

interface HeroProps {
  subtitle?: string;
  title?: string;
  description?: string;
  backgroundImage: string;
}

export default function Hero({
  subtitle,
  title,
  description,
  backgroundImage,
}: HeroProps) {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="object-cover"
        priority
      />

      {/* Blue overlay */}
      <div className="absolute inset-0 bg-primary/70" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          {subtitle && (
            <p className="text-white text-lg font-light mb-4">
              {subtitle}
            </p>
          )}
          {title && (
            <h1 className="text-white text-5xl md:text-7xl font-light uppercase tracking-[1.8px] leading-none mb-8">
              {title}
            </h1>
          )}
          {description && (
            <p className="text-white font-light text-lg max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
