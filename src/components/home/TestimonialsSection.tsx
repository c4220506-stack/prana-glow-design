import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Singh",
    title: "IT Professional",
    text: "After just three sessions, my skin felt completely transformed. The personalized Prakriti assessment changed how I approach skincare forever.",
    initials: "PS",
  },
  {
    name: "Ananya Mehta",
    title: "Yoga Instructor",
    text: "Prana's holistic approach resonated deeply with my lifestyle. Their herbal formulations cleared my persistent acne without harsh chemicals.",
    initials: "AM",
  },
  {
    name: "Deepa Krishnan",
    title: "Wellness Coach",
    text: "The integration of traditional Ayurvedic techniques with modern science is remarkable. My skin has never looked more radiant and healthy.",
    initials: "DK",
  },
];

const TestimonialsSection = () => (
  <section className="prana-section bg-prana-warm-white">
    <div className="prana-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="prana-heading text-3xl md:text-4xl text-center mb-14"
      >
        What Our Clients Say
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="prana-card p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-prana-terracotta/15 flex items-center justify-center">
                <span className="text-sm font-semibold text-prana-terracotta">{t.initials}</span>
              </div>
              <div>
                <p className="font-medium text-sm text-prana-charcoal">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.title}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-prana-charcoal/70">{t.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
