import { AnimatePresence, motion } from "framer-motion";

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

const Stairs = () => {
  return (
    <div>
      <h1>Stairs</h1>
    </div>
  );
};

export default Stairs;
