import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import {
	coy,
	funky,
	okaidia,
	solarizedlight,
	tomorrow,
	twilight,
	prism,
	a11yDark,
	atomDark,
	base16AteliersulphurpoolLight,
	cb,
	coldarkCold,
	coldarkDark,
	coyWithoutShadows,
	darcula,
	dracula,
	duotoneDark,
	duotoneEarth,
	duotoneForest,
	duotoneLight,
	duotoneSea,
	duotoneSpace,
	ghcolors,
	gruvboxDark,
	gruvboxLight,
	holiTheme,
	hopscotch,
	lucario,
	materialDark,
	materialLight,
	nightOwl,
	nord,
	oneDark,
	oneLight,
	pojoaque,
	shadesOfPurple,
	solarizedDarkAtom,
	synthwave84,
	vs,
	vscDarkPlus,
	xonokai,
	zTouch,
} from 'react-syntax-highlighter/dist/cjs/styles/prism';

// import { BsClipboard2, BsClipboard2Check } from 'react-icons/bs';
import { BsClipboard, BsCheck } from 'react-icons/bs';
import { HiCheck, HiOutlineClipboard } from 'react-icons/hi';

const CodeBlock = ({ code, copy, lang }) => {
	const [isCopied, setIsCopied] = useState(false);

	const handleCopyClick = () => {
		navigator.clipboard.writeText(code);
		setIsCopied(true);
		setTimeout(() => {
			setIsCopied(false);
		}, 1000);
	};
	const codeStyle = {
		// color: 'black',
		margin: '0px',
		fontSize: '1em',
		backgroundColor: 'transparent !important', // Set the background color to transparent with !important
	};
	// holiTheme,
	// shadesOfPurple,
	// vscDarkPlus,
	return (
		<div className="relative group bg-[#1e1e1e] rounded-xl mb-6 w-full">
			{copy && (
				<button
					className={`group absolute top-0 right-0 p-4 bg-[#1e1e1e] rounded-lg transition-all duration-150`}
					onClick={handleCopyClick}
				>
					<IconContext.Provider
						value={{
							size: '1.4em',
							className: `global-class-name transition-all duration-300 ${
								isCopied
									? 'block visible opacity-100'
									: 'hidden collapse opacity-0'
							}`,
						}}
					>
						<HiCheck />
					</IconContext.Provider>
					<IconContext.Provider
						value={{
							size: '1.4em',
							className: `global-class-name transition-all duration-300 ${
								!isCopied
									? 'block visible opacity-100'
									: 'hidden collapse opacity-0'
							}`,
						}}
					>
						<HiOutlineClipboard />
					</IconContext.Provider>
					<div
						className={`absolute -top-full right-1/2 transform translate-x-1/2 translate-y-3/4 bg-[#282828] text-cyan-300/90 px-2 py-1 text-sm rounded-md tracking-wider font-semibold ${
							isCopied
								? 'visible opacity-100'
								: 'invisible opacity-0'
						} transition-opacity duration-200`}
					>
						Copied!
					</div>
				</button>
			)}
			{/* <pre className="bg-[#181818] text-lg rounded-xl my-0"> */}
			<SyntaxHighlighter
				language={lang}
				className={
					'rounded-xl p-3 font-semibold text-lg bg-transparent max-w-full overflow-x-hidden'
				}
				style={vscDarkPlus}
				customStyle={codeStyle}
			>
				{code}
			</SyntaxHighlighter>
			{/* </pre> */}
		</div>
	);
};

export default CodeBlock;
