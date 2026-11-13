import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { CheckCircle2, Clock, Mail, Phone, Send } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { CONTACT, HUBS, SERVICES } from "../data/site";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const inputCls =
  "mt-2 w-full bg-coal2 border border-line rounded-lg px-4 py-3 text-sm text-bone placeholder:text-steel/40 focus:border-ember focus:outline-none transition-colors duration-200";

function Field({ label, k, value, onChange, required = false, placeholder = "", type = "text" }) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel">
        {label}
        {required && <span className="text-ember"> *</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        data-testid={`enquiry-${k}-input`}
        className={inputCls}
      />
    </label>
  );
}

function SelectField({ label, k, value, onChange, options }) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel">{label}</span>
      <select value={value} onChange={onChange} data-testid={`enquiry-${k}-select`} className={inputCls}>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

const EMPTY = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service_required: SERVICES[0].title,
  hub_location: "Any / Multiple",
  monthly_volume: "",
  message: "",
};

export default function Contact() {
  useEffect(() => {
    document.title = "Contact & Get a Quote — CoverEdge Marketing Pvt. Ltd";
  }, []);

  const [form, setForm] = useState(EMPTY);
  const [sending, setSending] = useState(false);
  const [ref, setRef] = useState("");

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const { data } = await axios.post(`${API}/enquiries`, form);
      setRef(data.reference);
      toast.success(`Enquiry received — reference ${data.reference}`);
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Could not send your enquiry. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact · Get a quote"
        lines={["Let's move", <>your <span className="text-ember">goods.</span></>]}
        meta={[["Phone", CONTACT.phone], ["Email", CONTACT.email]]}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            {ref ? (
              <Reveal>
                <div data-testid="enquiry-success-panel" className="rounded-2xl border border-ember/50 bg-coal p-8 sm:p-12 text-center">
                  <CheckCircle2 className="h-12 w-12 text-ember mx-auto" />
                  <h2 className="mt-6 font-display uppercase text-3xl sm:text-4xl">Enquiry received.</h2>
                  <p className="mt-4 font-mono text-sm text-steel">
                    Reference{" "}
                    <span data-testid="enquiry-ref-value" className="text-ember tracking-[0.2em]">
                      {ref}
                    </span>
                  </p>
                  <p className="mt-4 text-sm text-steel leading-relaxed max-w-md mx-auto">
                    Our team will get back to you with storage plans, transit options and pricing for
                    the details you shared.
                  </p>
                  <button
                    onClick={() => {
                      setRef("");
                      setForm(EMPTY);
                    }}
                    data-testid="enquiry-reset-button"
                    className="mt-8 inline-flex bg-ember text-ink font-semibold px-6 py-3 rounded-full hover:bg-bone transition-colors duration-300"
                  >
                    Send another enquiry
                  </button>
                </div>
              </Reveal>
            ) : (
              <Reveal>
                <form
                  onSubmit={submit}
                  data-testid="enquiry-form"
                  className="rounded-2xl border border-line bg-coal p-6 sm:p-10 grid sm:grid-cols-2 gap-5"
                >
                  <Field label="Full name" k="name" value={form.name} onChange={set("name")} required placeholder="Your name" />
                  <Field label="Company" k="company" value={form.company} onChange={set("company")} placeholder="Company / brand" />
                  <Field label="Email" k="email" type="email" value={form.email} onChange={set("email")} required placeholder="you@company.com" />
                  <Field label="Phone" k="phone" type="tel" value={form.phone} onChange={set("phone")} required placeholder="+91 ···" />
                  <SelectField label="Service required" k="service_required" value={form.service_required} onChange={set("service_required")} options={SERVICES.map((s) => s.title)} />
                  <SelectField
                    label="Preferred hub"
                    k="hub_location"
                    value={form.hub_location}
                    onChange={set("hub_location")}
                    options={["Any / Multiple", ...HUBS.map((h) => h.city)]}
                  />
                  <div className="sm:col-span-2">
                    <Field label="Monthly volume (pallets, orders or loads)" k="monthly_volume" value={form.monthly_volume} onChange={set("monthly_volume")} placeholder="e.g. 400 orders / month" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel">Message</span>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={set("message")}
                        placeholder="Tell us about your products, lanes and timelines…"
                        data-testid="enquiry-message-input"
                        className={`${inputCls} resize-none`}
                      />
                    </label>
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    data-testid="enquiry-submit-btn"
                    className="sm:col-span-2 inline-flex items-center justify-center gap-2 bg-ember text-ink font-semibold px-7 py-4 rounded-full hover:bg-bone transition-colors duration-300 disabled:opacity-60"
                  >
                    {sending ? "Sending…" : <>Send enquiry <Send className="h-4 w-4" /></>}
                  </button>
                </form>
              </Reveal>
            )}
          </div>

          <div className="lg:col-span-5 space-y-5">
            {[
              [Phone, "Call us", CONTACT.phone, `tel:${CONTACT.phone.replace(/\s/g, "")}`, "contact-phone-card"],
              [Mail, "Write to us", CONTACT.email, `mailto:${CONTACT.email}`, "contact-email-card"],
              [Clock, "Working hours", CONTACT.hours, null, "contact-hours-card"],
            ].map(([Icon, label, value, href, id]) => (
              <Reveal key={label}>
                <div data-testid={id} className="rounded-2xl border border-line bg-coal p-6 flex items-start gap-4 hover:border-ember/60 transition-colors duration-300">
                  <span className="h-10 w-10 shrink-0 rounded-full bg-ember/10 border border-ember/30 flex items-center justify-center">
                    <Icon className="h-4 w-4 text-ember" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-steel">{label}</p>
                    {href ? (
                      <a href={href} data-testid={`${id}-link`} className="mt-1.5 block text-bone font-semibold hover:text-ember transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1.5 text-bone font-semibold">{value}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-line bg-coal p-6" data-testid="contact-hubs-card">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-steel">Our hubs</p>
                <ul className="mt-4 space-y-3">
                  {HUBS.map((h) => (
                    <li key={h.city} className="flex items-baseline justify-between gap-4 border-b border-line pb-3 last:border-0 last:pb-0">
                      <span className="text-bone font-semibold">{h.city}</span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-steel text-right">{h.role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-xs text-steel leading-relaxed px-2">
                Prefer email? Skip the form — every message lands with the same team that runs the
                floors.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
