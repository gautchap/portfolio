import Image from "next/image";
import hero from "@/assets/hero-memoji.webp";

export default function HeroImage() {
  return (
    <div className="rounded-full bg-secondary w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
      <Image
        priority={true}
        quality={100}
        src={hero}
        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        draggable="false"
        alt="computer"
        width={300}
        height={300}
      />
    </div>
  );
}
