import Link from 'next/link';
import React from 'react';
import Breadcrums from '../components/Breadcrums';
import CodeBlock from '../components/Code';
import Highlight from '../components/Highlight';
import Paragraph from '../components/Paragraph';
import Quoted from '../components/Quoted';
import { IconContext } from 'react-icons';
import { FaGithub } from 'react-icons/fa';

export default function introduction() {
	return (
		<div className="flex flex-col">
			<div>
				<div className="flex items-end justify-between mb-4">
					<div className="flex items-baseline">
						<h1
							id={'introduction'}
							className="text-xl sm:text-3xl font-bold font-mono pt-8"
						>
							Introduction
						</h1>
						<Breadcrums type={'linking'} url={'#introduction'} />
					</div>
					<span className="flex-grow"></span>
					<Link
						href={'https://github.com/k8pai/tailwind-inputs'}
						className={
							'rounded-lg py-2 px-3 text-base font-mono transition-all duration-150 border-2 border-[#b3b3b3] hover:text-cyan-400/90 hover:border-cyan-400/90'
						}
					>
						<span className="hidden sm:block">view on github</span>
						<IconContext.Provider
							value={{
								size: '1.4em',
								className: 'global-class-name block sm:hidden',
							}}
						>
							<FaGithub />
						</IconContext.Provider>
					</Link>
				</div>

				<Paragraph>
					Tailwind Inputs is a ready-to-use npm package that provides
					you with a set of pre-configured input components that are
					built using Tailwind CSS. These components are designed to
					help you speed up your development process and simplify your
					workflow by handling state management for input fields,
					allowing you to focus on building your application's
					functionality rather than spending time configuring inputs.
				</Paragraph>

				<Paragraph>
					Our package is designed to be flexible and customizable.
					With Tailwind Inputs, you can easily export components and
					modify them to suit your needs. You can even customize the
					package to fit your specific use case without having to
					worry about complex configuration values.
				</Paragraph>

				<Paragraph>
					Tailwind Inputs is the perfect solution for developers who
					need to build input forms quickly and efficiently. Whether
					you are working on a small or large project, our package can
					save you valuable time and resources. Our package is focused
					on input fields, so you can be sure that the components we
					provide are tailored to meet your input-related needs.
				</Paragraph>

				<Paragraph>
					Let's dive in and see how to get started with Tailwind
					Inputs.
				</Paragraph>
			</div>

			<div>
				<div className="flex items-baseline mb-4">
					<h1
						id={'Requirements'}
						className="text-xl sm:text-3xl font-bold font-mono pt-8"
					>
						Requirements
					</h1>
					<Breadcrums type={'linking'} url={'#Requirements'} />
				</div>

				<Paragraph>
					Before you start using Tailwind Inputs, please make sure
					your project meets the following requirements:
				</Paragraph>

				<div className="space-y-2">
					<div className="flex items-start">
						<Breadcrums />
						<div>
							<b>Tailwind CSS:</b> Tailwind Inputs is built using
							Tailwind CSS, so you need to have Tailwind CSS
							installed in your project. If you haven't installed
							Tailwind CSS, you can follow the official
							documentation to install it.
						</div>
					</div>
					<div className="flex items-start">
						<Breadcrums />
						<div>
							<b> React:</b> Tailwind Inputs is built on top of
							React, so you need to have React installed in your
							project. If you haven't installed React, you can
							follow the official documentation to install it.
						</div>
					</div>
					<div className="flex items-start">
						<Breadcrums />
						<div>
							<b>Node.js:</b> Tailwind Inputs is an npm package,
							so you need to have Node.js installed on your
							system. You can download Node.js from the official
							website.
						</div>
					</div>
					<div className="flex items-start">
						<Breadcrums />
						<div>
							<b>Npm:</b> Tailwind Inputs is distributed as an npm
							package, so you need to have npm installed on your
							system. npm comes bundled with Node.js, so you don't
							need to install it separately.
						</div>
					</div>
					<div className="flex items-start">
						<Breadcrums />
						<div>
							<b>Modern web browser:</b> Tailwind Inputs is
							designed to work with modern web browsers such as
							Google Chrome, Mozilla Firefox, Safari, and
							Microsoft Edge. Please make sure you are using a
							modern web browser to ensure the best experience
							when using Tailwind Inputs.
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className="flex items-baseline mb-4">
					<h1
						id={'Quick-Setup'}
						className="text-3xl font-bold font-mono pt-8"
					>
						Quick Setup
					</h1>
					<Breadcrums type={'linking'} url={'#Quick-Setup'} />
				</div>
				<div className="mb-5">
					<Paragraph>
						Install Tailwind Inputs via npm using the following
						command:
					</Paragraph>
					<CodeBlock
						copy
						lang={'bash'}
						code={`npm i @k8pai/tailwind-inputs@latest`}
					/>
				</div>

				<div className="mb-5">
					<Paragraph>
						Configure Tailwind CSS to include Tailwind Inputs
						components by adding the following code to your{' '}
						<Quoted>tailwind.config.js</Quoted> file:
					</Paragraph>
					<CodeBlock
						copy
						lang={'javascript'}
						code={`module.exports = {
	content: [
		'./node_modules/@k8pai/tailwind-inputs/**/*.js',
		// Add any other paths to your content array as needed.
	],
	theme: {
		extend: {
		// Add any custom theme styles or override default styles here.
		},
	},
	plugins: [
		// Add any Tailwind plugins you want to use here.
	],
};`}
					/>
				</div>
			</div>
		</div>
	);
}
