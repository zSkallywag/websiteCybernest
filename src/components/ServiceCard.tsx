import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  features?: string[];
};

const ServiceCard = ({ title, description, icon, link, features }: ServiceCardProps) => {
  return (
    <motion.div 
      className="card-gradient border-glow rounded-lg overflow-hidden h-full"
      whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(168, 60, 240, 0.2)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="bg-accent/20 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-accent-bright">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-300 mb-4 flex-grow">{description}</p>
        
        {features && features.length > 0 && (
          <ul className="mb-6 space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-accent-bright mr-2">•</span>
                <span className="text-gray-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        <Link 
          to={link} 
          className="mt-auto inline-flex items-center text-accent-bright hover:text-white group"
        >
          Scopri di più 
          <motion.span 
            className="inline-block ml-2"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
          >
            <ArrowRight size={16} />
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;