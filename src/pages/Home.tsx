import { motion } from 'framer-motion';
import { ArrowRight, Code, Paintbrush, LineChart } from 'lucide-react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      title: 'Modern Development',
      description: 'Using the latest technologies to build fast, responsive, and scalable applications.',
      icon: <Code size={24} />
    },
    {
      title: 'Beautiful Design',
      description: 'Creating stunning user interfaces that provide exceptional user experiences.',
      icon: <Paintbrush size={24} />
    },
    {
      title: 'Data-Driven',
      description: 'Making informed decisions based on analytics and user behavior.',
      icon: <LineChart size={24} />
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-12"
      >
        <div className="text-center max-w-3xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Transform Your Digital Presence
          </motion.h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            We create modern, responsive, and user-friendly digital experiences 
            that help your business stand out.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium"
            >
              Get Started
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </motion.div>
          ))}
        </div>

        <div className="w-full max-w-4xl bg-gray-100 dark:bg-gray-800 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Let's work together to create something amazing.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium"
            >
              View Our Services
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;