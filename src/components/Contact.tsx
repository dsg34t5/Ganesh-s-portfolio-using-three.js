import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 bg-black/10">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white text-center mb-16"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              {[
                { icon: Mail, text: "contact@example.com", href: "mailto:contact@example.com" },
                { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
                { icon: MapPin, text: "New York, NY", href: "#" }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <item.icon className="w-6 h-6" />
                  <span>{item.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-blue-900/10 border border-blue-900/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-blue-900/10 border border-blue-900/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full bg-blue-900/10 border border-blue-900/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                rows={6}
                className="w-full bg-blue-900/10 border border-blue-900/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}