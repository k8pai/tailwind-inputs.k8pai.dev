import Link from 'next/link';
import React from 'react';
import Breadcrums from '../../../components/Breadcrums';
import CodeBlock from '../../../components/Code';
import Highlight from '../../../components/Highlight';

const index = () => {
	return (
		<div className="flex flex-col space-y-5">
			<div>
				<div className="flex items-baseline justify-between mb-4">
					<h1
						id={'getting-started'}
						className="text-4xl font-extrabold font-mono pt-8"
					>
						Getting Started
					</h1>
					<Breadcrums
						type={'linking'}
						url={'/docs/getting-started#Requirements'}
					/>
					<span className="flex-grow"></span>
					<Link
						href={''}
						className={
							'rounded-lg py-2 px-3 text-base font-mono transition-all duration-150 border-2 border-[#b3b3b3] hover:text-cyan-400/90 hover:border-cyan-400/90'
						}
					>
						view on github
					</Link>
				</div>

				<p className="font-semibold mb-4 text-lg tracking-wider">
					Tailwind Configured Forms, Integrating inputs and
					validations so that,{' '}
					<span className="font-semibold text-white">
						You do less
					</span>
					.
				</p>
			</div>

			<div>
				<div className="flex items-baseline mb-4">
					<h1
						id={'Requirements'}
						className="text-3xl font-bold font-mono pt-8"
					>
						Requirements
					</h1>
					<Breadcrums
						type={'linking'}
						url={'/docs/getting-started#Requirements'}
					/>
				</div>

				<p className="font-semibold mb-4 text-lg tracking-wider">
					- Project should be{' '}
					<span className="font-semibold text-white">
						Tailwind configured .
					</span>
				</p>
			</div>
			<div>
				<div className="flex items-baseline mb-4">
					<h1
						id={'Quick-Setup'}
						className="text-3xl font-bold font-mono pt-8"
					>
						Quick Setup
					</h1>
					<Breadcrums
						type={'linking'}
						url={'/docs/getting-started#Quick-Setup'}
					/>
				</div>
				<div className="mb-5">
					<p className="font-semibold mb-4 text-lg tracking-wider">
						To get started, install{' '}
						<Link
							href={
								'https://www.npmjs.com/package/@k8pai/tailwind-inputs'
							}
							className={'font-mono text-white tracking-normal '}
						>
							{' '}
							Tailwind inputs
						</Link>{' '}
						via npm
					</p>
					<CodeBlock
						lang={'bash'}
						code={`npm i @k8pai/tailwind-inputs@latest`}
					/>
				</div>

				<div className="mb-5">
					<p className="font-semibold mb-4 text-lg tracking-wider">
						Update your <Highlight title={'tailwind.config.js'} />
						file's content array to hold the package components.
					</p>
					<CodeBlock
						lang={'javascript'}
						code={`module.exports = {
	content: [
		'./node_modules/@k8pai/tailwind-inputs/**/*.js',
		'...',
	],
	theme: {
		extend: {
		},
	},
	plugins: [],
};`}
					/>
				</div>
			</div>
		</div>
	);
};

export default index;
