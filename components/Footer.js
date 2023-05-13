import Link from 'next/link';
import { FaGithub, FaTwitter, FaNpm } from 'react-icons/fa';

export default function Footer() {
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
						<hr className="mb-4" />
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
						<hr className="mb-4" />
						<ul className="list-none">
							<li className="mb-2">
								<Link
									href="/"
									className=" hover:text-[#e3e3e3] transition duration-200"
								>
									Home
								</Link>
							</li>
							<li className="mb-2">
								<Link
									href="/introduction"
									className=" hover:text-[#e3e3e3] transition duration-200"
								>
									Introduction
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
							<li className="mb-2">
								<Link
									href="/docs"
									className=" hover:text-[#e3e3e3] transition duration-200"
								>
									Docs
								</Link>
							</li>
						</ul>
					</div>

					<div className="p-3 mb-4 sm:mb-0 sm:mr-8">
						<h3 className="text-lg font-bold mb-2">Links</h3>
						<hr className="mb-4" />
						<ul className="list-none">
							<Link
								className="mb-2 flex items-center"
								href="https://github.com/k8pai/tailwind-inputs"
								target="_blank"
							>
								<FaGithub className="inline mr-2" />{' '}
								<span className="hover:text-[#e3e3e3] transition duration-200">
									GitHub
								</span>
							</Link>
							<Link
								className="mb-2 flex items-center"
								href="https://twitter.com/k8pai"
								target="_blank"
							>
								<FaTwitter className="inline mr-2" />{' '}
								<span className="hover:text-[#e3e3e3] transition duration-200">
									Twitter
								</span>
							</Link>
							<Link
								className="mb-2 flex items-center"
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
}
