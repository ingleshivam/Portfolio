"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Play } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "Recipe Share",
      description:
        "Share your favorite recipe with detailed ingredients, instructions, and photos. Our easy-to-use form makes it simple to showcase your culinary creativity.",
      image: "/recipe-share.png",
      tags: [
        "Next.Js",
        "Prisma ORM",
        "TypeScript",
        "Llamaindex",
        "Qdrant Vector DB",
        "Vercel",
        "Groq",
        "Framer Motion",
        "Next Auth",
        "ShadCN",
      ],
      liveUrl: "https://recipe-book-five-theta.vercel.app/",
      githubUrl: "#",
      featured: true,
    },

    {
      title: "3D Portfolio Website",
      description:
        "Interactive portfolio with Framer motion animations and immersive 3D elements",
      image: "/portfolio.png?height=300&width=500",
      tags: [
        "Next.Js",
        "Framer Motion",
        "TypeScript",
        "React Three Fiber",
        "Vercel",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    // {
    //   title: "Mobile Banking App",
    //   description:
    //     "Secure banking interface with biometric authentication and smooth UX",
    //   image: "/placeholder.svg?height=300&width=500",
    //   tags: ["React Native", "TypeScript", "Redux", "Firebase"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   featured: false,
    // },
    // {
    //   title: "VR Experience Platform",
    //   description:
    //     "WebXR platform for immersive virtual reality experiences in the browser",
    //   image: "/placeholder.svg?height=300&width=500",
    //   tags: ["WebXR", "Three.js", "A-Frame", "WebGL"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   featured: false,
    // },
    // {
    //   title: "Social Media App",
    //   description:
    //     "Real-time social platform with live messaging and content sharing",
    //   image: "/placeholder.svg?height=300&width=500",
    //   tags: ["Next.js", "Socket.io", "PostgreSQL", "Redis"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   featured: false,
    // },
  ];

  const ProjectCard = ({
    project,
    index,
  }: {
    project: (typeof projects)[0];
    index: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={500}
          height={300}
          className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Hover Actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
            href={project.liveUrl}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
          >
            <ExternalLink size={20} />
          </motion.a>
          <motion.a
            href={project.githubUrl}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
          >
            <Github size={20} />
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
          >
            <Play size={20} />
          </motion.button>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-white/60 mb-4 line-clamp-2">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string, tagIndex: number) => (
            <span
              key={tagIndex}
              className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/70 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-xs font-medium text-white">
            Featured
          </span>
        </div>
      )}
    </motion.div>
  );

  return (
    <div className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            A showcase of my recent work and creative experiments
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-white/20 rounded-full text-white font-medium hover:bg-white/10 transition-colors"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
