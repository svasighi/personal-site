'use client';

import Button from '@/src/components/Button';
import Section from '@/src/components/Section';
import styles from './Contact.module.scss';
import Image from 'next/image';

import flash from '@/public/flash.svg';
import wavy from '@/public/wavy.svg';

const Contact = () => {
	return (
		<Section
			title={
				<>
					I’m Open to Hiring ️
					<Image className='mb-2 ml-2 inline' src={flash} alt='flash' />
				</>
			}
		>
			<div className={styles.wrapper}>
				<div className={styles.description}>
					<div className={styles['hyphens-text']} lang='en'>
						I am interested in companies that provide a dynamic and progressive
						working environment, and offer challenging opportunities in my field
						of expertise.
					</div>
					<div className={styles['list-text']}>
						I am available for both
						<div className={styles.list}>
							<Image src={wavy} aria-hidden='true' alt='wavy' />
							<ul>
								<li>remote</li>
								<li>in-office</li>
							</ul>
						</div>
						work and relocation is not a concern for me.
					</div>
				</div>
				<Button tag='a' href='mailto:shadmehr.vasighi99@gmail.com'>
					👋🏼 say me hello
				</Button>
			</div>
		</Section>
	);
};

export default Contact;
