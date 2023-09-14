import { LinkIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

import styles from './Portfolio.module.scss';
import Image from 'next/image';

export type itemPropsType = {
	id: string;
	title: string;
	description: string;
	image: string;
	link: string;
}; //Todo add modal

export function PortfolioItem(props: itemPropsType) {
	const { link, image, title, description } = props;
	return (
		<div className={styles['portfolio-item']}>
			<Image
				src={image}
				className={styles['portfolio-item__image']}
				alt={title}
				height={240}
				width={316}
			/>
			<div className={styles['portfolio-item__details']}>
				<p className={styles['portfolio-item__title']}>{title}</p>
				<p className={styles['portfolio-item__description']}>{description}</p>
				<div className={styles['portfolio-item__links']}>
					<a href={link}>
						<LinkIcon className={styles['portfolio-item__link-icon']} />
					</a>
					<InformationCircleIcon
						className={styles['portfolio-item__link-icon']}
					/>
				</div>
			</div>
		</div>
	);
}
