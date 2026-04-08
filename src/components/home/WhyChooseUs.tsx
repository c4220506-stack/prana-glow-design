import { motion } from "framer-motion";
import { Leaf, User, Heart, Zap } from "lucide-react";
import contactWoman from "@/assets/contact-woman.png";

const points = [
  { icon: User, label: "Expert Ayurvedic Vaidyas" },
  { icon: Leaf, label: "Personalized Prakriti Plans" },
  { icon: Heart, label: "Comprehensive Holistic Care" },
  { icon: Zap, label: "Integrated Modern Techniques" },
];

const WhyChooseUs = () => (
  <section className="prana-section">
    <div className="prana-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-md mx-auto lg:mx-0 organic-mask overflow-hidden shadow-xl aspect-[3/4]"
        >
          <img src={contactWoman} alt="Peaceful wellness portrait" className="w-full h-full object-cover" loading="lazy" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="prana-heading text-3xl md:text-4xl mb-8">Why Choose Prana?</h2>
          <div className="space-y-6">
            {points.map((point) => (
              <div key={point.label} className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-prana-terracotta/10 flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-5 h-5 text-prana-terracotta" />
                </div>
                <p className="text-base font-medium text-prana-charcoal">{point.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
