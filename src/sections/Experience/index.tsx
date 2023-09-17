'use client';

import Section from '@components/Section';
import { MY_EXPERIENCES } from '@constants/texts';
import ExperienceItem from '@components/ExperienceItem';

export const Experience = () => {
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
