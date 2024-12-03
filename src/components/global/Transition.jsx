import React from "react";
import { motion } from "motion/react";

const Transition = (Page) => {
  return () => (
    <>
      <Page />
      {/* transisi 1 */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-slate-950 transform origin-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* transisi 2 */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-slate-950 transform origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default Transition;