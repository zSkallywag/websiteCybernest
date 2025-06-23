import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type MethodStepProps = {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
};

const MethodStep = ({ number, title, description, icon }: MethodStepProps) => {
  return (
    <motion.div 
      className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: number * 0.1 }}
    >
      <div className="relative">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent-bright text-white text-xl font-bold z-10 relative shadow-glow">
          {icon}
        </div>
        {number < 5 && (
          <div className="hidden md:block absolute left-8 top-16 w-0.5 h-24 bg-accent-bright/30" />
        )}
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default MethodStep;