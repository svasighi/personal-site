import { EXERCISES } from '@constants/portfolio';
import { PortfolioItem } from '../PortfolioItem';

import styles from '../Portfolio.module.scss';

const ExercisesTab = () => {
	return (
		<div className={styles['portfolio-page']}>
			{EXERCISES.map((item) => {
				return <PortfolioItem key={item.id} {...item}></PortfolioItem>;
			})}
		</div>
	);
};
export default ExercisesTab;
