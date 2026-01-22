import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download } from "lucide-react";
import profileImage from "@/assets/profile.jpeg";

const techStack = [
  { name: "Selenium", icon: "🔬" },
  { name: "Cypress", icon: "🌲" },
  { name: "Postman", icon: "📮" },
  { name: "JIRA", icon: "📋" },
  { name: "SQL", icon: "🐬" },
  { name: "React", icon: "⚛️" },
  { name: "Spring Boot", icon: "🌱" },
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "Swagger", icon: "📄" },
  { name: "Agile", icon: "🔄" },
  { name: "Git", icon: "📂" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 to-purple-500/30 blur-3xl scale-110" />
              
              {/* Image container with glass frame */}
              <div className="relative glass-card p-3 rounded-3xl">
                <img
                  src={profileImage}
                  alt="Dulshan - QA Engineer"
                  className="w-72 h-72 md:w-80 md:h-80 object-cover object-top rounded-2xl"
                />
                
                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -right-4 -bottom-4 glass-card px-4 py-2 rounded-xl"
                >
                  <span className="text-sm font-semibold text-gradient">
                    1+ Year QA Experience
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-semibold mb-2 block">
              About Me
            </span>
            <h2 className="section-heading">
              Ensuring Software Excellence Through Quality Assurance
            </h2>
            <p className="section-subheading mb-8">
              I am K M S Dulshan Ranaweera, a dedicated QA Associate with a passion 
              for ensuring software quality through comprehensive testing strategies. 
              With expertise in automation testing (Selenium, Cypress), API testing (Postman), 
              and database testing (SQL), I bridge the gap between development and deployment.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { value: "15+", label: "Projects" },
                { value: "100+", label: "Test Cases" },
                { value: "1+", label: "Year Exp" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center glass-card p-4 rounded-xl"
                >
                  <div className="text-3xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download CV Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="flex justify-center lg:justify-start"
            >
              <a
                href="/KMSDulshanResume.pdf"
                download="KMSDulshan_QA_Resume.pdf"
                className="px-8 py-4 rounded-full font-semibold border-2 border-primary bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-primary/50"
              >
                <Download size={20} />
                Download My CV
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-center text-muted-foreground mb-8 font-medium">
            Technologies I Work With
          </h3>
          <div className="relative overflow-hidden py-4">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

            {/* Marquee */}
            <div className="flex animate-marquee">
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex items-center gap-3 px-6 py-3 mx-3 glass-card rounded-full shrink-0 hover:scale-105 transition-transform cursor-default"
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="font-medium text-foreground whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
