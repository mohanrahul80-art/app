import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { CONTACT, NAV_LINKS } from "../data/site";

const slug = (to) => (to === "/" ? "home" : to.slice(1));

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled || open ? "bg-ink/85 backdrop-blur-xl border-b border-line" : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
          <Link to="/" data-testid="nav-logo-link" aria-label="CoverEdge Marketing home">
            <Logo markClass="h-7 w-7 sm:h-8 sm:w-8" textClass="text-lg sm:text-xl" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(([label, to]) => (
              <NavLink
                key={to}
                to={to}
                data-testid={`nav-link-${slug(to)}`}
                className={({ isActive }) =>
                  `font-mono text-[11px] uppercase tracking-[0.22em] transition-colors duration-200 ${
                    isActive ? "text-ember" : "text-steel hover:text-bone"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-linkedin-link"
              aria-label="CoverEdge Marketing on LinkedIn"
              className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-steel hover:text-bone hover:border-ember transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              data-testid="nav-phone-badge"
              className="hidden md:flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-steel hover:text-bone transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-ember" />
              {CONTACT.phone}
            </a>
            <Link
              to="/contact"
              data-testid="nav-quote-button"
              className="hidden sm:inline-flex items-center gap-1.5 bg-ember text-ink font-semibold text-sm px-4 py-2 rounded-full hover:bg-bone transition-colors duration-300"
            >
              Get a Quote <ArrowUpRight className="h-4 w-4" />
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              data-testid="nav-mobile-toggle"
              aria-label="Toggle menu"
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-bone hover:border-ember transition-colors"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-xl lg:hidden pt-24 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-1 pb-10">
              {NAV_LINKS.map(([label, to], i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <NavLink
                    to={to}
                    data-testid={`nav-mobile-link-${slug(to)}`}
                    className={({ isActive }) =>
                      `flex items-baseline gap-4 py-4 border-b border-line font-display uppercase text-4xl ${
                        isActive ? "text-ember" : "text-bone"
                      }`
                    }
                  >
                    <span className="font-mono text-xs text-steel">0{i + 1}</span>
                    {label}
                  </NavLink>
                </motion.div>
              ))}
              <Link
                to="/contact"
                data-testid="nav-mobile-quote-button"
                className="mt-8 inline-flex items-center justify-center gap-2 bg-ember text-ink font-semibold px-6 py-4 rounded-full"
              >
                Get a Quote <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
