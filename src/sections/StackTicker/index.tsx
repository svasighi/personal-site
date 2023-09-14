'use client';

import { useEffect, useState } from 'react';
import { Stacks } from '../../constants/stacks';

import { motion } from 'framer-motion';

import styles from './StackTicker.module.scss';
import { useBreakpoint } from '@/src/hooks/useBreakpoints';
import Image from 'next/image';

const StackTicker = () => {
	const { isLg } = useBreakpoint('lg');

	const animationStates = [
		{ x: -(Stacks.length * 192) },
		{ y: -(Stacks.length * 192) },
	];
	const [animation, setAnimation] = useState(animationStates[1]);

	useEffect(() => {
		if (isLg) {
			setAnimation(animationStates[1]);
		} else {
			setAnimation(animationStates[0]);
		}
	}, [isLg]);

	return (
		<div className={styles.wrapper}>
			{[Stacks, Stacks].map((stack, block) => (
				<motion.div
					//added for reRendering on breakpoints changes
					key={Math.random()}
					transition={{
						type: 'tween',
						duration: 40,
						ease: 'linear',
						repeat: Infinity,
					}}
					whileHover={{
						scale: 1.2,
					}}
					initial={isLg ? { y: 0 } : { x: 0 }}
					animate={animation}
					className={styles.stacks}
				>
					{stack.map((item) => {
						return (
							<div key={`${item.name},${block}`} className={styles.stack_item}>
								<p>{item.name}</p>
								<Image
									src={item.image}
									alt={item.name}
									height={24}
									width={24}
								/>
							</div>
						);
					})}
				</motion.div>
			))}
		</div>
	);
};
export default StackTicker;
