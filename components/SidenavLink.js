import Link from 'next/link';
import React from 'react';

export default function SidenavLink({ path }) {
	const links = [
		{
			href: '/docs/tiform',
			name: 'TiForm',
			disable: false,
		},
		{
			href: '/docs/titext',
			name: 'TiText',
			disable: false,
		},
		{
			href: '/docs/timail',
			name: 'TiMail',
			disable: false,
		},
		{
			href: '/docs/tiselect',
			name: 'TiSelect',
			disable: false,
		},
	];
	return (
		<ul className="h-full w-full flex flex-col justify-evenly space-y-1">
			{links.map((el, elXid) => {
				return (
					<Link
						key={elXid}
						className={`rounded-md ml-6 px-3 py-1 w-fit ${
							path === el.href ? 'bg-zinc-700/40' : ''
						} hover:bg-zinc-700/40`}
						href={el.href}
					>
						<div className=" flex items-center">
							<span className=" text-sm font-semibold capitalize">
								{el.name}
							</span>
						</div>
					</Link>
				);
			})}

			<span className="flex-grow"></span>
		</ul>
	);
}
