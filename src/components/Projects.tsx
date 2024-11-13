import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "AI-Powered Analytics Platform",
    description: "Advanced analytics platform using machine learning algorithms for predictive insights.",
    image: "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?auto=format&fit=crop&q=80&w=1000",
    tags: ["Python", "TensorFlow", "React", "AWS"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "Cloud-Native Data Pipeline",
    description: "Scalable data processing pipeline built on cloud infrastructure.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
    tags: ["Apache Kafka", "Docker", "AWS", "Python"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "NLP Document Analyzer",
    description: "Natural language processing tool for automated document analysis and classification.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
    tags: ["Python", "BERT", "Flask", "React"],
    links: {
      demo: "#",
      github: "#"
    }
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white text-center mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-blue-900/10 rounded-lg overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.links.demo}
                    className="flex items-center text-blue-400 hover:text-blue-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                  <a
                    href={project.links.github}
                    className="flex items-center text-blue-400 hover:text-blue-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}