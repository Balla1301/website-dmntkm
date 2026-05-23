export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-gradient-hero text-white">
      <div className="container-wide py-14 md:py-20">
        <h1 className="font-display text-3xl md:text-5xl font-bold">{title}</h1>
        {subtitle && (
          <p className="mt-3 text-white/85 max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
