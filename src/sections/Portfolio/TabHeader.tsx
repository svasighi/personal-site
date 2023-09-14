import classNames from "classnames";
import { motion } from "framer-motion";
import { ReactNode } from "react";

import styles from "./Portfolio.module.scss";

type tabHeaderProps = {
  tabs: {
    id: string;
    label: string;
    component: ReactNode;
  }[];
  activeTab: string;
  setActiveTab: (index: string) => void;
};

export function TabHeader({ tabs, activeTab, setActiveTab }: tabHeaderProps) {
  return (
    <div className={styles["tab-header"]}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={classNames(
            styles["tab-header__item"],
            activeTab === tab.id && styles["tab-header__item-active"],
          )}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="tab"
              className={styles["tab-header__item-active__pill"]}
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.6,
                damping: 30,
              }}
            />
          )}
          <span className={styles["tab-header__item-active__label"]}>
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  );
}
