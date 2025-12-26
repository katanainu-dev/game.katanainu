export const textVariant = {
  initial: {
    opacity: 0,
    x: -30,
    transition: { duration: 0.75 },
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75 },
  },
};

export const img1Variant = {
  initial: {
    opacity: 0,
    y: 30,
    transition: { duration: 0.85 },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85 },
  },
};

export const logoVariant = {
  initial: {
    opacity: 0,
    y: 10,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      opacity: {
        duration: 1.2,
      },
      y: {
        duration: 1,
      },
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export const bottomAnimVariant = {
  initial: {
    opacity: 0,
    y: 40,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      opacity: {
        duration: 1.2,
      },
      y: {
        duration: 1,
      },
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export const leftAnimVariant = {
  initial: {
    opacity: 0,
    x: -20,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      opacity: {
        duration: 1.2,
      },
      x: {
        duration: 1,
      },
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};
