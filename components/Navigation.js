import Link from 'next/link';
import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaGithub, FaNpm } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';
import MobileNav from './MobileNav';

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="w-full border-b bg-[#111111] text-lg font-semibold">
			<div className="p-6 flex max-w-7xl w-full mx-auto items-center space-x-5">
				<div className="flex items-center lg:hidden">
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
				<h1 className="font-montez sm:hidden">Ti</h1>
				<h1 className="font-montez text-2xl hidden sm:block">
					Tailwind Inputs
				</h1>
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

			<MobileNav
				isOpen={isOpen}
				onClick={() => setIsOpen((val) => !val)}
			/>
		</div>
	);
};

export default Navigation;
