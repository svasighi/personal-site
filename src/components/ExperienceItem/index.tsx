import styles from "./Experience.module.scss";

declare type ExperienceProps = {
  title: string;
  description: string;
  duration: string;
  isLastItem?: boolean;
  key: any;
};

const ExperienceItem = (props: ExperienceProps): JSX.Element => {
  const { title, description, duration, isLastItem, key } = props;

  return (
    <div className={styles.wrapper} key={key}>
      <div className={styles.list_decoration}>
        <div className={styles.list_bullet}></div>
        <div className={styles.list_dashed}></div>
        {isLastItem && (
          <div className="pt h-4 w-4 rounded-full bg-gray-200"></div>
        )}
      </div>
      <div className={styles.list_information}>
        <div className={styles.title}>
          {title}
          <span className={styles.duration}>
            {" | "} {duration}
          </span>
        </div>
        <div className={styles.description}>
          {description}
          <br />
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
