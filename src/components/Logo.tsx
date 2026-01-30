import { motion } from "framer-motion";

interface LogoProps {
  variant?: "default" | "minimal" | "icon";
  className?: string;
  animated?: boolean;
}

export const Logo = ({ variant = "default", className = "", animated = true }: LogoProps) => {
  // Icon-only version (D monogram)
  if (variant === "icon") {
    return (
      <motion.svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        whileHover={animated ? { scale: 1.05 } : {}}
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(243, 75%, 59%)" />
            <stop offset="100%" stopColor="hsl(270, 50%, 50%)" />
          </linearGradient>
        </defs>
        {/* Outer circle */}
        <motion.circle 
          cx="20" 
          cy="20" 
          r="18" 
          stroke="url(#logoGradient)" 
          strokeWidth="2" 
          fill="none"
          initial={animated ? { pathLength: 0, opacity: 0 } : {}}
          animate={animated ? { pathLength: 1, opacity: 1 } : {}}
          transition={animated ? { duration: 1.5, ease: "easeInOut" } : {}}
        />
        {/* D letter */}
        <motion.path
          d="M14 10 H18 C24 10 28 14 28 20 C28 26 24 30 18 30 H14 V10 Z M16 12 V28 H18 C23 28 26 25 26 20 C26 15 23 12 18 12 H16 Z"
          fill="url(#logoGradient)"
          initial={animated ? { opacity: 0, scale: 0.8 } : {}}
          animate={animated ? { opacity: 1, scale: 1 } : {}}
          transition={animated ? { delay: 0.3, duration: 0.6 } : {}}
        />
      </motion.svg>
    );
  }

  // Minimal version (just text with gradient)
  if (variant === "minimal") {
    return (
      <motion.div
        className={`text-2xl font-bold text-gradient ${className}`}
        whileHover={animated ? { scale: 1.05 } : {}}
      >
        Dulshan
      </motion.div>
    );
  }

  // Default version (icon + text)
  return (
    <motion.div
      className={`flex items-center gap-2 ${className}`}
      whileHover={animated ? { scale: 1.05 } : {}}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradientDefault" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(243, 75%, 59%)" />
            <stop offset="100%" stopColor="hsl(270, 50%, 50%)" />
          </linearGradient>
        </defs>
        {/* Outer circle */}
        <circle cx="20" cy="20" r="18" stroke="url(#logoGradientDefault)" strokeWidth="2.5" fill="none" />
        {/* D letter */}
        <path
          d="M14 10 H18 C24 10 28 14 28 20 C28 26 24 30 18 30 H14 V10 Z M16 12 V28 H18 C23 28 26 25 26 20 C26 15 23 12 18 12 H16 Z"
          fill="url(#logoGradientDefault)"
        />
      </svg>
      <span className="text-xl font-bold text-gradient">Dulshan</span>
    </motion.div>
  );
};
