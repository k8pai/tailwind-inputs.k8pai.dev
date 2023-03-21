import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';

import { BsSearch, BsBookmark } from 'react-icons/bs';
import { CiMail } from 'react-icons/ci';
import { CgMoreO } from 'react-icons/cg';
import { FaBell, FaUserAlt, FaFeatherAlt, FaHashtag } from 'react-icons/fa';
import { MdClose, MdOutlineMoreHoriz } from 'react-icons/md';
import { SiTwitter } from 'react-icons/si';
import { RiHome7Fill } from 'react-icons/ri';
import { TbCode, TbComponents, TbForms } from 'react-icons/tb';
import { GiBookmarklet } from 'react-icons/gi';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MobileNav = ({ isOpen, onClick }) => {
	const router = useRouter();
	const [currPage, setCurrPage] = useState('');
	useEffect(() => {
		const page = router.asPath.split('/').pop();

		const pageUrl = page.includes('#') ? page.split('#').shift() : page;
		console.log('page = ', pageUrl);
		setCurrPage(pageUrl);
		return () => {};
	}, [router.asPath]);
	console.log('currPage = ', currPage);
	return (
		<div
			className={`absolute z-40 h-screen max-w-[250px] w-full transition-all duration-500 top-0 overflow-hidden ${
				isOpen ? 'left-[0px]' : '-left-[250px]'
			}`}
		>
			<div className={`bg-[#161616] z-[999] h-full w-full `}>
				<div className="flex p-3 items-center justify-between">
					<h1 className="text-cyan-200 text-lg font-semibold capitalize">
						Tailwind inputs
					</h1>
					<button
						onClick={onClick}
						className={'hover:animate-wiggle'}
					>
						<IconContext.Provider
							value={{
								size: '1.4em',
								className: 'global-class-name',
							}}
						>
							<MdClose />
						</IconContext.Provider>
					</button>
				</div>
				<hr className="bg-slate-500/40 text-slate-500/40 m-px" />
				<div className="mt-6 w-full h-fit box-border p-px pr-2">
					<div className="mb-2 pl-3">
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
						<ul className="h-full w-full flex flex-col justify-evenly space-y-1">
							<Link
								className={
									'rounded-md ml-6 px-3 py-1 w-fit hover:bg-zinc-700/40'
								}
								href={'/docs/getting-started'}
							>
								<div className=" flex items-center">
									<span className=" text-sm font-semibold capitalize">
										Introduction
									</span>
								</div>
							</Link>
							<Link
								className={
									'rounded-md ml-6 px-3 py-1 w-fit hover:bg-zinc-700/40'
								}
								href={'/docs/getting-started'}
							>
								<div className=" flex items-center">
									<span className=" text-sm font-semibold capitalize">
										Download
									</span>
								</div>
							</Link>
							<Link
								className={
									'rounded-md ml-6 px-3 py-1 w-fit hover:bg-zinc-700/40'
								}
								href={'/docs/getting-started'}
							>
								<div className=" flex items-center">
									<span className=" text-sm font-semibold capitalize">
										Contribute
									</span>
								</div>
							</Link>

							<Link
								onClick={onClick}
								className={
									'rounded-md ml-6 px-3 py-1 w-fit hover:bg-zinc-700/40'
								}
								href={'/components'}
							>
								<div className=" flex items-center">
									<span className=" text-sm font-semibold capitalize">
										Components
									</span>
								</div>
							</Link>

							<Link
								onClick={onClick}
								className={
									'rounded-md ml-6 px-3 py-1 w-fit hover:bg-zinc-700/40'
								}
								href={'/examples'}
							>
								<div className=" flex items-center">
									<span className=" text-sm font-semibold capitalize">
										Examples
									</span>
								</div>
							</Link>
						</ul>
					</div>
					<div className="mb-2 pl-3">
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
								Forms
							</h1>
						</div>
						<ul className="h-full w-full flex flex-col justify-evenly space-y-1">
							<Link
								onClick={onClick}
								className={`rounded-md ml-6 px-3 py-1 w-fit ${
									currPage === 'overview'
										? 'bg-zinc-700/40'
										: ''
								} hover:bg-zinc-700/40`}
								href={'/docs/forms/overview'}
							>
								<div className=" flex items-center">
									<span className=" text-sm font-semibold capitalize">
										Overview
									</span>
								</div>
							</Link>
							<Link
								onClick={onClick}
								className={`rounded-md ml-6 px-3 py-1 w-fit ${
									currPage === 'form-control'
										? 'bg-zinc-700/40'
										: ''
								} hover:bg-zinc-700/40`}
								href={'/docs/forms/form-control'}
							>
								<div className=" flex items-center">
									<span className=" text-sm font-semibold capitalize">
										Form Control
									</span>
								</div>
							</Link>
							<Link
								onClick={onClick}
								className={`rounded-md ml-6 px-3 py-1 w-fit ${
									currPage === 'select'
										? 'bg-zinc-700/40'
										: ''
								} hover:bg-zinc-700/40`}
								href={'/docs/forms/select'}
							>
								<div className="flex items-center">
									<span className="text-sm font-semibold capitalize">
										Select
									</span>
								</div>
							</Link>
							<Link
								className={`rounded-md ml-6 px-3 py-1 w-fit ${
									currPage === 'checks-radios'
										? 'bg-zinc-700/40'
										: ''
								} hover:bg-zinc-700/40`}
								href={'/docs/forms/checks-radios'}
							>
								<div className=" flex items-center">
									<span className=" text-sm font-semibold capitalize">
										Checks & radio
									</span>
								</div>
							</Link>
							<Link
								className={`rounded-md ml-6 px-3 py-1 w-fit ${
									currPage === 'range' ? 'bg-zinc-700/40' : ''
								} hover:bg-zinc-700/40`}
								href={'/docs/forms/range'}
							>
								<div className=" flex items-center">
									<span className=" text-sm font-semibold capitalize">
										Range
									</span>
								</div>
							</Link>
							<Link
								className={`rounded-md ml-6 px-3 py-1 w-fit ${
									currPage === 'range' ? 'bg-zinc-700/40' : ''
								} hover:bg-zinc-700/40`}
								href={'/docs/forms/input-group'}
							>
								<div className=" flex items-center">
									<span className=" text-sm font-semibold capitalize">
										Input Groups
									</span>
								</div>
							</Link>
							<Link
								className={`rounded-md ml-6 px-3 py-1 w-fit ${
									currPage === 'validation'
										? 'bg-zinc-700/40'
										: ''
								} hover:bg-zinc-700/40`}
								href={'/docs/forms/validation'}
							>
								<div className=" flex items-center">
									<span className=" text-sm font-semibold capitalize">
										Validation
									</span>
								</div>
							</Link>
							<span className="flex-grow"></span>
						</ul>
					</div>

					<div className="mb-2 pl-3">
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
								className={
									'rounded-md ml-6 px-3 py-1 w-fit hover:bg-zinc-700/40'
								}
								href={'/components/multiselect'}
							>
								<div className=" flex items-center">
									<span className=" text-sm font-semibold capitalize">
										multiselect
									</span>
								</div>
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
export default MobileNav;
