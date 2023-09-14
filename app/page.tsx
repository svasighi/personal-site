import Bio from '@/src/sections/Bio';
import Contact from '@/src/sections/Contact';
import Experience from '@/src/sections/Experience';
import Portfolio from '@/src/sections/Portfolio';
import Sidebar from '@/src/sections/Sidebar';
import StackTicker from '@/src/sections/StackTicker';
import Testimonials from '@/src/sections/Testimonials';

export default function Home() {
	return (
		<>
			<div className='mx-auto box-border flex h-screen flex-col justify-between px-4 md:container sm:px-8 lg:flex-row lg:space-x-10 lg:overflow-hidden lg:px-12 xl:px-24'>
				<Sidebar />

				<StackTicker />
				<div className='h-auto flex-1 rounded-xl text-justify lg:overflow-auto'>
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
