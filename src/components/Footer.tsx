import { useState } from "react";
import { Facebook, Instagram, Linkedin, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    toast.success("Thanks for subscribing!");
    setEmail("");
  };

  return (
    <footer className="relative z-10 border-t border-border/30 bg-card/40 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-display font-bold gradient-text mb-3">Sojib</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Web developer, student & passionate learner building the future one project at a time.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", to: "/" },
                { label: "Education", to: "/education" },
                { label: "About Me", to: "/about" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-3">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-3">Stay updated with my latest work.</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-secondary border border-border/40 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors active:scale-95"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2025 <a href="https://www.facebook.com/sojibahmedshishir" target="_blank" rel="noopener noreferrer" className="gradient-text">Sojib</a> . All rights reserved.</p>
          <div className="flex gap-4">
            {[
              { icon: Facebook, href: "https://www.facebook.com/sojibahmedshishir" },
              { icon: Instagram, href: "https://www.instagram.com/sojib_ahmed_shishir/" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/md-sojib-ahmed-a63612393/" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
