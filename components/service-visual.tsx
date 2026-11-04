import Image from "next/image";

type ServiceVisualProps = {
  service: { title: string; image: string };
  className?: string;
  sizes: string;
};

export default function ServiceVisual({ service, className = "", sizes }: ServiceVisualProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image src={service.image} alt={service.title} fill sizes={sizes} className="object-cover" />
    </div>
  );
}
