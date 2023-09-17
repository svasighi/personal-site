import classNames from 'classnames';
import { PauseIcon, PlayIcon } from '@heroicons/react/24/solid';
import { HTMLProps, useEffect, useLayoutEffect, useState, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { motion } from 'framer-motion';

import SPECTRUM_CONFIG from './config';

const Player = ({
	file_url,
	...props
}: { file_url: string } & HTMLProps<HTMLDivElement>) => {
	const [playing, setPlaying] = useState<boolean>(false);
	const spectrumRef = useRef<WaveSurfer>();

	useEffect(() => {
		if (!spectrumRef.current) {
			const initial = WaveSurfer.create(SPECTRUM_CONFIG);
			initial.load(file_url);
			spectrumRef.current = initial;
			initial.on('finish', () => {
				initial.stop();
				setPlaying(false);
			});
		}
	});

	playing ? spectrumRef.current?.play() : spectrumRef.current?.pause();

	const togglePlayer = () => {
		setPlaying(!playing);
	};

	return (
		<div
			className={classNames(
				'flex items-center justify-center gap-3 rounded-2xl bg-gray-100 py-2.5 pl-1.5 pr-5',
				props.className
			)}
		>
			<motion.div
				onClick={togglePlayer}
				whileHover={{ scale: 1.15 }}
				whileTap={{ scale: 0.95 }}
				className='flex h-11 w-11 items-center justify-center space-x-3 rounded-2xl bg-gray-200'
			>
				{playing ? (
					<PauseIcon className='h-5 w-5 text-amber-400' />
				) : (
					<PlayIcon className='h-4 w-4 text-amber-400' />
				)}
			</motion.div>
			<div className='flex-1' id={SPECTRUM_CONFIG.container.slice(1)}></div>
		</div>
	);
};

export default Player;
