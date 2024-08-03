import {
	Portfolio,
	Sidebar,
	Experience,
	Contact,
	Bio,
	StackTicker,
	Testimonials,
} from '@sections/index';
import SoftScroll from '@/src/components/SoftScroll';
import { PhoneIcon } from '@heroicons/react/24/solid';

//Todo move stylesheet to it's module
export default function Home() {
	return (
		<>
			<div className='mx-auto box-border flex h-fit flex-col justify-between overflow-x-hidden px-4 md:container sm:px-8 lg:h-screen lg:flex-row lg:space-x-10 lg:overflow-hidden lg:px-12 xl:px-24'>
				<Sidebar />

				<StackTicker />
				<SoftScroll>
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
				</SoftScroll>
				<a
					href=' tel:+989196850370'
					className='lg:flex-0 group fixed bottom-10 mt-20 h-fit w-fit cursor-pointer gap-2 rounded-2xl bg-slate-800 p-4 text-slate-200 shadow-2xl shadow-slate-700 transition-all duration-500 ease-in-out hover:flex hover:shadow-xl hover:shadow-slate-600 lg:static lg:flex'
				>
					<PhoneIcon width={20} />
					<p className='hidden hover:block group-hover:block lg:block'>
						+989196850370
					</p>
				</a>
			</div>
			<div className='absolute  right-8 top-20 -z-10 h-16 w-16 rounded-full bg-pink-500 blur-3xl'></div>
			<div className='absolute -top-12 right-32 -z-10  h-32 w-32 rounded-full bg-yellow-500 blur-3xl'></div>
		</>
	);
}
