import Link from 'next/link';
import React from 'react';
import OverviewCard from '../../components/OverviewCard';
import CodeBlock from '../../components/Code';

export async function getStaticProps() {
	const overviewCards = [
		{
			link: '/docs/tiform',
			title: 'TiForm',
		},
		{
			link: '/docs/titext',
			title: 'TiText',
		},
		{
			link: '/docs/tidisclosure',
			title: 'TiDisclosure',
		},
		{
			link: '/docs/timultiselect',
			title: 'TiMultiselect',
		},
		{
			link: '/docs/timail',
			title: 'TiMail',
		},
		{
			link: '/docs/tipassword',
			title: 'TiPassword',
		},
	];

	return {
		props: { overviewCards },
	};
}

const index = ({ overviewCards }) => {
	return (
		<div className="flex flex-col space-y-5">
			<div>
				<div className="flex items-center justify-between mb-4">
					<h1 className="text-4xl font-extrabold font-mono">
						Tailwind Input Forms
					</h1>
				</div>
			</div>

			<div className="grid grid-cols-2 gap-2">
				{overviewCards.map((el, elXid) => (
					<OverviewCard key={elXid} link={el.link} title={el.title} />
				))}
			</div>
			<div>
				<div className="flex items-center justify-between mb-4">
					<h1 className="text-3xl font-bold font-mono">Overview</h1>
				</div>

				<p className="font-semibold mb-4 text-lg tracking-wider">
					To get started, install Tailwind inputs via npm
				</p>
				<CodeBlock
					type={'bash'}
					code={`npm i @k8pai/tailwind-inputs`}
				/>
			</div>
		</div>
	);
};

export default index;
