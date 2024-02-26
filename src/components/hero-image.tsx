import Image from "next/image";
import hero from "@/assets/hero-memoji.webp";

export default function HeroImage() {
  return (
    <div className="relative size-[250px] rounded-full bg-secondary lg:size-[400px]">
      <Image
        priority={true}
        src={hero}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform-gpu"
        draggable="false"
        alt="computer"
        width={300}
        height={300}
      />
    </div>
  );
}
