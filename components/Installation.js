import React, { useState } from 'react';
import Breadcrums from './Breadcrums';
import CodeBlock from './Code';
import Highlight from './Highlight';
import Paragraph from './Paragraph';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconContext } from 'react-icons';
import { BsDot } from 'react-icons/bs';
import { MdKeyboardArrowUp, MdKeyboardArrowRight } from 'react-icons/md';

export default function Installation() {
	const [hoveredLink, setHoveredLink] = useState('/');
	const data = [
		{ title: 'Home', href: '/' },
		{ title: 'Introduction', href: '/introduction' },
		{ title: 'Examples', href: '/examples' },
		{ title: 'Docs', href: '/docs' },
	];
	return (
		<div className="w-full p-2">
			<Paragraph>
				To use the tailwind-inputs package in your project, you can
				install it via npm or yarn:
			</Paragraph>
			<div className="mt-6 flex flex-col items-center justify-center md:flex-row md:items-center md:justify-center md:space-x-3">
				<CodeBlock
					copy
					lang={'bash'}
					className={'w-fit'}
					code={`npm i @k8pai/tailwind-inputs@latest --save      `}
				/>
				<Link
					href={'/docs'}
					className="px-5 py-4 mb-6 whitespace-nowrap transition-all rounded-md text-cyan-200 hover:text-cyan-300 bg-[#282828] hover:bg-[#1e1e1e] font-semibold capitalize tracking-wider hover:shadow-md align-middle"
				>
					<span className="hidden sm:block">Read the docs</span>
					<span className="block sm:hidden">docs</span>
				</Link>
			</div>
			<div
				className="p-4 w-full flex flex-col items-center md:flex-row md:justify-center"
				onMouseLeave={() => setHoveredLink('/')}
			>
				{data.map((el, ind) => {
					return (
						<div className="flex items-center" key={ind}>
							<Link
								href={el.href}
								className="relative p-2 w-fit"
								id={el.href}
								onMouseEnter={() => setHoveredLink(el.href)}
							>
								{el.title}
								{el.href === hoveredLink && (
									<motion.div
										className="absolute py-2 -left-5 inset-y-0 md:left-0 md:py-0 md:inset-y-full md:-bottom-4 md:inset-x-0 md:px-2 flex items-center md:justify-center"
										layoutId="linkIndicator"
										transition={{
											type: 'spring',
											stiffness: 350,
											damping: 30,
										}}
									>
										<MdKeyboardArrowUp className="hidden md:block" />
										<MdKeyboardArrowRight className="block md:hidden" />
									</motion.div>
								)}
							</Link>
							{ind < data.length - 1 ? (
								<span className="hidden md:block">
									<IconContext.Provider
										value={{ size: '1.5em' }}
									>
										<BsDot />
									</IconContext.Provider>
								</span>
							) : null}
						</div>
					);
				})}
			</div>
		</div>
	);
}
