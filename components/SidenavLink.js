import Link from 'next/link';
import React from 'react';

export default function SidenavLink({ link, name, currPage }) {
	return (
		<Link
			className={`rounded-md ml-6 px-3 py-1 w-fit ${
				currPage === link ? 'bg-zinc-700/40' : ''
			} hover:bg-zinc-700/40`}
			href={link}
		>
			<div className=" flex items-center">
				<span className=" text-sm font-semibold capitalize">
					{name}
				</span>
			</div>
		</Link>
	);
}
