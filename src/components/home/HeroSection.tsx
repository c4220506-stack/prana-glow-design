import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="relative overflow-hidden py-12 md:py-20 lg:py-24 min-h-screen flex items-center">
    
    {/* ── VIDEO BACKGROUND ── */}
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/house1-poster.jpg" // Use a static image of the first frame here
      className="absolute inset-0 w-full h-full object-cover -z-10"
    >
      <source src="/house1.mp4" type="video/mp4" />
    </video>

    {/* ── DARK OVERLAY WITH BLUR ── */}
    <div className="absolute inset-0 bg-black/40 backdrop-blur-md -z-10" />

    <div className="prana-container w-full">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }} // Added slight delay to sync with video
          className="prana-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 text-white"
        >
          Nourishing Holistic Wellness
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="prana-body max-w-xl mx-auto text-white/90"
        >
          Experience the essence of Ayurveda and modern dermatology combined.
        </motion.p>
      </div>
    </div>
  </section>
);

export default HeroSection;
