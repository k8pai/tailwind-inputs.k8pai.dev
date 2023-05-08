import React, { useContext, useEffect, useState } from 'react';
import { IconContext } from 'react-icons';

import { BsSearch, BsBookmark } from 'react-icons/bs';
import { CiMail } from 'react-icons/ci';
import { CgMoreO } from 'react-icons/cg';
import { FaBell, FaUserAlt, FaFeatherAlt, FaHashtag } from 'react-icons/fa';
import { MdOutlineMoreHoriz } from 'react-icons/md';
import { SiTwitter } from 'react-icons/si';
import { TbForms } from 'react-icons/tb';
import { GiBookmarklet } from 'react-icons/gi';
import SidenavLink from './SidenavLink';
import { TiPathContext } from '../lib/Context';

export default function SideNav() {
	const { path } = useContext(TiPathContext);
	const gettingStarted = [
		{
			path: 'introduction',
			href: '/introduction',
			name: 'Introduction',
			disable: false,
		},
		{
			path: 'Examples',
			href: '/examples',
			name: 'Examples',
			disable: false,
		},
	];
	const docs = [
		{
			path: 'tiform',
			href: '/docs/tiform',
			name: 'TiForm',
			disable: false,
		},
		{
			path: 'titext',
			href: '/docs/titext',
			name: 'TiText',
			disable: false,
		},
		{
			path: 'timail',
			href: '/docs/timail',
			name: 'TiMail',
			disable: false,
		},
		{
			path: 'tipassword',
			href: '/docs/tipassword',
			name: 'TiPassword',
			disable: false,
		},
		{
			path: 'tiselect',
			href: '/docs/tiselect',
			name: 'TiSelect',
			disable: false,
		},
		{
			path: 'timultiselect',
			href: '/docs/timultiselect',
			name: 'TiMultiSelect',
			disable: false,
		},
	];

	return (
		<div className="max-w-[200px] w-full h-fit sticky top-4 mt-3 hidden lg:block box-border p-px pr-2 bg-[#121212]">
			<div className="mb-2">
				<div className="p-1 w-full flex items-center space-x-2 text-cyan-200">
					<IconContext.Provider
						value={{
							size: '1.4em',
							className: 'global-class-name',
						}}
					>
						<GiBookmarklet />
					</IconContext.Provider>
					<h1 className=" text-lg font-semibold capitalize">
						Getting Started
					</h1>
				</div>
				<SidenavLink path={path} links={gettingStarted} />
			</div>
			<div className="mb-2">
				<div className="p-1 w-full flex items-center space-x-2 text-cyan-200">
					<IconContext.Provider
						value={{
							size: '1.4em',
							className: 'global-class-name',
						}}
					>
						<TbForms />
					</IconContext.Provider>
					<h1 className=" text-lg font-semibold capitalize">
						Components
					</h1>
				</div>
				<SidenavLink path={path} links={docs} />
			</div>
			{/* <div className="mb-2">
				<div className="p-1 w-full flex items-center space-x-2 text-cyan-200">
					<IconContext.Provider
						value={{
							size: '1.4em',
							className: 'global-class-name',
						}}
					>
						<GiBookmarklet />
					</IconContext.Provider>
					<h1 className=" text-lg font-semibold capitalize">
						Components
					</h1>
				</div>
				<ul className="h-full w-full flex flex-col justify-evenly space-y-1">
					<Link
						className={`rounded-md ml-6 px-3 py-1 w-fit ${
							currPage === '/components/multiselect'
								? 'bg-zinc-700/40'
								: ''
						} hover:bg-zinc-700/40`}
						href={'/components/multiselect'}
					>
						<div className=" flex items-center">
							<span className=" text-sm font-semibold capitalize">
								multiselect
							</span>
						</div>
					</Link>
					<Link
						className={`rounded-md ml-6 px-3 py-1 w-fit ${
							currPage === '/components/select'
								? 'bg-zinc-700/40'
								: ''
						} hover:bg-zinc-700/40`}
						href={'/components/select'}
					>
						<div className=" flex items-center">
							<span className=" text-sm font-semibold capitalize">
								select
							</span>
						</div>
					</Link>
				</ul>
			</div> */}
		</div>
	);
}
