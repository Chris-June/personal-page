import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { StreamingText } from '../../features/StreamingText';
import { Button } from '../../ui/Button/button';
import { ArrowRight } from 'lucide-react';
import ContactFormModal from '../../Modals/ContactFormModal';

export const CTASection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-purple-50/30 dark:via-blue-950/30 dark:to-purple-950/30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-10 pb-4 leading-tight">
              <StreamingText
                text="Ready to Transform Your Vision?"
                speed={100}
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block pb-2"
              />
            </h2>
            
            <div className="mb-8">
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Join us in creating innovative solutions that push boundaries and redefine possibilities. Your journey to digital excellence starts here.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button
                variant="default"
                size="lg"
                className="group min-w-[200px]"
                onClick={() => setIsContactModalOpen(true)}
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Link to="/work">
                <Button
                  variant="outline"
                  size="lg"
                  className="min-w-[200px]"
                >
                  View Portfolio
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Infinite</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Global</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Project Delivery</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};
