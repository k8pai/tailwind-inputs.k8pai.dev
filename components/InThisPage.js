import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { TiPathContext } from '../lib/Context';
import React, { useState, useEffect, useContext } from 'react';

const InThisPage = () => {
	const router = useRouter();
	const { currView } = useContext(TiPathContext);
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
		<div className="sticky top-4 mt-3 h-fit pl-2">
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
							className={`block transition-all my-1 ${
								headingId === currView
									? 'text-white font-semibold'
									: 'hover:text-[#e3e3e3]'
							}`}
						>
							<span
								className={`relative w-fit ${
									headingLevel === 2 ? 'pl-8' : 'pl-4'
								}`}
							>
								{text}
								{headingId === currView ? (
									<motion.div
										className={
											'absolute w-1 h-1 text-white bg-white left-1 inset-y-0 my-auto rounded-full '
										}
									/>
								) : null}
							</span>
						</Link>
					);
				})}
			</ul>
		</div>
	);
};

export default InThisPage;
