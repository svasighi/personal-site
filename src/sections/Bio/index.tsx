'use client';

import Section from '@components/Section';
import { MY_BIO } from '@constants/texts';
import styles from './Bio.module.scss';

//assets
import Image from 'next/image';

import flash from '@public/flash.svg';
import localFont from 'next/font/local';

export const headlineFont = localFont({
	src: '../../../public/fonts/headline.woff2',
	display: 'swap',
});

export const Bio = () => {
	return (
		<Section className='flex flex-col space-y-8'>
			<div className={styles.heading + ' ' + headlineFont.className}>
				<div className={styles.name}>
					<hr />
					<div>I’m Shadmehr Vasighi</div>
				</div>
				<div className={styles.role}>
					<span>
						Frontend developer
						<Image src={flash} alt='flash' />
						<br />
					</span>
					<span>Ex-Backend developer</span>
				</div>
			</div>
			<div>
				<p className={styles.brief}>{MY_BIO}</p>
			</div>
		</Section>
	);
};
