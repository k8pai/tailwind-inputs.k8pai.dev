import Link from 'next/link';
import React from 'react';
import { IconContext } from 'react-icons';
import { HiOutlineExternalLink } from 'react-icons/hi';
import CodeBlock from '../../../components/Code';
import OverviewCard from '../../../components/OverviewCard';

const overview = () => {
	return (
		<div className="flex flex-col space-y-5">
			<div>
				<div className="flex items-center justify-between mb-4">
					<h1 className="text-4xl font-extrabold font-mono">
						Tailwind Input Forms
					</h1>
					<Link
						href={'https://github.com/k8pai/tailwind-inputs'}
						className={
							'rounded-lg py-2 px-3 text-base font-mono transition-all duration-150 border-2 border-[#b3b3b3] hover:text-cyan-400/90 hover:border-cyan-400/90'
						}
					>
						view on github
					</Link>
				</div>

				<p className="font-semibold mb-4 text-lg tracking-wider"></p>
			</div>

			<div className="grid grid-cols-2 gap-2">
				<OverviewCard
					link={'/docs/forms/form-control'}
					title={'Form Controls'}
				/>
				<OverviewCard link={'/docs/forms/select'} title={'Select'} />
				<OverviewCard
					link={'/docs/forms/checks-radios'}
					title={'Checkbox and Radio'}
				/>
				<OverviewCard
					link={'/docs/forms/input-group'}
					title={'Input Groups'}
				/>
				<OverviewCard link={'/docs/forms/range'} title={'Range'} />
				<OverviewCard
					link={'/docs/forms/validation'}
					title={'Validation'}
				/>
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

export default overview;
