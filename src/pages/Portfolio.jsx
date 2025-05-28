import React from "react";
import { motion } from "framer-motion";
import img1 from '../assets/delivery.jpg';
const projects = [
  {
    title: "E-Commerce Website",
    image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514",
    description: "A scalable e-commerce platform with Stripe payments, product catalog, and order tracking.",
  },
  {
    title: "Food Delivery App",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    description: "React Native-based food delivery app with real-time order tracking and Firebase integration.",
  },
  {
    title: "SaaS Dashboard",
    image: "https://images.unsplash.com/photo-1612832021532-0e82d3d410f4",
    description: "Admin dashboard for SaaS with analytics, user management, and subscription billing.",
  },
  {
    title: "Portfolio Website",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    description: "Personal portfolio showcasing projects, skills, resume, and contact form with email service.",
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

const Portfolio = () => {
  return (
    <section className="min-h-screen bg-white py-16 px-4">
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={0}
      >
        <h2 className="text-4xl font-bold text-blue-700 mb-4">Our Portfolio</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          A showcase of the work we’ve done for startups, small businesses, and enterprise clients.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-blue-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={index + 1}
          >
            <img
              src={img1}
              alt={project.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
