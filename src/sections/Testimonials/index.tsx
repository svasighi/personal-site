'use client';

import Image from 'next/image';

import Section from '@components/Section';
import Player from '@components/Player';

import styles from './Testimonials.module.scss';

//assets
import testimonial from '@public/mr-gholami.png';

export const Testimonials = () => {
	return (
		<Section title='Trusted by Great people'>
			<div className={styles.wrapper}>
				<div className={styles.author}>
					<Image src={testimonial} alt='Mohsen Gholami' />
					<div className={styles.details}>
						<div className={styles.name}>Mohsen Gholam</div>
						<div className={styles.position}>founder at MaherHa.com</div>
					</div>
				</div>
				<p className='line-clamp-3 text-base font-normal leading-normal text-gray-700'>
					&quot;Shadmehr was a real pleasure to work with and we look forward to
					working with him again. He&apos;s definitely the kind of designer that
					you can trust with any project from A-Z.&quot; &quot;Shadmehr was a
					real pleasure to work with and we look forward to working with him
					again. He&apos;s definitely the kind of designer that you can trust
					with any project from A-Z.&quot;
				</p>
				<Player className='h-14 w-full sm:w-80' file_url='/sample-12s.mp3' />
			</div>
		</Section>
	);
};
