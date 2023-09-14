'use client';

import Section from '@/src/components/Section';
import { MY_EXPERIENCES } from '@/src/constants/texts';
import ExperienceItem from '@/src/components/ExperienceItem';

const Experience = () => {
	return (
		<Section title='Experiences'>
			<div className='flex flex-col'>
				{MY_EXPERIENCES.map((item, i) => (
					<ExperienceItem
						key={item.title}
						{...{ ...item, ...{ isLastItem: MY_EXPERIENCES.length == i + 1 } }}
					/>
				))}
			</div>
		</Section>
	);
};
export default Experience;
