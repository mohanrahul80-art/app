import { Link } from "react-router-dom";
import { Facebook, Linkedin, Mail, MapPin, Phone, Star } from "lucide-react";
import { CONTACT, HUBS, NAV_LINKS } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-coal/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <img
            src="/brand/logo-horizontal.webp"
            alt="CoverEdge Marketing Pvt. Ltd"
            data-testid="footer-logo"
            className="logo-blend w-full max-w-sm"
          />
          <p className="mt-6 max-w-sm text-sm text-steel leading-relaxed">
            Third-party logistics since 2012 — twelve capabilities from warehousing to customs
            clearance and ERP integration, run from four Indian hubs.
          </p>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ember">Company</p>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map(([label, to]) => (
              <li key={to}>
                <Link
                  to={to}
                  data-testid={`footer-link-${to === "/" ? "home" : to.slice(1)}`}
                  className="text-sm text-steel hover:text-bone transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ember">Hubs & Contact</p>
          <ul className="mt-5 space-y-3">
            {HUBS.map((h) => (
              <li key={h.city} className="flex items-center gap-2 text-sm text-steel">
                <MapPin className="h-3.5 w-3.5 text-ember shrink-0" /> {h.city}
              </li>
            ))}
            <li className="flex items-center gap-2 text-sm text-steel pt-2">
              <Phone className="h-3.5 w-3.5 text-ember shrink-0" />
              <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} data-testid="footer-phone-link" className="hover:text-bone transition-colors">
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm text-steel">
              <Mail className="h-3.5 w-3.5 text-ember shrink-0" />
              <a href={`mailto:${CONTACT.email}`} data-testid="footer-email-link" className="hover:text-bone transition-colors">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm text-steel">
              <Linkedin className="h-3.5 w-3.5 text-ember shrink-0" />
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-linkedin-link"
                className="hover:text-bone transition-colors"
              >
                CoverEdge on LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm text-steel">
              <Facebook className="h-3.5 w-3.5 text-ember shrink-0" />
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-facebook-link"
                className="hover:text-bone transition-colors"
              >
                CoverEdge on Facebook
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm text-steel">
              <Star className="h-3.5 w-3.5 text-ember shrink-0" />
              <a
                href={CONTACT.googleReview}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-google-review-link"
                className="hover:text-bone transition-colors"
              >
                Leave a Google review
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[11px] text-steel">© {new Date().getFullYear()} CoverEdge Marketing Pvt. Ltd · Est. 2012</p>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">West · Central · North · East</p>
        </div>
      </div>
    </footer>
  );
}
