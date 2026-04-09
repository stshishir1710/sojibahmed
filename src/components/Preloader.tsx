import { motion } from "framer-motion";

const Preloader = () => (
  <motion.div
    initial={{ opacity: 1 }}
    animate={{ opacity: 0 }}
    transition={{ delay: 1.5, duration: 0.5 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
  >
    <div className="flex flex-col items-center gap-6">
      {/* Dot spinner */}
      <div className="flex gap-2">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="w-3 h-3 rounded-full bg-primary"
            animate={{
              y: [0, -16, 0],
              opacity: [0.4, 1, 0.4],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg font-display font-bold gradient-text"
      >
      </motion.div>
    </div>
  </motion.div>
);

export default Preloader;
