import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, CheckCircle, Cloud, Database, Shield, Network } from "lucide-react";

interface Certification {
  title: string;
  provider: "aws" | "azure";
  category: string;
  featured?: boolean;
  icon: React.ReactNode;
}

const certifications: Certification[] = [
  // Featured certifications
  {
    title: "Cloud Web Application Builder",
    provider: "aws",
    category: "AWS Academy Graduate",
    featured: true,
    icon: <Cloud className="w-6 h-6" />,
  },
  {
    title: "Cloud Computing Essentials",
    provider: "aws",
    category: "AWS SimuLearn",
    featured: true,
    icon: <Award className="w-6 h-6" />,
  },
  // AWS Certifications
  {
    title: "Core Security Concepts",
    provider: "aws",
    category: "AWS Training",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    title: "Highly Available Web Apps",
    provider: "aws",
    category: "AWS Training",
    icon: <Network className="w-5 h-5" />,
  },
  {
    title: "Networking Concepts",
    provider: "aws",
    category: "AWS Training",
    icon: <Network className="w-5 h-5" />,
  },
  {
    title: "S3 & Storage Solutions",
    provider: "aws",
    category: "AWS Training",
    icon: <Database className="w-5 h-5" />,
  },
  // Azure Certifications
  {
    title: "Intro to Virtual Machines",
    provider: "azure",
    category: "Azure Training",
    icon: <Cloud className="w-5 h-5" />,
  },
  {
    title: "Identity & Access Management",
    provider: "azure",
    category: "Azure Training",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    title: "Relational Database Services",
    provider: "azure",
    category: "Azure Training",
    icon: <Database className="w-5 h-5" />,
  },
  {
    title: "Load Balancers",
    provider: "azure",
    category: "Azure Training",
    icon: <Network className="w-5 h-5" />,
  },
  {
    title: "Configure Virtual Networks",
    provider: "azure",
    category: "Azure Training",
    icon: <Network className="w-5 h-5" />,
  },
];

const CertCard = ({
  cert,
  index,
  isInView,
}: {
  cert: Certification;
  index: number;
  isInView: boolean;
}) => {
  const isFeatured = cert.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`group cert-card ${
        isFeatured ? "col-span-1 md:col-span-2 lg:col-span-1" : ""
      }`}
    >
      {/* Provider Logo Badge */}
      <div
        className={`absolute top-4 right-4 w-10 h-10 rounded-xl flex items-center justify-center ${
          cert.provider === "aws"
            ? "bg-aws-dark text-aws-orange"
            : "bg-azure-blue text-white"
        }`}
      >
        {cert.provider === "aws" ? (
          <span className="font-bold text-xs">AWS</span>
        ) : (
          <span className="font-bold text-xs">AZ</span>
        )}
      </div>

      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
          cert.provider === "aws"
            ? "bg-aws-orange/10 text-aws-orange"
            : "bg-azure-blue/10 text-azure-blue"
        }`}
      >
        {cert.icon}
      </div>

      {/* Content */}
      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
        {cert.category}
      </span>
      <h3
        className={`font-semibold text-foreground mt-1 ${
          isFeatured ? "text-xl" : "text-lg"
        }`}
      >
        {cert.title}
      </h3>

      {/* Verified badge on hover */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1 }}
        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <div className="flex items-center gap-1 text-primary text-sm font-medium">
          <CheckCircle className="w-4 h-4" />
          <span>Verified</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredCerts = certifications.filter((c) => c.featured);
  const awsCerts = certifications.filter(
    (c) => c.provider === "aws" && !c.featured
  );
  const azureCerts = certifications.filter(
    (c) => c.provider === "azure" && !c.featured
  );

  return (
    <section
      id="certifications"
      className="py-24 relative overflow-hidden"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="section-container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold mb-2 block">
            Certifications
          </span>
          <h2 className="section-heading mx-auto">Cloud Mastery</h2>
          <p className="section-subheading mx-auto">
            Validated expertise across AWS and Azure cloud platforms
          </p>
        </motion.div>

        {/* Featured Certifications */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featuredCerts.map((cert, index) => (
            <CertCard
              key={cert.title}
              cert={cert}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* AWS & Azure Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* AWS Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 text-lg font-semibold mb-4"
            >
              <span className="w-8 h-8 rounded-lg bg-aws-dark text-aws-orange flex items-center justify-center text-xs font-bold">
                AWS
              </span>
              Amazon Web Services
            </motion.h3>
            <div className="grid gap-4">
              {awsCerts.map((cert, index) => (
                <CertCard
                  key={cert.title}
                  cert={cert}
                  index={index + 2}
                  isInView={isInView}
                />
              ))}
            </div>
          </div>

          {/* Azure Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 text-lg font-semibold mb-4"
            >
              <span className="w-8 h-8 rounded-lg bg-azure-blue text-white flex items-center justify-center text-xs font-bold">
                AZ
              </span>
              Microsoft Azure
            </motion.h3>
            <div className="grid gap-4">
              {azureCerts.map((cert, index) => (
                <CertCard
                  key={cert.title}
                  cert={cert}
                  index={index + 6}
                  isInView={isInView}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
