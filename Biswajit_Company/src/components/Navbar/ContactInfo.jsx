import { motion } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <motion.div 
      className="flex items-center text-white/90"
      whileHover={{ scale: 1.05 }}
    >
      <FaPhone className="mr-2 text-purple-400" />
      <span className="font-medium">+91-9891846187</span>
    </motion.div>
  );
};

export default ContactInfo;