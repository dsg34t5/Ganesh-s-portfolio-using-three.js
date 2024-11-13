import { motion } from 'framer-motion';
import { Brain, Rocket, Coffee } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate technologist with a deep interest in Data Science, Machine Learning, 
              and Cloud Architecture. My journey in tech has been driven by curiosity and a 
              desire to solve complex problems through innovative solutions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Currently pursuing advanced studies in these fields, I combine theoretical knowledge 
              with practical applications to create impactful solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-6"
          >
            {[
              {
                icon: Brain,
                title: "Analytical Thinking",
                description: "Strong problem-solving skills with a data-driven approach"
              },
              {
                icon: Rocket,
                title: "Innovation Focus",
                description: "Passionate about emerging technologies and their applications"
              },
              {
                icon: Coffee,
                title: "Continuous Learning",
                description: "Always expanding knowledge in ML, AI, and cloud technologies"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start space-x-4 bg-blue-900/20 p-6 rounded-lg"
              >
                <item.icon className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}