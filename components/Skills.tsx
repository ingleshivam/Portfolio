"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95, color: "from-blue-400 to-blue-600" },
        { name: "Next.js", level: 90, color: "from-gray-400 to-gray-600" },
        { name: "TypeScript", level: 88, color: "from-blue-500 to-blue-700" },
        { name: "Tailwind CSS", level: 92, color: "from-cyan-400 to-cyan-600" },
        {
          name: "Responsive Design",
          level: 90,
          color: "from-gray-400 to-gray-600",
        },
        {
          name: "JavaScript (ES6+)",
          level: 88,
          color: "from-cyan-400 to-cyan-600",
        },
      ],
    },
    {
      title: "AI & Modern Tools",
      skills: [
        { name: "LlamaIndex", level: 75, color: "from-green-400 to-green-600" },
        {
          name: "LangChain",
          level: 78,
          color: "from-purple-400 to-purple-600",
        },
        {
          name: "Generative AI",
          level: 70,
          color: "from-pink-400 to-pink-600",
        },
        {
          name: "RAG Systems",
          level: 72,
          color: "from-yellow-400 to-yellow-600",
        },
        {
          name: "NextAuth.js",
          level: 80,
          color: "from-green-400 to-green-600",
        },
        {
          name: "Clerk API",
          level: 75,
          color: "from-purple-400 to-purple-600",
        },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 80, color: "from-orange-400 to-orange-600" },
        { name: "Prisma ORM", level: 75, color: "from-red-400 to-red-600" },
        { name: "PostgreSQL", level: 78, color: "from-green-500 to-green-700" },
        {
          name: "RESTful APIs",
          level: 82,
          color: "from-emerald-400 to-emerald-600",
        },
        { name: "GraphQL", level: 70, color: "from-orange-400 to-orange-600" },
        {
          name: "Qdrant Vector DB",
          level: 65,
          color: "from-red-400 to-red-600",
        },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        {
          name: "Git/GitHub",
          level: 90,
          color: "from-orange-400 to-orange-600",
        },
        { name: "VS Code", level: 85, color: "from-red-400 to-red-600" },
        { name: "Node.js", level: 80, color: "from-green-500 to-green-700" },
        {
          name: "Vercel",
          level: 75,
          color: "from-emerald-400 to-emerald-600",
        },
        {
          name: "Railway",
          level: 75,
          color: "from-red-400 to-red-600",
        },
        {
          name: "CI/CD",
          level: 75,
          color: "from-green-500 to-green-700",
        },
      ],
    },

    {
      title: "3D & Animation",
      skills: [
        { name: "Three.js", level: 85, color: "from-green-400 to-green-600" },
        {
          name: "React Three Fiber",
          level: 80,
          color: "from-purple-400 to-purple-600",
        },
        {
          name: "Framer Motion",
          level: 90,
          color: "from-pink-400 to-pink-600",
        },
        { name: "GSAP", level: 75, color: "from-yellow-400 to-yellow-600" },
      ],
    },
  ];

  const SkillBar = ({
    skill,
    index,
  }: {
    skill: { name: string; level: number; color: string };
    index: number;
  }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
      if (isInView) {
        const timer = setTimeout(() => {
          setWidth(skill.level);
        }, index * 100);
        return () => clearTimeout(timer);
      }
    }, [skill.level, index]);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="mb-6"
      >
        <div className="flex justify-between items-center mb-2">
          <span className="text-white font-medium">{skill.name}</span>
          <span className="text-white/60 text-sm">{skill.level}%</span>
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
            initial={{ width: 0 }}
            animate={{ width: `${width}%` }}
            transition={{ duration: 1, delay: index * 0.1 }}
          />
        </div>
      </motion.div>
    );
  };

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
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                {category.title}
              </h3>

              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  index={categoryIndex * 4 + skillIndex}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech Icons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Technologies I Work With
          </h3>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind",
              "Three.js",
              "Framer",
              "Node.js",
              "PostgreSQL",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center hover:bg-white/10 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  {tech.slice(0, 2)}
                </div>
                <span className="text-white/70 text-xs">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
