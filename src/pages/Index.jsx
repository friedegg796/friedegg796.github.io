import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Terminal, 
  Activity, 
  Cpu, 
  Globe, 
  Lock, 
  Zap, 
  ChevronRight 
} from 'lucide-react';


// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const Index = () => {
  const [isBooted, setIsBooted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsBooted(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isBooted) {
    return (
      <div className="boot-container">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="boot-text"
        >
          <span className="glitch-char">SYS_INIT</span>
          <motion.div 
            className="boot-progress"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div 
      className="interface-wrapper"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="noise-overlay"></div>
      
      <div className="dashboard-grid">
        
        <motion.div variants={itemVariants} className="bento-card hero-card span-6">
          <div className="card-accent cyan"></div>
          <div className="card-content">
            <div className="profile-header">
              <div className="avatar-glow">
                <div className="avatar-placeholder"></div>
              </div>
              <div>
                <h1 className="name-text">HASNAIN ALAHI</h1>
                <p className="role-text">A student</p>
              </div>
            </div>
            <p className="bio-text">
              wow
            </p>
            <div className="action-row">
              <button className="btn-primary">Contact</button>
            </div>
          </div>
        </motion.div>

        
      

    


      </div>
    </motion.div>
  );
};

export default Index;