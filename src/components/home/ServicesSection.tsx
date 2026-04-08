import { motion } from "framer-motion";
import serviceRejuvenation from "@/assets/service-rejuvenation.jpg";
import serviceAcne from "@/assets/service-acne.jpg";
import serviceAntiaging from "@/assets/service-antiaging.jpg";
import ayurvedicTools from "@/assets/ayurvedic-tools.jpg";

const services = [
  {
    title: "Skin Rejuvenation",
    desc: "Ancient herbal masks blended with modern actives to restore youthful luminosity and even skin tone.",
    image: serviceRejuvenation,
  },
  {
    title: "Acne & Balance",
    desc: "Neem-based formulations and dosha-balancing protocols to clear breakouts and prevent recurrence.",
    image: serviceAcne,
  },
  {
    title: "Anti-Aging & Radiance",
    desc: "Precious Ayurvedic face oils infused with Kumkumadi and Saffron to diminish fine lines naturally.",
    image: serviceAntiaging,
  },
  {
    title: "Facial Treatments",
    desc: "Therapeutic massage techniques combining marma point therapy with deep tissue rejuvenation.",
    image: ayurvedicTools,
  },
];

const ServicesSection = () => (
  <section className="prana-section bg-prana-warm-white">
    <div className="prana-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="prana-heading text-3xl md:text-4xl mb-3">Explore Our Holistic Solutions</h2>
        <p className="prana-body max-w-lg mx-auto">Treatments designed around your unique Prakriti for lasting results.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="prana-card p-6 text-center"
          >
            <div className="w-24 h-24 mx-auto mb-5 rounded-full overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-prana-charcoal mb-2">{service.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
            <a href="/treatments" className="text-sm font-medium text-prana-terracotta hover:underline">
              Explore →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
