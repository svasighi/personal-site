'use client';
import { TabHeader } from './TabHeader';
import { useState } from 'react';

import { motion } from 'framer-motion';
import Section from '@components/Section';

import { tabs } from './Tabs/';

export const Portfolio = () => {
	const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

	return (
		<Section className='flex flex-col space-y-6'>
			<TabHeader
				tabs={tabs}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
			<div>
				<motion.div
					key={activeTab ?? 'empty'}
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: -10, opacity: 0 }}
					transition={{ duration: 0.2 }}
				>
					{tabs.filter((tab) => tab.id == activeTab)[0]?.component}
				</motion.div>
			</div>
		</Section>
	);
};
