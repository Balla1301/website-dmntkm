import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function MosqueIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2c1.5 2 2.5 3 2.5 4.5S13 9 12 9s-2.5-1-2.5-2.5S10.5 4 12 2Z" />
      <path d="M4 21V12a4 4 0 0 1 4-4" />
      <path d="M20 21V12a4 4 0 0 0-4-4" />
      <path d="M9 21v-5a3 3 0 0 1 6 0v5" />
      <path d="M2 21h20" />
      <path d="M12 9v3" />
    </svg>
  );
}

export function PrayerBeadsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="6" cy="12" r="1.5" />
      <circle cx="12" cy="6" r="1.5" />
      <circle cx="18" cy="12" r="1.5" />
      <circle cx="12" cy="18" r="1.5" />
      <circle cx="8.5" cy="7.5" r="1" />
      <circle cx="15.5" cy="7.5" r="1" />
      <circle cx="15.5" cy="16.5" r="1" />
      <circle cx="8.5" cy="16.5" r="1" />
    </svg>
  );
}

export function HandshakeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M11 17 8 14a2 2 0 0 1 0-2.8l5-5a2 2 0 0 1 2.8 0L22 12" />
      <path d="m13 19 1.5 1.5a2 2 0 0 0 2.8-2.8L15 15" />
      <path d="M16 16.5 17.5 18a2 2 0 0 0 2.8-2.8L18 13" />
      <path d="M2 12 6 8" />
      <path d="m8 19-3-3" />
      <path d="m11 22-3-3 3-3" />
    </svg>
  );
}

export function ServiceIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21c-4-4-7-7-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 4-3 7-7 11Z" />
    </svg>
  );
}

export function CoffeeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z" />
      <path d="M17 10h2a3 3 0 0 1 0 6h-2" />
      <path d="M7 2v3M11 2v3M15 2v3" />
    </svg>
  );
}

export function SpeakerIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M11 5 6 9H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3l5 4Z" />
      <path d="M15 9a4 4 0 0 1 0 6" />
      <path d="M18 6a8 8 0 0 1 0 12" />
    </svg>
  );
}

export function TentIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 20 12 4l9 16" />
      <path d="M12 4v16" />
      <path d="M3 20h18" />
      <path d="M8 20 12 14l4 6" />
    </svg>
  );
}

export function PotIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 9h16l-1 9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3L4 9Z" />
      <path d="M3 9h18" />
      <path d="M9 6c0-2 1-3 3-3s3 1 3 3" />
      <path d="M12 6v3" />
    </svg>
  );
}

export function BookIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4Z" />
      <path d="M20 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8Z" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5" />
      <path d="M14.5 20c0-2.2 1.7-4 4-4 1 0 1.9.3 2.5.8" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="m2 7 10 7 10-7" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 22s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12 5 5 9-11" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m12 3 2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.7 6.6 19.5l1.2-6L3.3 9.3l6.1-.7L12 3Z" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 11c0-3 2-5 5-5v2c-1.7 0-3 1.3-3 3v1h3v6H4Z" />
      <path d="M14 11c0-3 2-5 5-5v2c-1.7 0-3 1.3-3 3v1h3v6h-5Z" />
    </svg>
  );
}
