import { PortfolioItem } from '../PortfolioItem';

import { EXERCISES } from '@constants/portfolio';

import styles from '../Portfolio.module.scss';

const ProjectsTab = () => {
	return (
		<div className={styles['portfolio-page']}>
			{EXERCISES.map((item) => {
				return <PortfolioItem key={item.id} {...item}></PortfolioItem>;
			})}
		</div>
	);
};

export default ProjectsTab;
