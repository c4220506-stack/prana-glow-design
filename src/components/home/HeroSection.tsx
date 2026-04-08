import { motion } from "framer-motion";
import heroWoman from "@/assets/hero-woman.png";
import ayurvedicTools from "@/assets/ayurvedic-tools.jpg";
import treatmentDoctor from "@/assets/treatment-doctor.jpg";

const HeroSection = () => (
  <section className="relative overflow-hidden py-12 md:py-20 lg:py-24">
    <div className="prana-container">
      <div className="text-center mb-8 md:mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prana-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4"
        >
          Nourishing Holistic Wellness
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prana-body max-w-xl mx-auto"
        >
          Experience the essence of Ayurveda and modern dermatology combined.
        </motion.p>
      </div>

      <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
        {/* Left organic mask */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute left-0 md:left-[5%] lg:left-[10%] top-1/2 -translate-y-1/2 w-40 h-48 md:w-52 md:h-64 lg:w-64 lg:h-80 organic-mask overflow-hidden shadow-lg"
        >
          <img src={ayurvedicTools} alt="Traditional Ayurvedic tools and spices" className="w-full h-full object-cover" loading="lazy" />
        </motion.div>

        {/* Right organic mask */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute right-0 md:right-[5%] lg:right-[10%] top-1/2 -translate-y-1/2 w-40 h-48 md:w-52 md:h-64 lg:w-64 lg:h-80 organic-mask-alt overflow-hidden shadow-lg"
        >
          <img src={treatmentDoctor} alt="Modern facial treatment" className="w-full h-full object-cover" loading="lazy" />
        </motion.div>

        {/* Central cutout figure */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="relative z-10"
        >
          <img
            src={heroWoman}
            alt="Woman with radiant skin representing Prana Skincare"
            className="w-64 md:w-80 lg:w-96 h-auto drop-shadow-2xl"
            width={800}
            height={1024}
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
