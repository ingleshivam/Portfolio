"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const timelineData = [
    {
      type: "work",
      title: "Junior Software Developer",
      company: "DroitCloud",
      period: "July 2024 - Present",
      location: "Remote",
      description: [
        "Developed RAG chat and AI agents using LangChain, LlamaIndex, and vector DBs",
        "Built and maintained Next.js web apps with responsive, user-friendly UI",
        "Implemented secure auth using NextAuth/Clerk and integrated REST/GraphQL APIs",
        "Optimized database operations with Prisma ORM and PostgreSQL",
      ],
    },
    {
      type: "education",
      title: "Bachelor's in Computer Science & Engineering",
      company: "D.Y.Patil College of Engineering & Technology, Kolhapur",
      period: "2021 – 2024",
      location: "Kolhapur",
      description: [
        "Specialized in modern web development and AI technologies",
      ],
    },
    {
      type: "education",
      title: "Diploma in Computer Engineering",
      company: "Shri Shivaji Polytechnic Institute, Parbhani",
      period: "2018 – 2021",
      location: "Maharashtra",
      description: [
        "Foundation in computer science and programming fundamentals",
      ],
    },
  ];
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
              About Me
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            A passionate developer with a strong foundation in modern web
            technologies and a keen interest in AI integration
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                I&aposm a motivated and detail-oriented developer specializing
                in React.js and Next.js, with a strong foundation in JavaScript,
                HTML, and CSS. My expertise extends to AI tools and frameworks,
                including LlamaIndex, LangChain, and Generative AI.
              </p>
              <p className="text-white/70 mb-6 leading-relaxed">
                I&aposm passionate about building responsive and scalable web
                applications, implementing efficient state management, and
                creating clean, maintainable code that delivers exceptional user
                experiences.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 rounded-2xl">
              <div className="glass border-accent/20 rounded-2xl p-4 text-center">
                <div className="p-4 text-center">
                  <div className="text-2xl font-bold text-accent">1+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
              </div>
              <div className="glass border-accent/20 rounded-2xl p-4 text-center">
                <div className="p-4 text-center">
                  <div className="text-2xl font-bold text-accent">5+</div>
                  <div className="text-sm text-muted-foreground">
                    Projects Completed
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Experience & Education
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute  left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-400" />

              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="relative flex items-start gap-6 mb-8"
                >
                  {/* Timeline Dot */}
                  <div
                    className={`w-12 h-12  rounded-full flex items-center justify-center border-2 ${
                      item.type === "work"
                        ? "bg-cyan-500 border-cyan-400"
                        : "bg-purple-500 border-purple-400"
                    }`}
                  >
                    <Award
                      size={20}
                      className={
                        item.type === "work" ? "text-white " : "text-white"
                      }
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          item.type === "work"
                            ? "bg-cyan-500/20 text-cyan-400"
                            : "bg-purple-500/20 text-purple-400"
                        }`}
                      >
                        {item.period}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-cyan-400 mb-2">{item.company}</p>
                    <ul className="text-white/60 text-sm space-y-1">
                      {item.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-muted-foreground ">•</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
