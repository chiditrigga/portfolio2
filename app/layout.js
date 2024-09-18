"use client";

import "./globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname(); 

  return (
    <html lang="en">
      <body className="antialiased">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ 
              opacity: 1, 
             
              x:'100vw'  
            }}
            animate={{ 
              opacity: 1, 
           x:0
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
          type: "spring",
          mass: 0.9,
            
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
