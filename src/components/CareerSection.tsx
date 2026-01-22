import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award, CheckCircle } from "lucide-react";

const careerPath = [
  {
    year: "2024 - Present",
    title: "QA Associate",
    company: "Professional Experience",
    description: "Leading quality assurance initiatives with automated and manual testing across web applications.",
    icon: <Briefcase className="w-6 h-6" />,
    skills: ["Selenium", "Cypress", "Postman", "JIRA"],
    isActive: true,
  },
  {
    year: "2023 - 2024",
    title: "QA Intern / Junior Developer",
    company: "Learning & Growth",
    description: "Gained hands-on experience in software testing methodologies and development practices.",
    icon: <GraduationCap className="w-6 h-6" />,
    skills: ["Manual Testing", "API Testing", "SQL", "Agile"],
    isActive: false,
  },
];

const qaSkills = [
  { name: "Automated Testing (Selenium)", category: "Automation" },
  { name: "Cypress", category: "Automation" },
  { name: "API Testing (Postman)", category: "API" },
  { name: "Swagger", category: "API" },
  { name: "Database Testing (SQL)", category: "Database" },
  { name: "Manual Testing", category: "Manual" },
  { name: "Functional Testing", category: "Manual" },
  { name: "Smoke & Sanity Testing", category: "Manual" },
  { name: "Test Management (JIRA)", category: "Tools" },
  { name: "Agile & Scrum", category: "Methodology" },
  { name: "React", category: "Dev" },
  { name: "Spring Boot", category: "Dev" },
  { name: "Python", category: "Dev" },
  { name: "Java", category: "Dev" },
];

export const CareerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="career" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="section-container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 glass-card"
          >
            🎯 Quality Assurance Professional
          </motion.span>
          <h2 className="section-heading mx-auto">Career Journey</h2>
          <p className="section-subheading mx-auto">
            My path in software quality assurance and development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
            
            {careerPath.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.2, type: "spring" }}
                  className={`absolute left-4 w-8 h-8 rounded-full flex items-center justify-center ${
                    item.isActive
                      ? "bg-gradient-to-br from-primary to-purple-600 text-white"
                      : "glass-card text-primary"
                  }`}
                >
                  {item.icon}
                </motion.div>

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.02, translateX: 10 }}
                  className={`glass-card p-6 rounded-2xl ${
                    item.isActive ? "ring-2 ring-primary/30" : ""
                  }`}
                >
                  {item.isActive && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      Current Position
                    </span>
                  )}
                  <span className="text-sm text-primary font-medium">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {item.company}
                  </p>
                  <p className="text-muted-foreground mt-3 text-sm">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.skills.map((skill) => (
                      <span key={skill} className="tech-badge text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* QA Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              QA & Technical Skills
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {qaSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.05, translateX: 5 }}
                  className="flex items-center gap-3 p-3 glass-card rounded-xl group cursor-default"
                >
                  <CheckCircle className="w-5 h-5 text-primary group-hover:text-primary/70 transition-colors" />
                  <div>
                    <p className="font-medium text-sm">{skill.name}</p>
                    <p className="text-xs text-muted-foreground">{skill.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
