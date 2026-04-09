import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Mail, Phone, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import AnimatedSection from "@/components/AnimatedSection";

const floatingContacts = [
  {
    icon: Mail,
    label: "Email",
    value: "stshishir01@gmail.com",
    href: "mailto:stshishir01@gmail.com",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1719-378475",
    href: "tel:+8801719378475",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: ExternalLink,
    label: "Fiverr",
    value: "fiverr.com/sojib",
    href: "https://www.fiverr.com/s/NNGaGBy",
    color: "from-green-500 to-emerald-500",
  },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill all fields");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent successfully!", {
        icon: <CheckCircle className="text-green-400" size={18} />,
      });
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-secondary border border-border/40 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all";

  return (
    <section className="relative z-10 py-24 min-h-screen">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            <span className="gradient-text">Contact Me</span>
          </h2>
        </AnimatedSection>

        {/* Floating Contact Icons */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
            {floatingContacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.label === "Fiverr" ? "_blank" : undefined}
                rel={c.label === "Fiverr" ? "noopener noreferrer" : undefined}
                className="relative group flex flex-col items-center"
                onHoverStart={() => setHoveredContact(i)}
                onHoverEnd={() => setHoveredContact(null)}
                animate={{
                  y: [0, -8, 0, 6, 0],
                  rotate: [0, 2, -2, 1, 0],
                }}
                transition={{
                  duration: 4 + i * 0.7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
                whileHover={{ scale: 1.2, y: -12 }}
                whileTap={{ scale: 0.9 }}
              >
                {/* Glow ring */}
                <motion.div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${c.color} opacity-0 blur-xl`}
                  animate={{ opacity: hoveredContact === i ? 0.4 : 0.1 }}
                  style={{ width: 80, height: 80, top: -8, left: "50%", marginLeft: -40 }}
                />

                {/* Icon circle */}
                <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${c.color} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow z-10`}>
                  <c.icon className="text-background" size={24} />
                </div>

                {/* Label */}
                <motion.span
                  className="mt-3 text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors"
                  animate={{ opacity: 1 }}
                >
                  {c.label}
                </motion.span>

                {/* Tooltip with value */}
                <AnimatePresence>
                  {hoveredContact === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.9 }}
                      className="absolute -bottom-12 glass-strong rounded-lg px-3 py-1.5 whitespace-nowrap z-20"
                    >
                      <p className="text-xs text-foreground font-medium">{c.value}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <AnimatedSection className="max-w-xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8 space-y-5"
          >
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Name</label>
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
                maxLength={100}
              />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
                maxLength={255}
              />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                placeholder="Write your message..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className={inputClass + " resize-none"}
                maxLength={1000}
              />
            </div>
            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all disabled:opacity-60"
            >
              {sending ? (
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full" />
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
