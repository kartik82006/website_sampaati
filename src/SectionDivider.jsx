import React from "react";
import { motion } from "framer-motion";

const SectionDivider = ({ label = "Timeline Begins" }) => {
  return (
    <div className="relative w-full flex flex-col items-center py-12">
      {/* Option 2: Vertical scroll line (animated) */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "80px" }}
        transition={{ duration: 1 }}
        className="w-[2px] bg-gradient-to-b from-blue-400 to-transparent mb-6"
      />

      {/* Option 3: Label with horizontal lines */}
      <div className="flex items-center justify-center w-full px-4">
        <div className="w-1/4 border-t border-gray-600" />
        <span className="mx-4 text-sm text-gray-400 uppercase tracking-wider">
          {label}
        </span>
        <div className="w-1/4 border-t border-gray-600" />
      </div>

      {/* Option 1: Faded gradient line */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mt-6" />
    </div>
  );
};

export default SectionDivider;
