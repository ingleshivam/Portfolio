"use client";

import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#8B5CF6"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0}
      />
    </Sphere>
  );
}

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/ingleshivam",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/shivam-ingle-969839163/",
    },
    {
      icon: Mail,
      href: "#contact",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-cyan-400 text-lg font-medium">
              Hello, I&apos;m
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Shivam Ingle
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl text-white/80 mb-8"
          >
            Next.Js Developer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className=" text-lg text-white/60 mb-8 max-w-lg"
          >
            Motivated and detail-oriented developer specializing in React.js and
            Next.js, with expertise in AI tools and modern web technologies. I
            build responsive, scalable applications that deliver exceptional
            user experiences.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(139, 92, 246, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-medium flex items-center gap-2 justify-center"
            >
              <Download size={20} />
              Download Resume
            </motion.button>

            <a href={"#contact"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full cursor-pointer px-8 py-3 border border-white/20 rounded-full text-white font-medium hover:bg-white/10 transition-colors flex items-center gap-2 justify-center"
              >
                <Mail size={20} />
                Hire Me
              </motion.button>
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center lg:justify-start"
          >
            {socialLinks.map(({ icon: Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target={href === "#contact" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right 3D Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-96 lg:h-[500px] relative"
        >
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <AnimatedSphere />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
          </Canvas>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full backdrop-blur-sm border border-white/10"
          />
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full backdrop-blur-sm border border-white/10"
          />
        </motion.div>
      </div>
    </div>
  );
}
