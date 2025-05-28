import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaHandsHelping, FaLightbulb } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const About = () => {
  return (
    <section className="min-h-screen bg-white py-16 px-4">
      {/* Heading */}
      <motion.div
        className="text-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl font-bold text-blue-700 mb-4">About Us</h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          We are a passionate team of developers and designers building innovative, reliable, and scalable digital products. Our mission is to empower businesses with top-tier technology solutions tailored to their goals.
        </p>
      </motion.div>

      {/* Feature Highlights */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mt-10">
        {[
          {
            icon: <FaBullseye />,
            title: "Our Mission",
            desc: "Deliver high-quality digital experiences that drive business growth.",
          },
          {
            icon: <FaHandsHelping />,
            title: "Our Values",
            desc: "Integrity, collaboration, and a deep commitment to client success.",
          },
          {
            icon: <FaLightbulb />,
            title: "Our Vision",
            desc: "To become a global leader in software innovation and development.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={i}
          >
            <div className="text-4xl text-blue-600 mb-4">{item.icon}</div>
            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
