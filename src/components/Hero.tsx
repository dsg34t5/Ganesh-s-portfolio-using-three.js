import { motion } from 'framer-motion';
import { Code2, Cloud, Database } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Konaki Ganesh
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-blue-400 font-light"
          >
            Aspiring Data Scientist & Cloud Architect
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center space-x-8 mt-8"
          >
            <div className="flex flex-col items-center space-y-2">
              <Code2 className="w-8 h-8 text-blue-400" />
              <span className="text-white">Machine Learning</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Database className="w-8 h-8 text-blue-400" />
              <span className="text-white">NLP</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Cloud className="w-8 h-8 text-blue-400" />
              <span className="text-white">Cloud Solutions</span>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-blue-500 text-white rounded-full font-medium mt-8 hover:bg-blue-600 transition-colors"
          >
            View My Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}