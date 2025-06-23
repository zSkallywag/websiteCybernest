import { Shield, Server, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const Logo = ({ size = 'default' }) => {
  const sizeClass = size === 'large' ? 'w-16 h-16' : 'w-8 h-8';
  
  return (
    <motion.div 
      className={`relative ${sizeClass} flex items-center justify-center`}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-30"
      >
        <Server className={`text-accent-bright ${sizeClass}`} />
      </motion.div>
      
      <motion.div
        initial={{ rotate: 120 }}
        animate={{ rotate: -240 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-50"
      >
        <Cpu className={`text-accent ${sizeClass}`} />
      </motion.div>
      
      <Shield className={`text-accent-bright ${sizeClass} relative z-10`} />
    </motion.div>
  );
};

export default Logo;