import { motion } from "framer-motion";

//variants for the stairs
const stairsAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

//reverse index for staggered effect.
const reverseIndex = (index: number) => {
  return 6 - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/*
        render 6 motion divs , each representing a step in the stairs.
        each div having animation of stairsAnimation object.
        The delay for each step is calculated dynamically based on its reversed index.
        Creating a staggered effect with decreasing delay for each subsequent step.
      */}
      {[...Array(6)].map((_: any, index: number) => {
        return (
          <motion.div
            key={index}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={stairsAnimation}
            className="h-full w-full bg-white relative"
            style={{ zIndex: reverseIndex(index) }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
          />
        );
      })}
    </>
  );
};

export default Stairs;
