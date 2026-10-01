import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 25,
    restDelta: 0.0005
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#3B82F6] origin-left z-[100] shadow-[0_0_10px_rgba(59,130,246,0.5)] pointer-events-none"
      style={{ scaleX }}
    />
  );
};
