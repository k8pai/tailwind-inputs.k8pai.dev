import { useEffect, useState } from 'react';
import Paragraph from '../components/Paragraph';
import Installation from '../components/Installation';
import Link from 'next/link';
import { IconContext } from 'react-icons';
import { SiTailwindcss } from 'react-icons/si';
import { TbForms } from 'react-icons/tb';
import Highlight from '../components/Highlight';
import Breadcrums from '../components/Breadcrums';

// const inter = Inter({ subsets: ['latin'] });

export async function getStaticProps() {
	const installationLinks = [
		{ title: 'Home', href: '/' },
		{ title: 'Introduction', href: '/introduction' },
		{ title: 'Examples', href: '/examples' },
		{ title: 'Docs', href: '/docs' },
	];

	return {
		props: {
			installationLinks,
		},
	};
}

export default function Home({ installationLinks: data }) {
	return (
		<div className="w-full max-w-7xl mx-auto">
			<div className="flex flex-col items-center justify-center max-w-4xl mx-auto p-5">
				<h1 className="font-montez text-6xl tracking-widest mt-[100px] mb-[20px]">
					TI
				</h1>
				<h1 className="text-2xl my-6 text-center font-bold tracking-wide">
					Focus on building than spending time configuring inputs.
				</h1>

				<Paragraph>
					Powerful, extensible, and feature-packed frontend toolkit.
					Build and customize with Sass, utilize prebuilt grid system
					and components, and bring projects to life with powerful
					JavaScript plugins.
				</Paragraph>

				<Installation />

				<div className="mt-10">
					<div className="flex items-center">
						<IconContext.Provider
							value={{
								size: '4em',
								className: 'global-class-name text-[#06B6D4]',
							}}
						>
							<SiTailwindcss />
						</IconContext.Provider>
					</div>
					<h1 className="my-6 text-3xl font-bold tracking-wider">
						Customize components with ease
					</h1>
					<Paragraph>
						Highly flexible and customizable with oneLiner
						components. With Tailwind Inputs, you can easily export
						components and modify them to suit your needs. You can
						customize the package to fit your specific use case with
						tailwindcss utility classes.
					</Paragraph>

					{/* to be made page  */}
					<Link href={'/tobemade'}>
						Learn more about tailwind input components and
						customization here
					</Link>
				</div>
				<div className="mt-10">
					<div className="flex items-center">
						<IconContext.Provider
							value={{
								size: '4em',
								className: 'global-class-name text-[#06B6D4]',
							}}
						>
							<TbForms />
						</IconContext.Provider>
					</div>
					<h1 className="my-6 text-3xl font-bold tracking-wider">
						You choose what to do
					</h1>
					<Paragraph>
						Tailwind inputs allows users to worry less about values
						and state managment, so you do less, quick and
						efficient.
					</Paragraph>

					<div className="my-6">
						<div className="flex items-center space-x-1">
							<Breadcrums />
							<span className="font-semibold capitalize">
								{' '}
								On value change
							</span>
						</div>
						<div className="flex items-center space-x-1">
							<Breadcrums />
							<span className="font-semibold capitalize">
								{' '}
								On Form submission
							</span>
						</div>
					</div>

					{/* to be made page  */}
					<Link href={'/tobemade'}>
						Learn more about tailwind input components and
						customization here
					</Link>
				</div>
			</div>
		</div>
	);
}

Home.getLayout = function PageLayout(page) {
	return <>{page}</>;
};
