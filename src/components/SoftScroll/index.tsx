'use client';

import { ReactNode } from 'react';

import { useEffect, useRef } from 'react';
import { handleKeyboardScroll, handleWheelScroll } from '@utils/scroll';
import { useBreakpoint } from '@hooks/useBreakpoints';

const SoftScroll = ({ children }: { children: ReactNode }) => {
	const scrollableRef = useRef<HTMLDivElement>(null);
	const { isLg } = useBreakpoint('lg');

	useEffect(() => {
		if (isLg) {
			window.addEventListener('wheel', (event: WheelEvent) => {
				handleWheelScroll(event, scrollableRef);
			});
			window.addEventListener('keydown', (event: KeyboardEvent) => {
				handleKeyboardScroll(event, scrollableRef);
			});
		} else {
			window.removeEventListener('wheel', (event: WheelEvent) => {
				handleWheelScroll(event, scrollableRef);
			});
			window.removeEventListener('keydown', (event: KeyboardEvent) => {
				handleKeyboardScroll(event, scrollableRef);
			});
		}
	}, [isLg]);

	return (
		<div
			ref={isLg ? scrollableRef : null}
			className='h-auto flex-1 overflow-auto rounded-xl text-justify'
		>
			{children}
		</div>
	);
};

export default SoftScroll;
