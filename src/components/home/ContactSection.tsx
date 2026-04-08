import { useState } from "react";
import { motion } from "framer-motion";
import contactWoman from "@/assets/contact-woman.png";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  return (
    <section id="contact" className="prana-section bg-prana-warm-white">
      <div className="prana-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="organic-mask-alt overflow-hidden max-w-sm mx-auto aspect-[3/4]">
              <img src={contactWoman} alt="Serene model" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="prana-heading text-3xl md:text-4xl mb-8">Reach Out to Us Today!</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {(["name", "email", "subject"] as const).map((field) => (
                <input
                  key={field}
                  type={field === "email" ? "email" : "text"}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formData[field]}
                  onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                  className="w-full px-5 py-3 rounded-xl bg-background border border-border/50 text-sm font-sans text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-prana-terracotta/30 transition-all"
                />
              ))}
              <textarea
                placeholder="Message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 py-3 rounded-xl bg-background border border-border/50 text-sm font-sans text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-prana-terracotta/30 transition-all resize-none"
              />
              <div className="text-center lg:text-left">
                <button type="submit" className="prana-btn">Send Message</button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
