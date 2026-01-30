import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

// Import project images
import plenGameImg from "@/assets/Plen Game.jpeg";
import bloodMgmtImg from "@/assets/Blood Management System.jpeg";
import noteAppImg from "@/assets/NoteApp.jpeg";
import weatherAppImg from "@/assets/Weather App.jpeg";
import groceryMateImg from "@/assets/GroceryMate.jpg";
import pvFilmsImg from "@/assets/PV Films.jpeg";
import skillShareImg from "@/assets/SkillShare.jpeg";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  category: string;
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "Plen Game",
    description:
      "An immersive racing game with vivid graphics and simple controls. Race through complex environments, avoid obstacles, and compete for the highest score.",
    techStack: ["Unity", "C#", "Game Dev"],
    image: plenGameImg,
    category: "Game Development",
    github: "https://github.com/shashenAmalka",
  },
  {
    title: "Blood Management System",
    description:
      "MERN stack application streamlining blood donor management, request handling, and inventory with real-time updates and user-friendly interface.",
    techStack: ["MySQL", "Express.js", "React", "Node.js"],
    image: bloodMgmtImg,
    category: "Full Stack",
  },
  {
    title: "NoteApp",
    description:
      "Mobile app for capturing and organizing notes using SQLite. Intuitive interface for creating, editing, and managing notes on the go.",
    techStack: ["Kotlin", "SQLite", "Android"],
    image: noteAppImg,
    category: "Mobile Development",
    github: "https://github.com/shashenAmalka",
  },
  {
    title: "Weather App",
    description:
      "React-based application providing real-time weather updates with dynamic UI and API integration for accurate forecasts.",
    techStack: ["React", "API Integration", "CSS"],
    image: weatherAppImg,
    category: "Frontend",
  },
  {
    title: "GroceryMate",
    description:
      "AI-powered grocery shopping system with chatbot list generation, secure login, and user profile management for tracking impact.",
    techStack: ["Python", "React", "MongoDB", "AI"],
    image: groceryMateImg,
    category: "AI & Full Stack",
  },
  {
    title: "PV Films",
    description:
      "Movie and TV series browsing system using JSP and MVC architecture. Search and watch content with 99.5% uptime and 2,000+ titles.",
    techStack: ["Java Servlet", "MySQL", "MVC", "Tomcat"],
    image: pvFilmsImg,
    category: "Backend & Web",
  },
  {
    title: "SkillShare",
    description:
      "Collaborative learning platform for sharing skills with learning paths, likes, comments, follows, and progress tracking.",
    techStack: ["Spring Boot", "React.js"],
    image: skillShareImg,
    category: "Full Stack",
  },
];

const ProjectCard = ({
  project,
  index,
  isInView,
}: {
  project: Project;
  index: number;
  isInView: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ y: -12, scale: 1.03 }}
      className="group relative project-card overflow-hidden h-full"
    >
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Category badge */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
          <span className="text-white text-xs font-medium">{project.category}</span>
        </div>

        {/* Links - Show on hover */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          {project.github && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
          )}
          {project.live && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-[calc(100%-14rem)]">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05 }}
              className="tech-badge text-xs"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      {/* Floating orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
      />

      <div className="section-container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 glass-card"
          >
            💼 Development Portfolio
          </motion.span>
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Applications I've built showcasing full-stack development skills across 
            web, mobile, and game development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm">
            More projects available on{" "}
            <a
              href="https://github.com/shashenAmalka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              GitHub →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
