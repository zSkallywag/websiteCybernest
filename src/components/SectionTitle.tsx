import { motion } from 'framer-motion';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
};

const SectionTitle = ({ title, subtitle, centered = false, light = false }: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <motion.h2 
        className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'heading-gradient' : ''}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className="text-lg text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div 
        className="w-20 h-1 bg-accent-bright mt-4 mb-6"
        initial={{ width: 0 }}
        whileInView={{ width: centered ? 80 : 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ marginLeft: centered ? 'auto' : '', marginRight: centered ? 'auto' : '' }}
      />
    </div>
  );
};

export default SectionTitle;