import { motion } from 'framer-motion';
import { Brain, Database, Cloud, Code, Server, LineChart } from 'lucide-react';

const skills = [
  {
    category: "Machine Learning",
    icon: Brain,
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Deep Learning"],
    color: "from-blue-600 to-blue-400"
  },
  {
    category: "Data Science",
    icon: LineChart,
    skills: ["Python", "R", "Pandas", "NumPy"],
    color: "from-purple-600 to-purple-400"
  },
  {
    category: "Cloud Computing",
    icon: Cloud,
    skills: ["AWS", "Azure", "GCP", "Docker"],
    color: "from-green-600 to-green-400"
  },
  {
    category: "Programming",
    icon: Code,
    skills: ["Python", "JavaScript", "Java", "SQL"],
    color: "from-yellow-600 to-yellow-400"
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    color: "from-red-600 to-red-400"
  },
  {
    category: "Big Data",
    icon: Server,
    skills: ["Hadoop", "Spark", "Kafka", "Airflow"],
    color: "from-indigo-600 to-indigo-400"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 bg-black/10">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white text-center mb-16"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-br ${category.color} p-1 rounded-lg`}
            >
              <div className="bg-black/90 p-6 rounded-lg h-full">
                <div className="flex items-center space-x-4 mb-6">
                  <category.icon className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}