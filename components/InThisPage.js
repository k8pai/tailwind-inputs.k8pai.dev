import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { GiBookmarklet } from 'react-icons/gi';

const InThisPage = () => {
	const router = useRouter();
	const [headingLinks, setHeadingLinks] = useState([]);

	useEffect(() => {
		const headingElements = document.querySelectorAll('h1, h2');
		// console.log(headingElements);
		const newHeadingLinks = [];
		headingElements.forEach((element) => {
			const headingId = element.getAttribute('id');
			if (headingId) {
				const headingLevel = parseInt(element.tagName[1]);
				newHeadingLinks.push({
					headingId,
					headingLevel,
					text: element.textContent,
				});
			}
		});
		setHeadingLinks(newHeadingLinks);
	}, [router.asPath]);

	return (
		<div className="sticky top-2 h-fit mt-0 lg:mt-6 pl-2">
			<h1 className="p-1 w-full text-lg font-semibold capitalize text-cyan-200">
				In This page
			</h1>
			<hr className="my-2 w-[90%] ml-1 bg-cyan-400" />
			<ul className="space-y-1 pl-1">
				{headingLinks.map(({ headingId, headingLevel, text }) => {
					return (
						<Link
							key={headingId}
							href={`#${headingId}`}
							className={`block hover:text-[#e3e3e3] transition-colors duration-200 ${
								headingLevel === 2 ? 'pl-8' : 'pl-3'
							}`}
						>
							{/* {headingLevel === 2 ? '|-> ' : null} */}
							{text}
						</Link>
					);
				})}
			</ul>
		</div>
	);
};

export default InThisPage;
