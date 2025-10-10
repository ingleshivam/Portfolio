"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { sendMail } from "@/lib/sendMail";

type FloatingInputProps = {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
  textarea?: boolean;
};

const FloatingInput = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  required = false,
  textarea = false,
}: FloatingInputProps) => {
  const InputComponent = textarea ? "textarea" : "input";

  return (
    <div className="relative">
      <InputComponent
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full bg-white/5 border border-white/20 rounded-lg px-4 pt-6 pb-2 text-white placeholder-transparent focus:border-cyan-400 focus:outline-none transition-colors peer ${
          textarea ? "min-h-[120px] resize-none" : "h-14"
        }`}
        placeholder={label}
        {...(textarea && { rows: 4 })}
      />
      <label className="absolute left-4 top-2 text-xs text-white/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:text-xs peer-focus:top-2 peer-focus:text-cyan-400">
        {label}
      </label>
    </div>
  );
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("Formdata : ", formData);
    sendMail({
      name: formData.name,
      email: formData.email,
      message: formData.message,
      subject: formData.subject,
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
              Let&apos;s Work Together
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s discuss your next
            project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                I&apos;m always excited to work on new projects and collaborate
                with amazing people. Whether you have a project in mind or just
                want to chat about technology, feel free to reach out!
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "shivamingle121@gmail.com",
                    href: "shivamingle121@gmail.com",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91 - 9146721757",
                    href: "+91 - 9146721757",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Pune, Maharashtra, India",
                    href: "#",
                  },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors">
                      <item.icon size={20} className="text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/ingleshivam",
                    color: "hover:text-gray-400",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/shivam-ingle-969839163/",
                    color: "hover:text-blue-400",
                  },
                  { icon: Twitter, href: "#", color: "hover:text-cyan-400" },
                  {
                    icon: Mail,
                    href: "#contact",
                    color: "hover:text-purple-400",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-white/10 rounded-full text-white/70 ${social.color} transition-colors border border-white/10 hover:border-white/20`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FloatingInput
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <FloatingInput
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <FloatingInput
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <FloatingInput
                label="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                textarea
                required
              />

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-4 rounded-lg font-medium flex items-center justify-center gap-3 transition-all ${
                  isSubmitted
                    ? "bg-green-500 text-white"
                    : isSubmitting
                    ? "bg-white/10 text-white/50 cursor-not-allowed"
                    : "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/25"
                }`}
              >
                {isSubmitted ? (
                  <>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-5 h-5 bg-white rounded-full flex items-center justify-center"
                    >
                      ✓
                    </motion.div>
                    Message Sent!
                  </>
                ) : isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
