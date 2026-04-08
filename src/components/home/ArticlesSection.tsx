import { motion } from "framer-motion";
import articleAshwagandha from "@/assets/article-ashwagandha.jpg";
import articleDermatology from "@/assets/article-dermatology.jpg";
import articleTurmeric from "@/assets/article-turmeric.jpg";

const articles = [
  {
    title: "The Power of Ashwagandha",
    image: articleAshwagandha,
  },
  {
    title: "Integrated Dermatology in Mumbai",
    image: articleDermatology,
  },
  {
    title: "Golden Turmeric: Skin's Best Friend",
    image: articleTurmeric,
  },
];

const ArticlesSection = () => (
  <section className="prana-section">
    <div className="prana-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="prana-heading text-3xl md:text-4xl text-center mb-14"
      >
        Read Our Latest Wellness Insights
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, i) => (
          <motion.div
            key={article.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="arch-card aspect-[3/4] overflow-hidden mb-4 shadow-md">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <h3 className="font-serif text-lg font-medium text-prana-charcoal text-center">{article.title}</h3>
            <p className="text-sm font-medium text-prana-terracotta text-center mt-2 group-hover:underline">
              Read Article →
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ArticlesSection;
