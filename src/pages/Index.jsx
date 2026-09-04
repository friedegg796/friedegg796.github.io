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
                <p className="role-text">A High-School Senior</p>
              </div>
            </div>
            <p className="bio-text">
              Trying to give and gain benefit.
            </p>
            <div className="action-row">
            </div>
          </div>
        </motion.div>
    


      </div>
    </motion.div>
  );
};

export default Index;