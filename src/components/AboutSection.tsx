import { motion } from "framer-motion";
import { Heart, BookOpen, Target, Briefcase, Music, Globe } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import profileImg from "@/assets/about.jpeg";

const skills = [
  { name: "HTML & CSS", pct: 95, color: "hsl(var(--primary))" },
  { name: "JavaScript", pct: 60, color: "hsl(var(--accent))" },
  { name: "React", pct: 50, color: "hsl(190 100% 50%)" },
  { name: "Problem Solving", pct: 85, color: "hsl(260 80% 60%)" },
  { name: "Communication", pct: 80, color: "hsl(150 70% 50%)" },
];

const traits = [
  { icon: Target, label: "Vission"},
  { icon: BookOpen, label: "Lifelong Learner" },
  { icon: Heart, label: "Passionate" },
  { icon: Briefcase, label: "Hardworking" },
  { icon: Music, label: "Creative" },
  { icon: Globe, label: "Tech Enthusiast" },
];

const AboutSection = () => (
  <section className="relative z-10 py-24 min-h-screen">
    <div className="container mx-auto px-6">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Who I Am</p>
        <h2 className="text-3xl sm:text-4xl font-display font-bold">
          <span className="gradient-text">About Me</span>
        </h2>
      </AnimatedSection>

      <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
        <AnimatedSection direction="left" className="flex-shrink-0">
          <motion.div whileHover={{ scale: 1.03 }} className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden glass border-2 border-accent/20">
            <img src={profileImg} alt="Sojib Ahmed" className="w-full h-full object-cover" />
          </motion.div>
        </AnimatedSection>

        <AnimatedSection direction="right" className="max-w-2xl">
          <h3 className="text-xl font-display font-bold text-foreground mb-4">My Personal Journey</h3>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              I'm <span className="gradient-text font-bold">Md. Sojib Ahmed</span> — a passionate web developer and Honours student at Islamic University, Kushtia,
              studying Accounting & Information Systems. My journey into technology started with curiosity and has evolved
              into a deep commitment to building meaningful digital experiences.
            </p>
            <p>
              Beyond academics, I'm driven by a desire to create, learn, and grow every single day. I believe in the power
              of technology to transform lives and I'm working towards making that a reality through my projects and skills.
            </p>
            <p>
              My interests span from web development and UI/UX design to business strategy and entrepreneurship.
              When I'm not coding, you'll find me reading about new technologies, exploring creative ideas, or tutoring
              students as part of my part-time profession.
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* Skills - Radial/Circular Design */}
      <AnimatedSection className="max-w-3xl mx-auto mb-16">
        <h3 className="text-lg font-display font-bold text-foreground mb-8 text-center">Skills & Proficiency</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="relative w-24 h-24">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50" cy="50" r="42"
                    fill="none"
                    stroke="hsl(var(--secondary))"
                    strokeWidth="6"
                  />
                  <motion.circle
                    cx="50" cy="50" r="42"
                    fill="none"
                    stroke={s.color}
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 42}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
                    whileInView={{ strokeDashoffset: 2 * Math.PI * 42 * (1 - s.pct / 100) }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-display font-bold text-foreground">{s.pct}%</span>
                </div>
              </div>
              <span className="text-xs font-medium text-muted-foreground text-center">{s.name}</span>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Traits */}
      <AnimatedSection>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-3xl mx-auto">
          {traits.map((t, i) => (
            <motion.div
              key={t.label}
              whileHover={{ y: -4, scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-xl p-4 flex flex-col items-center gap-2 text-center group hover:border-primary/30 transition-all"
            >
              <t.icon className="text-primary group-hover:text-accent transition-colors" size={20} />
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">{t.label}</span>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;
