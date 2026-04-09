import { motion } from "framer-motion";
import { FolderOpen, ExternalLink, Tag } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const projects = [
  {
    title: "Business Management",
    desc: "A modern personal business management website built with React, Tailwind CSS, and Framer Motion featuring glassmorphism design, smooth animations, and fully responsive layout.",
    tags: ["React", "Tailwind", "Framer Motion"],
    liveUrl: "https://getbizflow.lovable.app/login",
    image: "https://image2url.com/r2/default/images/1774249234284-c407cf26-9c1d-4655-b580-a17f15c930d4.jpg",
  },
  {
    title: "Varsity Question",
    desc: "A modern ReactJS and Tailwind CSS-based platform offering organized varsity question banks, smart search, and easy navigation to help students prepare effectively for university admission and academic success.",
    tags: ["React", "TypeScript", "Recharts"],
    liveUrl: "https://v0-varsity-question-app.vercel.app/",
    image: "https://image2url.com/r2/default/images/1774249307676-97cda9c2-71eb-4e46-b3f5-d6a69cb96c58.jpg",
  },
];

const Projects = () => (
  <section className="relative z-10 py-24 min-h-screen">
    <div className="container mx-auto px-6">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">
          My Work
        </p>
        <h2 className="text-3xl sm:text-4xl font-display font-bold">
          <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm">
          A collection of projects I've built — from dashboards to full-stack apps. Click to view live demos.
        </p>
      </AnimatedSection>

      <div className="max-w-4xl mx-auto space-y-8">
        {projects.map((project, i) => (
          <AnimatedSection key={project.title} delay={i * 0.12} direction={i % 2 === 0 ? "left" : "right"}>
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="glass rounded-2xl overflow-hidden flex flex-col md:flex-row group hover:border-primary/30 transition-all block"
            >
              <div className="relative w-full md:w-72 h-48 md:h-auto flex-shrink-0 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/60 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent md:hidden" />
              </div>

              <div className="p-6 flex flex-col justify-center flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <FolderOpen className="text-primary" size={16} />
                  <span className="text-xs text-muted-foreground font-medium">Project</span>
                </div>

                <h3 className="font-display font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.desc}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-primary font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={12} /> Live Demo
                  </span>
                </div>
              </div>
            </motion.a>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
