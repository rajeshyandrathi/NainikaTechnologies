import Image from "next/image";
import type { Service } from "@/lib/services";

type ServiceVisualProps = {
  service: Service;
  className?: string;
  sizes: string;
};

export default function ServiceVisual({ service, className = "", sizes }: ServiceVisualProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {service.image ? (
        <Image src={service.image} alt={service.title} fill sizes={sizes} className="object-cover" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-600 to-blue-900 text-white">
          <service.icon size={72} strokeWidth={1.25} aria-hidden="true" />
        </div>
      )}
    </div>
  );
}
