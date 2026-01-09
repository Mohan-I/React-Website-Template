import React from 'react';
import { motion } from 'framer-motion';
import './Notfound.css'

const NotFound = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-cyan-400 overflow-hidden font-mono">
      
      {/* Background Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'linear-gradient(#0ff 1px, transparent 1px), linear-gradient(90deg, #0ff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Glowing Scanner Line */}
      <motion.div 
        initial={{ top: "-10%" }}
        animate={{ top: "110%" }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-1 bg-cyan-500 shadow-[0_0_15px_#0ff] z-10"
      />

      <div className="z-20 text-center px-4">
        {/* Animated 404 Header */}
        <motion.h1 
          animate={{ textShadow: ["0 0 5px #0ff", "0 0 20px #0ff", "0 0 5px #0ff"] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-9xl font-black tracking-tighter"
        >
          404
        </motion.h1>

        <h2 className="text-2xl uppercase tracking-widest mb-6">
          System Error: Sector Not Found
        </h2>

        <p className="max-w-md mx-auto text-cyan-700 mb-8">
          The requested coordinate does not exist in the known database. 
          The data stream has been corrupted or moved to a restricted sector.
        </p>

        {/* Action Button */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px #0ff" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 uppercase tracking-widest font-bold hover:bg-cyan-400 hover:text-black transition-colors duration-300"
        >
          Return to Command Center
        </motion.a>
      </div>

      {/* Decorative Corner Brackets */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-cyan-500"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-cyan-500"></div>
    </div>
  );
};

export default NotFound