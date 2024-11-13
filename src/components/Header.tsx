import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white font-bold text-xl"
          >
            KG
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex space-x-6"
          >
            <a href="#about" className="text-white hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="text-white hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="text-white hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="text-white hover:text-blue-400 transition-colors">Contact</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="text-white hover:text-blue-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-white hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:contact@example.com"
               className="text-white hover:text-blue-400 transition-colors">
              <Mail size={20} />
            </a>
          </motion.div>
        </div>
      </nav>
    </header>
  );
}