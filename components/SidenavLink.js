import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function SidenavLink({ path, links }) {
	const pathname = usePathname();
	return (
		<ul className="h-full w-full flex flex-col justify-evenly">
			{links.map((el, elXid) => {
				const isActive = el.href === pathname;
				return (
					<Link
						key={elXid}
						className={`transition-all rounded-md ml-6 py-2 w-fit`}
						href={el.href}
					>
						<span
							className={`relative px-3 py-2 text-sm font-semibold capitalize rounded-md ${
								!isActive ? 'hover:bg-zinc-700/40' : ''
							}`}
						>
							{el.name}
							{isActive ? (
								<motion.div
									className={
										'absolute inset-0 bg-zinc-700/40 rounded-md z-[-1]'
									}
									layoutId="sidenavLinks"
									transition={{
										type: 'spring',
										stiffness: 350,
										damping: 30,
									}}
								/>
							) : null}
						</span>
					</Link>
				);
			})}

			<span className="flex-grow"></span>
		</ul>
	);
}
