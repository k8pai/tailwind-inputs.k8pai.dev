import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { IconContext } from 'react-icons';
import {
	HiChevronDoubleRight,
	HiXMark,
	HiMinusSmall,
	HiOutlineBolt,
	HiOutlineBoltSlash,
	HiHashtag,
} from 'react-icons/hi2';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const Breadcrums = ({ type, url, ...rest }) => {
	if (type === 'linking') {
		const router = useRouter();
		const link = router.asPath;
		return (
			<Link
				href={url}
				onClick={() => navigator.clipboard.writeText(link)}
				className="inline-block ml-2 transition-all duration-150 group-hover:block"
			>
				<IconContext.Provider
					value={{
						className: 'global-class-name text-xl text-cyan-100',
					}}
				>
					<HiHashtag />
				</IconContext.Provider>
			</Link>
		);
	}
	if (type === '' || !type) {
		return (
			<span className="inline-block mr-2" {...rest}>
				<IconContext.Provider
					value={{
						size: '1.5em',
						className: 'global-class-name text-cyan-300',
					}}
				>
					<HiMinusSmall />
				</IconContext.Provider>
			</span>
		);
	}
	if (type === 'warn') {
		return (
			<span className="inline-block mr-2" {...rest}>
				<IconContext.Provider
					value={{ size: '1.5em', className: 'global-class-name ' }}
				>
					<HiOutlineBoltSlash />
				</IconContext.Provider>
			</span>
		);
	}
	if (type === 'idea') {
		return (
			<span className="inline-block mr-2" {...rest}>
				<IconContext.Provider
					value={{
						size: '1.5em',
						className: 'global-class-name text-yellow-400',
					}}
				>
					<HiOutlineBolt />
				</IconContext.Provider>
			</span>
		);
	}
	if (type === 'forbid') {
		return (
			<span className="inline-block mr-2" {...rest}>
				<IconContext.Provider
					value={{ size: '1.5em', className: 'global-class-name ' }}
				>
					<HiXMark />
				</IconContext.Provider>
			</span>
		);
	}
	if (type === 'arrow') {
		return (
			<span className="inline-block mr-2" {...rest}>
				<IconContext.Provider
					value={{
						size: '1.5em',
						className: 'global-class-name text-cyan-300',
					}}
				>
					<HiChevronDoubleRight />
				</IconContext.Provider>
			</span>
		);
	}
};

export default Breadcrums;
