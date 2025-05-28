import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaCloud, FaPencilRuler, FaServer, FaChartLine } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    desc: "We create responsive and high-performance web apps using modern technologies like React, Next.js, and Tailwind CSS.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Apps",
    desc: "Build fast, user-friendly cross-platform mobile applications with React Native and Flutter.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Integration",
    desc: "Deploy, scale, and secure your applications on AWS, Azure, and Google Cloud.",
  },
  {
    icon: <FaPencilRuler />,
    title: "UI/UX Design",
    desc: "Craft clean, intuitive, and engaging interfaces for better user experience and retention.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    desc: "Robust and scalable APIs using Node.js, Express, MongoDB, PostgreSQL, and microservices.",
  },
  {
    icon: <FaChartLine />,
    title: "Business Analytics",
    desc: "Turn your data into insights with custom dashboards and analytics tools.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Services = () => {
  return (
    <section className="min-h-screen bg-blue-50 py-16 px-4">
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={0}
      >
        <h2 className="text-4xl font-bold text-blue-700 mb-4">Our Services</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          We provide end-to-end software solutions that help your business thrive in the digital world.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={index + 1}
          >
            <div className="text-4xl text-blue-600 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
