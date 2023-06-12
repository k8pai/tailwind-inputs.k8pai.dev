import Head from 'next/head';
import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const LayoutIndex = ({ children }) => {
	return (
		<div className="w-full min-h-screen h-full bg-[#121212] text-[#b3b3b3]">
			<Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</Head>
			<div className="w-full mx-auto flex flex-col min-h-screen h-full bg-[#181818]">
				<Navigation />
				<div className="w-full p-px">{children}</div>
				<Footer />
			</div>
		</div>
	);
};

export default LayoutIndex;
