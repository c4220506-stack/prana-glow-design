import { motion } from "framer-motion";
import ayurvedicTools from "@/assets/ayurvedic-tools.jpg";
import galleryMask from "@/assets/gallery-mask.jpg";
import galleryFriends from "@/assets/gallery-friends.jpg";
import galleryOilMassage from "@/assets/gallery-oil-massage.jpg";
import galleryLab from "@/assets/gallery-lab.jpg";
import galleryGrasses from "@/assets/gallery-grasses.jpg";
import galleryLightTherapy from "@/assets/gallery-light-therapy.jpg";

const GallerySection = () => (
  <section className="prana-section">
    <div className="prana-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="prana-heading text-3xl md:text-4xl text-center mb-14"
      >
        Discover Our Holistic Radiance
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {/* Top row: 3 */}
        <GalleryItem src={ayurvedicTools} alt="Herbal powders in copper bowls" />
        <GalleryItem src={galleryMask} alt="Natural herbal face mask" />
        <GalleryItem src={galleryFriends} alt="Friends with tropical leaves" />

        {/* Middle row: 2 */}
        <GalleryItem src={galleryOilMassage} alt="Oil head massage" className="col-span-1 md:col-span-1" />
        <GalleryItem src={galleryLab} alt="Modern lab research" className="col-span-1 md:col-span-2" />

        {/* Bottom row: 2 wide */}
        <GalleryItem src={galleryGrasses} alt="Portrait with dry grasses" className="col-span-1 md:col-span-2" />
        <GalleryItem src={galleryLightTherapy} alt="Light therapy device" />
      </div>
    </div>
  </section>
);

const GalleryItem = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className={`rounded-2xl overflow-hidden aspect-[4/3] ${className}`}
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
      loading="lazy"
    />
  </motion.div>
);

export default GallerySection;
