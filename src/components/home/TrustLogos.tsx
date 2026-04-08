const logos = [
  "Global Ayurveda Certified",
  "EcoCert",
  "ISO 9001",
  "AYUSH Approved",
  "Cruelty Free",
];

const TrustLogos = () => (
  <section className="py-10 border-y border-border/30">
    <div className="prana-container">
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
        {logos.map((logo) => (
          <span
            key={logo}
            className="text-xs md:text-sm font-medium tracking-widest uppercase text-muted-foreground/40"
          >
            {logo}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default TrustLogos;
