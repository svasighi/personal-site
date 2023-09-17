'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

import classNames from 'classnames';

declare type SectionProps = {
	children: ReactNode;
	className?: string;
	title?: string | ReactNode;
};

const Section = ({ children, title, className }: SectionProps) => {
	return (
		<motion.div
			initial='hidden'
			transition={{ duration: 0.6 }}
			whileInView='visible'
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: 50 },
			}}
			className={classNames('flex flex-col', { 'space-y-4': title }, className)}
		>
			{title && (
				<div className='text-xl font-semibold leading-7 text-gray-800'>
					{title}
				</div>
			)}
			{children}
		</motion.div>
	);
};

export default Section;
