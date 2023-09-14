import { ReactNode, useState } from "react";
import { motion } from "framer-motion";

import classNames from "classnames";

declare type SectionProps = {
  children: ReactNode;
  className?: string;
  title?: string | ReactNode;
};

const Section = ({ children, title, className }: SectionProps) => {
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.div
      initial={false}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
      onViewportEnter={() => setIsInView(true)}
      className={classNames("flex flex-col", { "space-y-4": title }, className)}
    >
      {title && (
        <div className="text-xl font-semibold leading-7 text-gray-800">
          {title}
        </div>
      )}
      {children}
    </motion.div>
  );
};

export default Section;
