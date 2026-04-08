import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import treatmentRoom from "@/assets/treatment-room.jpg";
import serviceRejuvenation from "@/assets/service-rejuvenation.jpg";
import serviceAcne from "@/assets/service-acne.jpg";
import serviceAntiaging from "@/assets/service-antiaging.jpg";
import ayurvedicTools from "@/assets/ayurvedic-tools.jpg";
import galleryMask from "@/assets/gallery-mask.jpg";
import galleryOilMassage from "@/assets/gallery-oil-massage.jpg";
import galleryLab from "@/assets/gallery-lab.jpg";
import galleryLightTherapy from "@/assets/gallery-light-therapy.jpg";

const treatments = [
  { title: "Skin Rejuvenation", desc: "Ancient herbal masks with turmeric, saffron, and sandalwood restore youthful luminosity.", image: serviceRejuvenation, duration: "60 min" },
  { title: "Acne & Balance", desc: "Neem and tea tree formulations combined with dosha-balancing protocols.", image: serviceAcne, duration: "45 min" },
  { title: "Anti-Aging & Radiance", desc: "Kumkumadi oil therapy with marma point stimulation for deep rejuvenation.", image: serviceAntiaging, duration: "75 min" },
  { title: "Facial Massage", desc: "Traditional Ayurvedic facial massage combining gentle pressure techniques.", image: ayurvedicTools, duration: "50 min" },
  { title: "Herbal Detox Wrap", desc: "Full-body herbal paste application to draw out impurities and restore glow.", image: galleryMask, duration: "90 min" },
  { title: "Shirodhara", desc: "Warm medicated oil poured in a continuous stream on the forehead for deep calm.", image: galleryOilMassage, duration: "60 min" },
  { title: "Panchakarma Facial", desc: "Five-step purification treatment adapted for facial skin renewal.", image: galleryLab, duration: "80 min" },
  { title: "LED Light Therapy", desc: "Modern phototherapy combined with herbal serums for accelerated healing.", image: galleryLightTherapy, duration: "40 min" },
];

const Treatments = () => (
  <>
    <Navbar />
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <img src={treatmentRoom} alt="Treatment room" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-prana-chocolate/50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-prana-warm-white mb-3">Our Treatments</h1>
            <p className="text-prana-warm-white/80 text-base md:text-lg max-w-md mx-auto font-sans">
              Discover our complete range of holistic Ayurvedic therapies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="prana-section">
        <div className="prana-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="prana-card overflow-hidden group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-base font-semibold text-prana-charcoal">{t.title}</h3>
                    <span className="text-xs font-medium text-prana-terracotta">{t.duration}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Treatments;
