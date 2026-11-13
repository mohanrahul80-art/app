import { motion } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1];

export function Reveal({ children, className = "", delay = 0, y = 30, once = true }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.15 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function MaskLine({ children, delay = 0, className = "" }) {
  return (
    <motion.span
      className={`block overflow-hidden ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.span
        className="block will-change-transform"
        variants={{
          hidden: { y: "112%" },
          show: { y: "0%", transition: { duration: 0.95, delay, ease: EASE } },
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}
