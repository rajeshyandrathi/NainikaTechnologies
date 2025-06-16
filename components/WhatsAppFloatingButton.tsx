import Image from "next/image";

const whatsappNumber = "270688906854";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 1000,
        //background: "#25D366",
        //borderRadius: "50%",
        //boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-label="Chat with us on WhatsApp"
    >
      <Image
        src="/Whatsappicon.jpeg"
        alt="WhatsApp"
        width={48}
        height={48}
        priority
      />
    </a>
  );
}
