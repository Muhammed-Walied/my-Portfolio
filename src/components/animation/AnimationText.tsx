import { motion } from 'framer-motion';

type Props = {
  text: string;
};
const defaultAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
export const AnimationText = ({ text }: Props) => {
  return (
    <motion.span
      variants={{
        visible: { transition: { staggerChildren: 0.05} },
        hidden: {},
      }}
      initial="hidden"
      animate="visible"
      aria-hidden
    >
      {text.split('').map((char, charIndex) => (
        <motion.span variants={defaultAnimation} key={`${char}-${charIndex}`}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};
