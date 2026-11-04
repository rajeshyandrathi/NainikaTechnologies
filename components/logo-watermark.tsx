import Image from "next/image";

type LogoWatermarkProps = {
  className?: string;
};

export default function LogoWatermark({ className = "top-1/2 -translate-y-1/2" }: LogoWatermarkProps) {
  return (
    <Image
      src="/logo-mark.svg"
      alt=""
      width={560}
      height={618}
      unoptimized
      className={`absolute -right-12 lg:-right-16 h-auto w-64 lg:w-[560px] opacity-[0.07] pointer-events-none select-none ${className}`}
    />
  );
}
