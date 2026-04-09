import { motion } from "framer-motion";
import { Code, Lightbulb, Sparkles, FolderOpen, Rocket, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import profileImg from "@/assets/Profile.jpeg";

const cards = [
  { icon: Code, 
    title: "Web Development", 
    desc: "Building modern, responsive websites with clean code and cutting-edge technologies.", 
    link: null },

  { icon: Lightbulb, 
    title: "Creative Thinker", 
    desc: "Transforming ideas into elegant digital solutions with innovative approaches.", 
    link: null },

  { icon: FolderOpen, 
    title: "Projects", 
    desc: "Working on exciting projects that solve real-world problems through technology.", 
    link: "/projects" },

  { icon: Rocket, 
    title: "Passionate Learner", 
    desc: "Always exploring new technologies and pushing boundaries to grow as a developer.", 
    link: null },
];

const HeroSection = () => {
  return (
    <section className="relative z-10 min-h-screen flex flex-col justify-center pt-20">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <AnimatedSection direction="left" className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden glass border-2 border-primary/20 animate-pulse_glow"
            >
              <img src={profileImg} alt="Md. Sojib Ahmed" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </motion.div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="text-center lg:text-left max-w-xl">
            <p className="text-primary font-medium text-sm mb-2 tracking-wider uppercase flex items-center gap-2 justify-center lg:justify-start">
              <Sparkles size={14} /> Welcome to my portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4">
              Hi, I'm{" "}
              <span className="gradient-text">Md. Sojib Ahmed</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-3">
              Web Developer • Student • Passionate Learner
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a dedicated web developer and Honours student with a deep passion for creating
              beautiful digital experiences. I combine creativity with technical skills to build
              solutions that make a difference. Always eager to learn, grow, and take on new challenges.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-block px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95"
                >
                  Hire Me
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/about"
                  className="inline-block px-6 py-3 rounded-xl border border-primary/30 text-primary font-semibold text-sm hover:bg-primary/10 transition-all active:scale-95"
                >
                  About Me
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 pb-20">
          {cards.map((c, i) => {
            const cardContent = (
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={c.link ? { scale: 0.97 } : undefined}
                className={`glass rounded-2xl p-6 group hover:border-primary/30 transition-all duration-300 h-full ${
                  c.link ? "cursor-pointer" : "cursor-default"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <c.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                {c.link && (
                  <p className="text-xs text-primary font-medium mt-3 flex items-center gap-1">
                    2
                  </p>
                )}
              </motion.div>
            );

            return (
              <AnimatedSection key={c.title} delay={i * 0.12}>
                {c.link ? (
                  <Link to={c.link}>{cardContent}</Link>
                ) : (
                  cardContent
                )}
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
