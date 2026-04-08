import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import spiceGarden from "@/assets/spice-garden.jpg";
import therapistsPrep from "@/assets/therapists-prep.jpg";
import treatmentDoctor from "@/assets/treatment-doctor.jpg";

const team = [
  { name: "Dr. Kavitha Sharma", role: "Chief Vaidya", initials: "KS" },
  { name: "Dr. Rajan Patel", role: "Dermatologist", initials: "RP" },
  { name: "Meera Iyer", role: "Herbalist", initials: "MI" },
  { name: "Dr. Anil Deshmukh", role: "Research Head", initials: "AD" },
];

const timeline = [
  { year: "2010", text: "Founded in Mumbai with a vision to blend Ayurveda and science." },
  { year: "2014", text: "Opened our flagship holistic wellness centre." },
  { year: "2018", text: "Launched the Prakriti assessment program." },
  { year: "2022", text: "Expanded to 5 cities across India." },
  { year: "2025", text: "Internationally recognized with EcoCert certification." },
];

const About = () => (
  <>
    <Navbar />
    <main>
      {/* Hero */}
      <section className="prana-section relative overflow-hidden">
        <div className="prana-container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prana-heading text-4xl md:text-5xl lg:text-6xl mb-4"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prana-body max-w-xl mx-auto"
          >
            Rooted in 5,000 years of Ayurvedic wisdom, refined through modern science.
          </motion.p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="prana-section bg-prana-warm-white">
        <div className="prana-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="organic-mask overflow-hidden aspect-[4/5] shadow-xl"
          >
            <img src={spiceGarden} alt="Ayurvedic garden" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="prana-heading text-3xl md:text-4xl mb-6">Our Philosophy</h2>
            <p className="prana-body mb-4">
              At Prana, we believe true beauty emerges from balance — the harmony of Vata, Pitta, 
              and Kapha that Ayurveda has taught for millennia. Every treatment begins with understanding 
              your unique constitution.
            </p>
            <p className="prana-body">
              We source our ingredients ethically from organic farms across Kerala, Rajasthan, and 
              the Himalayan foothills, ensuring the purest botanicals meet cutting-edge formulation science.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="prana-section">
        <div className="prana-container">
          <h2 className="prana-heading text-3xl md:text-4xl text-center mb-14">Meet Our Experts</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-prana-terracotta/10 flex items-center justify-center">
                  <span className="font-serif text-xl font-semibold text-prana-terracotta">{member.initials}</span>
                </div>
                <p className="font-serif text-base font-medium text-prana-charcoal">{member.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="prana-section bg-prana-warm-white">
        <div className="prana-container max-w-2xl">
          <h2 className="prana-heading text-3xl md:text-4xl text-center mb-14">Our Journey</h2>
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <span className="font-serif text-2xl font-semibold text-prana-terracotta flex-shrink-0 w-16">{item.year}</span>
                <p className="prana-body text-sm pt-1">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default About;
