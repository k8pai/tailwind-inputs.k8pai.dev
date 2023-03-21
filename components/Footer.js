import Link from 'next/link';
import { FaGithub, FaTwitter, FaNpm } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className="bg-[#121212] py-12">
			<div className="container mx-auto flex flex-col md:flex-row justify-between">
				<div className=" p-3 md:w-auto md:mr-auto text-center md:text-left mb-8 sm:mb-0">
					<h1 className="text-2xl font-bold tracking-tight whitespace-nowrap">
						Tailwind Inputs
					</h1>
				</div>
				<div className="flex flex-1 flex-col w-full sm:flex-row sm:justify-center md:justify-end md:items-start">
					<div className="p-3 mb-4 sm:mb-0 sm:mr-8">
						<h3 className="text-lg font-bold mb-2">Category</h3>
						<ul className="list-none">
							<li className="mb-2">
								<Link
									href="/about"
									className=" hover:text-[#e3e3e3] transition duration-200"
								>
									About
								</Link>
							</li>
							<li className="mb-2">
								<Link
									href="/terms"
									className=" hover:text-[#e3e3e3] transition duration-200"
								>
									Terms
								</Link>
							</li>
							<li className="mb-2">
								<Link
									href="/privacy"
									className=" hover:text-[#e3e3e3] transition duration-200"
								>
									Privacy
								</Link>
							</li>
						</ul>
					</div>
					<div className="p-3 mb-4 sm:mb-0 sm:mr-8">
						<h3 className="text-lg font-bold mb-2">Sitemap</h3>
						<ul className="list-none">
							<li className="mb-2">
								<Link
									href="/get-started"
									className=" hover:text-[#e3e3e3] transition duration-200"
								>
									Get Started
								</Link>
							</li>
							<li className="mb-2">
								<Link
									href="/docs/forms/overview"
									className=" hover:text-[#e3e3e3] transition duration-200"
								>
									Forms
								</Link>
							</li>
							<li className="mb-2">
								<Link
									href="/components"
									className=" hover:text-[#e3e3e3] transition duration-200"
								>
									Components
								</Link>
							</li>
							<li className="mb-2">
								<Link
									href="/examples"
									className=" hover:text-[#e3e3e3] transition duration-200"
								>
									Examples
								</Link>
							</li>
						</ul>
					</div>

					<div className="p-3 mb-4 sm:mb-0 sm:mr-8">
						<h3 className="text-lg font-bold mb-2">Links</h3>
						<ul className="list-none">
							<Link
								className="mb-2 block"
								href="https://github.com/k8pai/tailwind-inputs"
								target="_blank"
							>
								<FaGithub className="inline mr-2" />{' '}
								<span className="hover:text-[#e3e3e3] transition duration-200">
									GitHub
								</span>
							</Link>
							<Link
								className="mb-2 block"
								href="https://twitter.com/k8pai"
								target="_blank"
							>
								<FaTwitter className="inline mr-2" />{' '}
								<span className="hover:text-[#e3e3e3] transition duration-200">
									Twitter
								</span>
							</Link>
							<Link
								className="mb-2 block"
								href="https://www.npmjs.com/package/@k8pai/tailwind-inputs"
								target="_blank"
							>
								<FaNpm className="inline mr-2" />{' '}
								<span className="hover:text-[#e3e3e3] transition duration-200">
									npm
								</span>
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
