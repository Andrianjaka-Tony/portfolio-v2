import { motion } from "motion/react";

type Props = {
  name: string;
};

export function ProjectText({ name }: Props) {
  return (
    <div className="absolute py-8 bottom-0 w-full flex justify-center">
      <motion.div className="overflow-hidden text-4xl leading-normal">
        <motion.p
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            ease: [0.8, 0.05, 0.21, 0.93],
            duration: 0.7,
          }}
        >
          {name}
        </motion.p>
      </motion.div>
    </div>
  );
}
