import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaLaptopCode, FaUsers, FaShieldAlt, FaRocket } from "react-icons/fa";
import img1 from '../assets/delivery.jpg';

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

const Home = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-100 to-white">
      {/* Hero Section */}
 <motion.div
  className="text-center px-4 pt-20 pb-10"
  initial="hidden"
  animate="visible"
  variants={fadeUp}
>
  <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
    Welcome to Appnity Technologies
  </h1>
  <p className="text-lg text-gray-700 max-w-xl mx-auto">
    We build modern, scalable websites and apps to grow your business.  
    Our expert team delivers tailored digital solutions that empower your brand, enhance user engagement, and boost your online presence.
  </p>
  <p className="text-md text-gray-600 max-w-md mx-auto mt-3">
    From sleek interfaces to powerful backend systems, we handle everything with precision and creativity.
  </p>
  <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
    Get Started
  </button>
</motion.div>


      {/* Image Scroll Section - untouched */}
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide px-4 py-6">
        <div className="inline-flex gap-4">
          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img1}
              alt="project"
              className="h-56 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <motion.h2
          className="text-3xl font-semibold text-center text-gray-800 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          What We Do
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[{
            icon: <FaLaptopCode />,
            title: "Web Development",
            text: "Fast, responsive websites using React.js, Next.js, and Tailwind CSS.",
          }, {
            icon: <FaReact />,
            title: "Frontend Expertise",
            text: "Beautiful and performant UIs with React, Redux, and animations.",
          }, {
            icon: <FaNodeJs />,
            title: "Backend Solutions",
            text: "Robust APIs using Node.js, Express, MongoDB, and PostgreSQL.",
          }].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="bg-white p-6 rounded-xl shadow"
            >
              <div className="text-4xl text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-blue-50 py-12 px-4">
        <motion.h2
          className="text-3xl font-semibold text-center text-gray-800 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Why Choose Us
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <FaShieldAlt />, title: "Secure & Scalable", desc: "Built with security and scalability in mind for growing businesses." },
            { icon: <FaUsers />, title: "Client-Centric", desc: "We prioritize your needs and work closely with you at every step." },
            { icon: <FaRocket />, title: "Fast Delivery", desc: "Agile development ensures quicker delivery without compromising quality." },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <div className="text-4xl text-blue-600 mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Clients Section */}
      <div className="py-12 px-4">
        <motion.h2
          className="text-3xl font-semibold text-center text-gray-800 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Our Clients
        </motion.h2>
        <motion.div
          className="flex justify-center gap-8 flex-wrap max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {["ZebraPay", "FarmTech", "EduSoft", "RetailPro"].map((client, i) => (
            <motion.div
              key={i}
              className="bg-white px-6 py-3 rounded-lg shadow text-blue-700 font-semibold hover:bg-blue-100 transition"
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
