import { hover, motion } from "motion/react";
export default function PageButton({ onClick, children, className }) {
  return (
    <motion.button
      className={`button ${className}`}
      whileHover={"hover"}
      initial={"rest"}
      onClick={onClick}
    >
      <motion.span
        className="circle"
        variants={{
          rest: {
            scale: 0,
            transition: { duration: 0 },
          },
          hover: {
            scale: 20,
            transition: { duration: 0.5, ease: "easeOut" },
          },
        }}
      />

      {children}
    </motion.button>
  );
}
