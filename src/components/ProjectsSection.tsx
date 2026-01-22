import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Gamepad2, Droplets, FileText, CloudSun, ShoppingCart, Film, Users } from "lucide-react";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  icon: React.ReactNode;
  color: string;
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "Plen Game",
    description:
      "An immersive racing game with vivid graphics and simple controls. Race through complex environments, avoid obstacles, and compete for the highest score.",
    techStack: ["Unity", "C#", "Game Dev"],
    icon: <Gamepad2 className="w-8 h-8" />,
    color: "from-blue-500 to-purple-600",
    github: "https://github.com/shashenAmalka",
  },
  {
    title: "Blood Management System",
    description:
      "MERN stack application streamlining blood donor management, request handling, and inventory with real-time updates and user-friendly interface.",
    techStack: ["MySQL", "Express.js", "React", "Node.js"],
    icon: <Droplets className="w-8 h-8" />,
    color: "from-red-500 to-rose-600",
  },
  {
    title: "NoteApp",
    description:
      "Mobile app for capturing and organizing notes using SQLite. Intuitive interface for creating, editing, and managing notes on the go.",
    techStack: ["Kotlin", "SQLite", "Android"],
    icon: <FileText className="w-8 h-8" />,
    color: "from-sky-400 to-blue-500",
    github: "https://github.com/shashenAmalka",
  },
  {
    title: "Weather App",
    description:
      "React-based application providing real-time weather updates with dynamic UI and API integration for accurate forecasts.",
    techStack: ["React", "API Integration", "CSS"],
    icon: <CloudSun className="w-8 h-8" />,
    color: "from-cyan-400 to-teal-500",
  },
  {
    title: "GroceryMate",
    description:
      "AI-powered grocery shopping system with chatbot list generation, secure login, and user profile management for tracking impact.",
    techStack: ["Python", "React", "MongoDB", "AI"],
    icon: <ShoppingCart className="w-8 h-8" />,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "PV Films",
    description:
      "Movie and TV series browsing system using JSP and MVC architecture. Search and watch content with 99.5% uptime and 2,000+ titles.",
    techStack: ["Java Servlet", "MySQL", "MVC", "Tomcat"],
    icon: <Film className="w-8 h-8" />,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "SkillShare",
    description:
      "Collaborative learning platform for sharing skills with learning paths, likes, comments, follows, and progress tracking.",
    techStack: ["Spring Boot", "React.js"],
    icon: <Users className="w-8 h-8" />,
    color: "from-violet-500 to-purple-600",
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
      initial={{ opacity: 0, y: 80, rotateX: 10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ 
        delay: index * 0.15, 
        duration: 0.7,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group project-card min-w-[320px] md:min-w-[380px] flex-shrink-0"
    >
      {/* Gradient Header */}
      <div
        className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
      >
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        {/* Icon */}
        <div className="relative z-10 w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
          {project.icon}
        </div>

        {/* Links */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="tech-badge text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 px-6"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 glass-card"
          >
            💼 Development Portfolio
          </motion.span>
          <h2 className="section-heading mx-auto">Featured Projects</h2>
          <p className="section-subheading mx-auto">
            Applications I've built showcasing full-stack development skills
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrollable container */}
          <div className="overflow-x-auto pb-6 px-6 scrollbar-thin">
            <div className="flex gap-6 w-max">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-muted-foreground text-sm mt-6"
        >
          ← Scroll to explore more projects →
        </motion.p>
      </div>
    </section>
  );
};
