import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ShieldCheck } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="interface-footer"
    >
      <div className="footer-container">
        
        {/* Left: Branding & Copyright */}
        <div className="footer-section brand">
          <div className="brand-logo">
            <ShieldCheck size={16} className="icon-cyan" />
            <span className="brand-name">FRIEDEGG796</span>
          </div>
          <p className="copyright">&copy; 2026 // ALL_RIGHTS_RESERVED</p>
       



          </div>
          <div className="meta-item social-icons">
            <a href="https://github.com/friedegg796" target="_blank" rel="noopener noreferrer"><Github size={18} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /></a>
            <a href="mailto:hasnainalahiwork@gmail.com"><Mail size={18} /></a>
          </div>

      </div>
      <div className="footer-divider"></div>
    </motion.footer>
  );
};

export default Footer
