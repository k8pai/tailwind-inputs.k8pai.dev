import Link from 'next/link';
import React from 'react';
import { IconContext } from 'react-icons';
import { HiOutlineExternalLink } from 'react-icons/hi';

const OverviewCard = ({ link, title }) => {
	return (
		<div className="m-2 rounded-lg p-3 border border-gray-700/70">
			<div className="flex items-center justify-between">
				<div className="section-header text-xl font-semibold text-cyan-200/70">
					{title}
				</div>
				<Link href={link}>
					<IconContext.Provider
						value={{
							size: '1em',
							className: 'global-class-name',
						}}
					>
						<HiOutlineExternalLink />
					</IconContext.Provider>
				</Link>
			</div>
		</div>
	);
};

export default OverviewCard;
