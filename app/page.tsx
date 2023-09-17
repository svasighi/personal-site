'use client';
import { useEffect, useRef } from 'react';
import { handleKeyboardScroll, handleWheelScroll } from '@utils/scroll';
import { useBreakpoint } from '@hooks/useBreakpoints';

import {
	Portfolio,
	Sidebar,
	Experience,
	Contact,
	Bio,
	StackTicker,
	Testimonials,
} from '@sections/index';

//Todo move stylesheet to it's module
export default function Home() {
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
		<>
			<div className='mx-auto box-border flex h-screen flex-col justify-between px-4 md:container sm:px-8 lg:flex-row lg:space-x-10 lg:overflow-hidden lg:px-12 xl:px-24'>
				<Sidebar />

				<StackTicker isLg={isLg} />
				<div
					ref={isLg ? scrollableRef : null}
					className='h-auto flex-1 rounded-xl text-justify lg:overflow-auto'
				>
					<div className='flex flex-col space-y-12 pt-12 md:pt-16 lg:pt-20'>
						<Bio />
						<Testimonials />
						<Experience />
						<Portfolio />
						<Contact />
						<div className='inline-flex flex-col items-center justify-start py-8'>
							<div className='text-center text-base font-normal leading-normal text-black'>
								designed and developed By me
							</div>
							<div className='text-base font-normal leading-normal text-black'>
								with️ ❤️‍️ in a day and half
							</div>
						</div>
					</div>
				</div>
				<div className='relative top-12 hidden h-80 w-14 flex-col items-start justify-start gap-8 rounded-3xl border border-gray-400 bg-gray-50 bg-opacity-10 px-4 py-8 backdrop-blur-lg md:top-16 md:hidden lg:top-20 lg:inline-flex'></div>
			</div>
			<div className='absolute  right-8 top-20 -z-10 h-16 w-16 rounded-full bg-pink-500 blur-3xl'></div>
			<div className='absolute -top-12 right-32 -z-10  h-32 w-32 rounded-full bg-yellow-500 blur-3xl'></div>
		</>
	);
}
