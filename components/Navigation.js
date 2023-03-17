import Link from 'next/link';
import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaGithub, FaNpm } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';
import MobileNav from './MobileNav';

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="w-full bg-[#121212] text-lg font-semibold">
			<div className="p-4 flex max-w-7xl w-full mx-auto items-center space-x-5">
				<div className="flex items-center md:hidden">
					<button onClick={() => setIsOpen((val) => !val)}>
						<IconContext.Provider
							value={{
								size: '1.5em',
								className: 'global-class-name',
							}}
						>
							<MdMenu />
						</IconContext.Provider>
					</button>
				</div>
				<h1 className="font-montez">Ti</h1>
				<div className=" hidden md:flex md:items-center space-x-5">
					<div>
						<Link href={'/docs/getting-started'}>Docs</Link>
					</div>
					<div>
						<Link href={'/components'}>Components</Link>
					</div>
					<div>
						<Link href={'/examples'}>Examples</Link>
					</div>
				</div>
				<span className="flex-grow"></span>
				<div>
					<Link href={'https://github.com/k8pai/tailwind-inputs'}>
						<IconContext.Provider
							value={{
								size: '1.4em',
								className: 'global-class-name',
							}}
						>
							<FaGithub />
						</IconContext.Provider>
					</Link>
				</div>
				<div>
					<Link
						href={
							'https://www.npmjs.com/package/@k8pai/tailwind-inputs'
						}
					>
						<IconContext.Provider
							value={{
								size: '1.5em',
								className: 'global-class-name',
							}}
						>
							<FaNpm />
						</IconContext.Provider>
					</Link>
				</div>
				<div></div>
			</div>
			{/* <div
				className={`transition-all duration-700 w-full ${
					isOpen ? 'block' : 'hidden'
				}`}
			> */}
			<MobileNav
				isOpen={isOpen}
				onClick={() => setIsOpen((val) => !val)}
			/>
			{/* </div> */}
		</div>
	);
};

export default Navigation;
