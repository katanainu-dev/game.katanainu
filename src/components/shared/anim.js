export const buttonVariants2 = {
  initial: {
    width: "0",
    height: "0",
    opacity: 0.5,
    left: "25px",
  },
  hover: {
    width: "100%",
    height: "200%",
    scale: 1.2,
    opacity: 1,
    left: "0",
    transition: {
      width: { duration: 0.4, ease: [0.5, 0, 0.75, 0] },
      delay: 0.1,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
