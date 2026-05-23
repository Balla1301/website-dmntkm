import Image from "next/image";

export default function Logo({
  size = 48,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src="/logo.png"
      alt="Daara Madjmahoun Nourayni — Touba Keur Massar"
      width={size}
      height={size}
      priority
      className={`object-contain ${className}`}
    />
  );
}
