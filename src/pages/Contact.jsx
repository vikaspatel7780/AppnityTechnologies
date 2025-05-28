import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Contact = () => {
  return (
    <section className="min-h-screen bg-blue-50 py-16 px-4" id="contact">
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-4xl font-bold text-blue-700 mb-4">Contact Us</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Have a project or idea? Let's talk about how we can help.
        </p>
      </motion.div>

      <motion.form
        className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={1}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
            required
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-blue-500"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
