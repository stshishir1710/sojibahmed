import { motion } from "framer-motion";
import { FileText, ExternalLink, Calendar, BookOpen } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

// ResearchPapers data import here 
// const papers = [
//   {
//     title: "Impact of Digital Accounting Systems on SMEs",
//     abstract:
//       "A comprehensive study analyzing how small and medium enterprises can leverage modern accounting information systems for sustainable growth and competitive advantage in the digital era.",
//     journal: "Journal of Accounting Research",
//     date: "2025",
//     tags: ["Accounting", "Digital Systems", "SME"],
//     link: "#",
//     image: "Image link here",
//   }
// ];

const ResearchPapers = () => (
  <section className="relative z-10 py-24 min-h-screen">
    <div className="container mx-auto px-6">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">
          Academic Work
        </p>
        <h2 className="text-3xl sm:text-4xl font-display font-bold">
          <span className="gradient-text">Research Papers</span>
        </h2>
        <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm">
          My published and upcoming research exploring the intersection of accounting, technology, and business.
        </p>
      </AnimatedSection>

      {/* <div className="max-w-4xl mx-auto space-y-8">
        {papers.map((paper, i) => (
          <AnimatedSection key={paper.title} delay={i * 0.12} direction={i % 2 === 0 ? "left" : "right"}>
            <motion.a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.01 }}
              className="glass rounded-2xl overflow-hidden flex flex-col md:flex-row group hover:border-primary/30 transition-all block"
            >
              <div className="relative w-full md:w-72 h-48 md:h-auto flex-shrink-0 overflow-hidden">
                <img
                  src={paper.image}
                  alt={paper.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/60 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent md:hidden" />
              </div>

              <div className="p-6 flex flex-col justify-center flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="text-primary" size={16} />
                  <span className="text-xs text-muted-foreground font-medium">{paper.journal}</span>
                  <span className="text-xs text-muted-foreground/60">•</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar size={11} /> {paper.date}
                  </span>
                </div>

                <h3 className="font-display font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                  {paper.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {paper.abstract}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {paper.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-primary font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={12} /> Read
                  </span>
                </div> */}
              {/* </div>
            </motion.a>
          </AnimatedSection>
        ))}
      </div> */}

        <div className=" w-full h-[300px] inset-0 flex items-center justify-center">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-400 tracking-wide animate-pulse align-middle">
          No Research Papers published yet. Stay tuned!😁
        </h1>
      </div>

    </div>
  </section>
);

export default ResearchPapers;
