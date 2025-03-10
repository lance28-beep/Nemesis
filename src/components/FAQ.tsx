'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of web services including custom web development, UI/UX design, responsive design, performance optimization, and ongoing maintenance. Our expertise covers modern technologies like Next.js, React, Three.js, and more."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity and scope. A typical website project can take 4-8 weeks, while more complex applications may take 3-6 months. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "What is your development process?",
    answer: "Our process follows an agile methodology with clear phases: Discovery & Planning, Design, Development, Testing, and Launch. We maintain regular communication and provide progress updates throughout the project."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer comprehensive support packages including maintenance, updates, security patches, and technical assistance. We ensure your website remains secure, up-to-date, and performing optimally."
  },
  {
    question: "What technologies do you use?",
    answer: "We use cutting-edge technologies including Next.js, React, TypeScript, Three.js, Tailwind CSS, and more. Our stack is chosen based on project requirements to ensure the best performance and user experience."
  },
  {
    question: "How do you handle project communication?",
    answer: "We maintain transparent communication through regular meetings, progress reports, and dedicated project management tools. Our team is always accessible and responsive to your needs."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="section-title">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="section-subtitle">
            Find answers to common questions about our services, process, and expertise.
            Can't find what you're looking for? Contact us for more information.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 backdrop-blur-sm mb-4"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/20 to-accent-electric/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h3>
                  <ChevronDownIcon
                    className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-gray-300">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary magnetic-button"
          >
            Still Have Questions?
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}