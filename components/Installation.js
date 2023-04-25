import React from 'react';
import Breadcrums from './Breadcrums';
import CodeBlock from './Code';
import Highlight from './Highlight';

const Installation = () => {
	return (
		<div>
			<div className="flex items-baseline mb-4">
				<h1
					className="text-3xl font-bold font-mono pt-8"
					id="installation"
				>
					Installation
				</h1>
				<Breadcrums
					type={'linking'}
					url={'/docs/forms/form-control#Example'}
				/>
			</div>

			<p className="font-semibold mb-4 text-lg tracking-wider">
				To quick start with TiMultiselect install{' '}
				<Highlight title={'@k8pai/tailwind-inputs'} /> from npm.
			</p>
			<CodeBlock
				lang={'bash'}
				code={`npm i @k8pai/tailwind-inputs@latest --save`}
			/>
		</div>
	);
};

export default Installation;
