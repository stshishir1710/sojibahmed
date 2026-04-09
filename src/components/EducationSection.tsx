import { motion } from "framer-motion";
import { GraduationCap, BookOpen, School, FlaskConical, FileText, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const timeline = [
  {
    icon: School,
    level: "SSC",
    name: "Md. Sojib Ahmed",
    institute: "Piyarapur Kuchiyamara High School",
    batch: "2022",
    group: "Science",
    gpa: "4.17",
    status: "Passed",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: BookOpen,
    level: "HSC",
    institute: "Molana Bhasani College, Sirajganj",
    batch: "2023-2024",
    group: "Business Studies",
    gpa: "4.42",
    status: "Passed",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: GraduationCap,
    level: "Honours",
    institute: "Islamic University, Kushtia",
    batch: "40th Batch",
    group: "Accounting & Information System",
    gpa: "—",
    status: "Running",
    session: "2025-2026",
    color: "from-purple-500 to-pink-500",
  },
];

const upcoming = [
  { label: "PHD", status: "Coming", link: null, icon: FlaskConical },
  { label: "Research Paper", status: "0", link: "/research-papers", icon: FileText },
  { label: "Articles", status: "0", link: "/articles", icon: Newspaper },
  { label: "Profession", status: "Part-time Tuition", link: null, icon: FlaskConical },
];

const EducationSection = () => (
  <section className="relative z-10 py-24 min-h-screen">
    <div className="container mx-auto px-6">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">My Journey</p>
        <h2 className="text-3xl sm:text-4xl font-display font-bold">
          <span className="gradient-text">Education</span>
        </h2>
      </AnimatedSection>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-transparent" />

        {timeline.map((item, i) => (
          <AnimatedSection key={item.level} delay={i * 0.15} direction={i % 2 === 0 ? "left" : "right"}>
            <div className={`relative flex flex-col md:flex-row items-start mb-12 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary z-10 ring-4 ring-background" />
              <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass rounded-2xl p-6 hover:border-primary/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                      <item.icon className="text-background" size={18} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground">{item.level}</h3>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        item.status === "Passed" ? "bg-green-500/10 text-green-400" : "bg-primary/10 text-primary"
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-foreground mb-1">{item.institute}</p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mt-3">
                    <span>Batch: {item.batch}</span>
                    <span>Group: {item.group}</span>
                    <span>CGPA: {item.gpa}</span>
                    {item.session && <span>Session: {item.session}</span>}
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Upcoming */}
      <AnimatedSection delay={0.3} className="mt-12">
        <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {upcoming.map((u) => {
            const content = (
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                className={`glass rounded-xl p-4 text-center ${u.link ? "cursor-pointer hover:border-primary/30" : ""} transition-all`}
              >
                <u.icon className={u.link ? "text-primary mx-auto mb-2" : "text-accent mx-auto mb-2"} size={18} />
                <p className="text-sm font-display font-semibold text-foreground">{u.label}</p>
                <p className={`text-xs mt-1 ${u.link ? "text-primary font-medium" : "text-muted-foreground"}`}>{u.status}</p>
              </motion.div>
            );
            return u.link ? (
              <Link key={u.label} to={u.link}>{content}</Link>
            ) : (
              <div key={u.label}>{content}</div>
            );
          })}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default EducationSection;
