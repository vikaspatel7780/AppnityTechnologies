import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaLaptopCode,
  FaUsers,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";
import img1 from "../assets/delivery.jpg";

const images = [
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
  "https://images.unsplash.com/photo-1581090700227-1e8e06c2b1c9",
  "https://images.unsplash.com/photo-1587614382346-4ecfcf14a6c2",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Home = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-100 to-white">
      {/* Hero Section */}
      <motion.div
        className="min-h-screen bg-gradient-to-br from-white to-blue-50 px-6 md:px-12 py-20 flex flex-col justify-center items-center text-center space-y-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-blue-700 leading-tight max-w-4xl"
          variants={itemVariants}
        >
          Custom Web & App Solutions for Freelancers & Businesses
        </motion.h1>

        <motion.p
          className="text-gray-700 text-lg md:text-xl max-w-2xl"
          variants={itemVariants}
        >
          We deliver blazing-fast, modern websites and apps with expert UI/UX, full-stack development, and robust deployment strategies.
        </motion.p>

        <motion.button
          className="px-8 py-3 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700 transition shadow-xl hover:scale-105 active:scale-95"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🚀 Let's Work Together
        </motion.button>
      </motion.div>

      {/* Portfolio Slider */}
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide px-4 py-12">
        <div className="inline-flex gap-6">
          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img1}
              alt="project"
              className="h-60 w-96 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.h2
          className="text-4xl font-semibold text-center text-gray-800 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[{
            icon: <FaLaptopCode />, title: "Web Development", text: "React.js, Next.js & Tailwind for high-performance websites."
          }, {
            icon: <FaReact />, title: "UI/UX & Frontend", text: "Modern interfaces with animations & accessibility in mind."
          }, {
            icon: <FaNodeJs />, title: "Backend & API", text: "Node.js, Express, MongoDB & PostgreSQL APIs built for scale."
          }].map((service, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.05 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <div className="text-5xl text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-base">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-blue-50 py-16 px-6">
        <motion.h2
          className="text-4xl font-semibold text-center text-gray-800 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Why Freelancers Love Us
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[{
            icon: <FaShieldAlt />, title: "Secure & Reliable", desc: "We follow best practices to keep your business safe."
          }, {
            icon: <FaUsers />, title: "Collaborative Process", desc: "Transparent communication & shared feedback at every step."
          }, {
            icon: <FaRocket />, title: "Launch Ready", desc: "Optimized for speed, SEO, and production deployments."
          }].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <div className="text-5xl text-blue-600 mb-4">{item.icon}</div>
              <h4 className="text-2xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600 text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Clients Section */}
      <div className="py-16 px-4">
        <motion.h2
          className="text-4xl font-semibold text-center text-gray-800 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Trusted By
        </motion.h2>
        <motion.div
          className="flex justify-center gap-6 flex-wrap max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {["ZebraPay", "FarmTech", "EduSoft", "RetailPro"].map((client, i) => (
            <motion.div
              key={i}
              className="bg-white px-8 py-4 rounded-full shadow-md text-blue-700 font-medium hover:bg-blue-100 transition text-lg"
              whileHover={{ scale: 1.05 }}
            >
              {client}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
