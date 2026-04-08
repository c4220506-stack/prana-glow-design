import { motion } from "framer-motion";
import spiceGarden from "@/assets/spice-garden.jpg";
import therapistsPrep from "@/assets/therapists-prep.jpg";

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "30+", label: "Expert Vaidyas" },
  { value: "10K+", label: "Happy Clients" },
];

const ValuesSection = () => (
  <section className="prana-section">
    <div className="prana-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Images */}
        <div className="relative h-[400px] md:h-[500px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="absolute top-0 left-0 w-[60%] h-[75%] organic-mask overflow-hidden shadow-xl"
          >
            <img src={spiceGarden} alt="Serene spice garden" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="absolute bottom-0 right-0 w-[55%] h-[65%] organic-mask-alt overflow-hidden shadow-xl"
          >
            <img src={therapistsPrep} alt="Therapists preparing treatments" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="prana-heading text-3xl md:text-4xl mb-6">
            Embark on Our Ayurvedic Journey
          </h2>
          <p className="prana-body mb-8">
            Rooted in millennia of Ayurvedic tradition and refined through modern dermatological 
            research, Prana delivers transformative skincare that honours your unique constitution. 
            Our expert Vaidyas craft personalized treatment plans that restore balance and reveal 
            your skin's natural radiance.
          </p>

          <div className="flex gap-8 mb-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl md:text-4xl font-semibold text-prana-terracotta">{stat.value}</p>
                <p className="text-xs font-medium text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <a href="/about" className="prana-btn">Discover More</a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ValuesSection;
