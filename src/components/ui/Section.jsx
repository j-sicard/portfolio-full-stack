import { motion } from 'framer-motion';

export const Section = ({ children, id, className = "" }) => {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`}>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto px-6 md:px-12"
      >
        {children}
      </motion.div>
    </section>
  );
};
