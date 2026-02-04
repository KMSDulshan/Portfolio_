import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Logo } from "./Logo";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Career", href: "#career" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);  
  const [activeSection, setActiveSection] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => {
        const id = item.href.substring(1);
        return document.getElementById(id);
      }).filter(Boolean);

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(`#${section.id}`);
          break;
        }
      }

      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 glass-card !rounded-none border-x-0 border-t-0 !border-b-2 !border-b-primary/20"
            : "py-5"
        }`}
        style={{
          background: isScrolled 
            ? 'rgba(255, 255, 255, 0.85)' 
            : 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(20px)',
          boxShadow: isScrolled 
            ? '0 4px 24px rgba(102, 126, 234, 0.12)' 
            : 'none',
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-center">
          <div className="hidden md:flex items-center gap-2">
            <a href="#" className="mr-6">
              <Logo variant="default" />
            </a>

            <div 
              className="flex items-center gap-1 p-1.5 rounded-full"
              style={{
                background: 'rgba(102, 126, 234, 0.08)',
                border: '1.5px solid rgba(102, 126, 234, 0.15)',
                boxShadow: '0 2px 16px rgba(102, 126, 234, 0.08)',
              }}
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative"
                    style={{
                      color: isActive ? 'hsl(243, 75%, 50%)' : 'hsl(220, 20%, 35%)',
                      background: isActive ? 'rgba(102, 126, 234, 0.15)' : 'transparent',
                      fontWeight: isActive ? '600' : '500',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'rgba(102, 126, 234, 0.12)';
                        e.currentTarget.style.color = 'hsl(243, 75%, 50%)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'hsl(220, 20%, 35%)';
                      }
                    }}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 rounded-full -z-10"
                        style={{
                          background: 'rgba(102, 126, 234, 0.15)',
                          boxShadow: '0 2px 8px rgba(102, 126, 234, 0.2)',
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.a>
                );
              })}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(102, 126, 234, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="ml-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, hsl(243, 75%, 59%) 0%, hsl(270, 50%, 50%) 100%)',
                  boxShadow: '0 4px 16px rgba(102, 126, 234, 0.3)',
                }}
              >
                Hire Me
              </motion.a>

              <motion.button
                onClick={toggleDarkMode}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="ml-2 p-2.5 rounded-full transition-all duration-300"
                style={{
                  background: isDarkMode ? 'rgba(102, 126, 234, 0.2)' : 'rgba(102, 126, 234, 0.1)',
                  border: '1.5px solid rgba(102, 126, 234, 0.2)',
                  color: 'hsl(243, 75%, 50%)',
                }}
                aria-label="Toggle dark mode"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isDarkMode ? 'dark' : 'light'}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          <div className="md:hidden flex items-center justify-between w-full">
            <a href="#">
              <Logo variant="minimal" />
            </a>
            
            <div className="flex items-center gap-2">
              <motion.button
                onClick={toggleDarkMode}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-xl transition-all duration-300"
                style={{
                  background: isDarkMode ? 'rgba(102, 126, 234, 0.2)' : 'rgba(102, 126, 234, 0.1)',
                  border: '1.5px solid rgba(102, 126, 234, 0.2)',
                  color: 'hsl(243, 75%, 50%)',
                }}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl transition-all duration-300"
                style={{
                  background: 'rgba(102, 126, 234, 0.1)',
                  border: '1.5px solid rgba(102, 126, 234, 0.2)',
                  color: 'hsl(243, 75%, 50%)',
                }}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 pt-24 px-6 md:hidden"
            style={{
              background: isDarkMode ? "rgba(20, 20, 25, 0.98)" : "rgba(245, 245, 247, 0.98)",
              backdropFilter: "blur(20px)",
            }}
          >
            <ul className="flex flex-col gap-6">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href;
                return (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-2xl font-semibold transition-colors ${
                        isActive ? 'text-primary' : 'text-foreground hover:text-primary'
                      }`}
                      style={{
                        textDecoration: isActive ? 'underline' : 'none',
                        textUnderlineOffset: '8px',
                      }}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                );
              })}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-gradient inline-block text-center"
                >
                  Hire Me
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
