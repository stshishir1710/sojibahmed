import { motion } from "framer-motion";
import { Newspaper, ExternalLink, Clock, Tag } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

// Aritcle data Inport Here 
// const articles = [
//   {
//     title: "The Future of Accounting & Technology",
//     summary: "How automation, artificial intelligence, and cloud computing are reshaping the accounting profession for the next generation of professionals.",
//     readTime: "6 min read",
//     category: "Accounting & Tech",
//     link: "#",
//     image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
//   }
// ];

const Articles = () => (
  <section className="relative z-10 py-24 min-h-screen">
    <div className="container mx-auto px-6">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">
          Writings
        </p>
        <h2 className="text-3xl sm:text-4xl font-display font-bold">
          <span className="gradient-text">Articles</span>
        </h2>
        <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm">
          Thoughts, tutorials, and insights on web development, technology, and the future of accounting.
        </p>
      </AnimatedSection>

      {/* <div className="max-w-4xl mx-auto space-y-8">
        {articles.map((article, i) => (
          <AnimatedSection key={article.title} delay={i * 0.12} direction={i % 2 === 0 ? "left" : "right"}>
            <motion.a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="glass rounded-2xl overflow-hidden flex flex-col md:flex-row group hover:border-primary/30 transition-all block"
            >
              <div className="relative w-full md:w-72 h-48 md:h-auto flex-shrink-0 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/60 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent md:hidden" />
                <span className="absolute top-3 left-3 text-[10px] px-2.5 py-1 rounded-full bg-primary/20 text-primary font-medium backdrop-blur-sm flex items-center gap-1">
                  <Tag size={10} /> {article.category}
                </span>
              </div>

              <div className="p-6 flex flex-col justify-center flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Newspaper className="text-primary" size={16} />
                  <span className="text-xs text-muted-foreground font-medium">{article.category}</span>
                  <span className="text-xs text-muted-foreground/60">•</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock size={11} /> {article.readTime}
                  </span>
                </div>

                <h3 className="font-display font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {article.summary}
                </p>

                <div className="flex items-center justify-end">
                  <span className="text-xs text-primary font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={12} /> Read More
                  </span>
                </div>
              </div>
            </motion.a>
          </AnimatedSection>
        ))}
      </div> */}
      
      <div className=" w-full h-[300px] inset-0 flex items-center justify-center">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-400 tracking-wide animate-pulse align-middle">
          No Article published here yet. Stay tuned!😁
        </h1>
      </div>
      
    </div>
  </section>
);

export default Articles;
