// CIA / Intelligence-grade cinematic animation variants

export const fadeInUp = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -12, filter: 'blur(2px)', transition: { duration: 0.28 } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
};

// Cards slide in from left with clip-path reveal (classified doc feel)
export const cardItem = {
  hidden: { opacity: 0, x: -16, clipPath: 'inset(0 100% 0 0)' },
  visible: {
    opacity: 1, x: 0, clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0, x: 10, clipPath: 'inset(0 100% 0 0)',
    transition: { duration: 0.2 },
  },
};

// Data stream drop-in for info blocks
export const dataStream = {
  hidden: { opacity: 0, y: -10, scaleY: 0.4, filter: 'blur(3px)', transformOrigin: 'top' },
  visible: {
    opacity: 1, y: 0, scaleY: 1, filter: 'blur(0px)',
    transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
  },
  exit: { opacity: 0, scaleY: 0.5, transition: { duration: 0.18 } },
};

export const scaleOut = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, scale: 0.85, transition: { duration: 0.22 } },
};

export const slideLeft = {
  hidden: { opacity: 0, x: -32, clipPath: 'inset(0 0 0 100%)' },
  visible: { opacity: 1, x: 0, clipPath: 'inset(0 0 0 0%)', transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.22 } },
};

export const slideRight = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, x: 20, transition: { duration: 0.22 } },
};

// Page-level: tactical frame zoom
export const pageTransition = {
  hidden: { opacity: 0, scale: 0.97, clipPath: 'inset(4% 4% 4% 4%)' },
  visible: {
    opacity: 1, scale: 1, clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0, scale: 0.98, clipPath: 'inset(2% 2% 2% 2%)',
    transition: { duration: 0.25 },
  },
};

export const glowPulse = {
  animate: {
    opacity: [0.4, 1, 0.4],
    scale: [1, 1.04, 1],
    transition: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
  },
};
