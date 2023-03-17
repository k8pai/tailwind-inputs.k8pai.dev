import React from 'react';
import Head from 'next/head';
import SideNav from './SideNav';
import Navigation from './Navigation';
import Footer from './Footer';
import InThisPage from './InThisPage';

const Layout = ({ children }) => {
	return (
		<div className="w-full box-border min-h-screen h-full bg-[#121212] text-[#b3b3b3]">
			<Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</Head>
			<div className="w-full mx-auto flex flex-col min-h-screen h-full">
				<Navigation />
				<div className="relative max-w-7xl mx-auto w-full h-full p-px flex flex-grow">
					<SideNav />
					<div className="max-w-[100%] w-full mt-6 p-3 box-border">
						{children}
					</div>
					<div className="hidden max-w-[200px] w-full xl:block">
						<InThisPage />
					</div>
					{/* <SuggestionNav /> */}
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
