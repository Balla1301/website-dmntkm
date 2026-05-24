import { FacebookIcon, InstagramIcon, TikTokIcon, YouTubeIcon } from "./Icons";

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1DmDirgJZ2/?mibextid=wwXIfr",
    Icon: FacebookIcon,
    color: "hover:bg-[#1877F2] hover:text-white",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/daaramadjmahounnouraynitkm?igsh=MTNtOXU2Nmdqajlkdw%3D%3D&utm_source=qr",
    Icon: InstagramIcon,
    color: "hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@daaramadjmahounn?_r=1&_t=ZS-96dATr02FgS",
    Icon: TikTokIcon,
    color: "hover:bg-black hover:text-white",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@daaramadjmahounnouraynitkm?si=CAZOGpgr76A1JNRv",
    Icon: YouTubeIcon,
    color: "hover:bg-[#FF0000] hover:text-white",
  },
];

type Variant = "header" | "footer" | "large";

export default function SocialLinks({
  variant = "footer",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const sizes: Record<Variant, string> = {
    header: "h-9 w-9",
    footer: "h-10 w-10",
    large: "h-12 w-12",
  };
  const iconSizes: Record<Variant, string> = {
    header: "w-4 h-4",
    footer: "w-5 h-5",
    large: "w-6 h-6",
  };
  const base =
    variant === "header"
      ? "border border-mouride-green/20 text-mouride-dark"
      : "bg-white/10 text-mouride-cream";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {socials.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.name}
          className={`${sizes[variant]} ${base} ${s.color} inline-flex items-center justify-center rounded-full transition-all`}
        >
          <s.Icon className={iconSizes[variant]} />
        </a>
      ))}
    </div>
  );
}
