import Link from 'next/link';
import React, { useContext } from 'react';
import { TiPathContext } from '../lib/Context';

// export async function getStaticProps() {

// 	console.log(links);

// 	return {
// 		props: {
// 			links,
// 		},
// 	};
// }

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
		// {
		// 	href: '/docs/forms/overview',
		// 	name: 'Overview',
		// 	disable: true,
		// },
		// {
		// 	href: '/docs/forms/form-control',
		// 	name: 'Form Control',
		// 	disable: true,
		// },
		// {
		// 	href: '/docs/forms/select',
		// 	name: 'Select',
		// 	disable: true,
		// },
		// {
		// 	href: '/docs/forms/checks-radios',
		// 	name: 'Checks & radio',
		// 	disable: true,
		// },
		// {
		// 	href: '/docs/forms/range',
		// 	name: 'Range',
		// 	disable: true,
		// },
		// {
		// 	href: '/docs/forms/input-group',
		// 	name: 'Input Groups',
		// 	disable: true,
		// },
		// {
		// 	href: '/docs/forms/validation',
		// 	name: 'Validation',
		// 	disable: true,
		// },
	];

	// const { path } = useContext(TiPathContext);path
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
