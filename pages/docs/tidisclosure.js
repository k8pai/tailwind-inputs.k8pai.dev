import React from 'react';
import Quoted from '../../components/Quoted';
import CodeBlock from '../../components/Code';
import LiveCode from '../../components/LiveCode';
import Paragraph from '../../components/Paragraph';
import Highlight from '../../components/Highlight';
import InThisPage from '../../components/InThisPage';
import Breadcrums from '../../components/Breadcrums';
import { TiForm, TiDisclosure } from '@k8pai/tailwind-inputs';
import Note from '../../components/Note';
import Table from '../../components/Table';
import Link from 'next/link';

export async function getStaticProps() {
	const option = [
		{
			title: 'ronaldo',
			content: 'this is the content',
			isOpen: false,
		},
		{
			title: 'messi',
			content: 'this is the content',
			isOpen: false,
		},
		{
			title: 'neymar',
			content: 'this is the content',
			isOpen: false,
		},
		{
			title: 'mbappe',
			content: 'this is the content',
			isOpen: false,
		},
		{
			title: 'haaland',
			content: 'this is the content',
			isOpen: false,
		},
	];
	const tidisclosureProps = [
		{
			props: 'name',
			type: 'string',
			definition:
				'Mandatory, a key of the form object that is returned at submission.',
		},
		{
			props: 'options',
			type: 'Object',
			definition:
				'A mandatory field, that includes the options of the select component.',
		},
		{
			props: 'component',
			type: 'IconType',
			definition:
				'A mandatory field, that includes the options of the select component.',
		},
		{
			props: 'className',
			type: 'string',
			definition:
				'Takes in tailwind utility classes to style the parent Node of the disclosure.',
		},
		{
			props: 'style',
			type: 'Object',
			definition:
				'The object that can be used to pass values to some specified keys to customize the components with tailwid-utility-classes.',
		},
	];
	return {
		props: { option, tidisclosureProps },
	};
}

export default function tidisclosure({ option, tidisclosureProps }) {
	const handleSubmit = (values) => {
		console.log(values);
	};
	return (
		<div className="h-fit flex flex-col space-y-2">
			<div>
				<div className="flex items-center justify-between mb-4">
					<h1 className="text-4xl font-extrabold font-mono">
						TiDisclosure
					</h1>
				</div>

				<Paragraph>
					A drop down type collection of tabs, that you can use to
					display Q/A or some informational queries.
				</Paragraph>
			</div>

			<div className="block xl:hidden">
				<InThisPage />
			</div>

			<div>
				<div className="flex items-baseline mb-4">
					<h1
						id={'Example'}
						className="text-3xl font-bold font-mono pt-8"
					>
						Example
					</h1>
					<Breadcrums
						type={'linking'}
						url={'/docs/tiselect#Example'}
					/>
				</div>

				<Paragraph>
					Form inputs are input components, configured with tailwind,
					with a bunch of validations.
				</Paragraph>

				<LiveCode>
					<TiForm
						className="w-full bg-transparent"
						onSubmit={handleSubmit}
					>
						<TiDisclosure
							name={'search'}
							options={option}
							style={{ mode: 'dark' }}
						/>
					</TiForm>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					copy
					code={`import { TiForm, TiDisclosure } from '@k8pai/tailwind-inputs';

const myComponent = () => {
	const handleSubmit = (values) => {
		console.log(values);
	};

	return (
		<TiForm
			className="w-full bg-transparent"
			onSubmit={handleSubmit}
		>
			<TiDisclosure
				name={'search'}
				options={[
					{
						title: 'ronaldo',
						content: 'this is the content',
					},
					{
						title: 'messi',
						content: 'this is the content',
					},
					{
						title: 'neymar',
						content: 'this is the content',
					},
					{
						title: 'mbappe',
						content: 'this is the content',
					},
					{
						title: 'haaland',
						content: 'this is the content',
					},
				]}
				style={{ mode: 'dark' }}
			/>
		</TiForm>
	)
}

export default myComponent;`}
				/>
			</div>

			<div>
				<div className="flex items-baseline mb-4">
					<h1
						id={'Sizing'}
						className="text-3xl font-bold font-mono pt-8"
					>
						Sizing
					</h1>

					<Breadcrums
						type={'linking'}
						url={'/docs/tiselect#Sizing'}
					/>
				</div>

				<Paragraph>
					As similar to the TiText Component, TiSelect supports
					customizing sizes from the tailwind-utility-classes.
				</Paragraph>

				<LiveCode>
					<TiForm
						className="w-full bg-transparent space-y-6"
						onSubmit={handleSubmit}
					>
						<TiDisclosure
							name={'search'}
							options={option}
							style={{
								mode: 'dark',
								size: 'max-w-full',
							}}
						/>
						<TiDisclosure
							name={'medium'}
							options={option}
							style={{
								mode: 'dark',
								size: 'max-w-lg',
							}}
						/>
						<TiDisclosure
							name={'small'}
							options={option}
							style={{
								mode: 'dark',
								size: 'max-w-sm',
							}}
						/>
					</TiForm>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					code={`<TiDisclosure
	name={'search'}
	options={option}
	style={{
		mode: 'dark',
		size: 'max-w-lg',
	}}
/>
<TiDisclosure
	name={'medium'}
	options={option}
	style={{
		mode: 'dark',
		size: 'max-w-lg',
	}}
/>
<TiDisclosure
	name={'small'}
	options={option}
	style={{
		mode: 'dark',
		size: 'max-w-sm',
	}}
/>`}
				/>
			</div>

			<div>
				<div className="flex items-baseline mb-4">
					<h1
						id={'Props'}
						className="text-3xl font-bold font-mono pt-8"
					>
						Props
					</h1>
					<Breadcrums type={'linking'} url={'/docs/tiselect#Props'} />
				</div>
				<Paragraph>
					There are a list of props that will quiet be useful to
					handle values, customize the components and access selected
					values. The list of the props and their use is given below.
				</Paragraph>

				<Table data={tidisclosureProps} />

				{/* name props  */}
				<div>
					<div className="flex items-baseline mb-4">
						<h2
							id={'Name'}
							className="text-2xl font-bold font-mono pt-8"
						>
							Name
						</h2>
						<Breadcrums
							type={'linking'}
							url={'/docs/tidisclosure#Name'}
						/>
					</div>

					<Paragraph>
						The <Quoted>Name</Quoted> props is a mandatory props
						that is one of the keys of the object, that is returned
						to the handler function of the <Quoted>TiForm</Quoted>{' '}
						component.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`<TiDisclosure
	name='selectPlayer'
	...restProps 
/>`}
					/>
				</div>

				{/* Options props  */}
				<div>
					<div className="flex items-baseline mb-4">
						<h2
							id={'Options'}
							className="text-2xl font-bold font-mono pt-8"
						>
							Options
						</h2>
						<Breadcrums
							type={'linking'}
							url={'/docs/tidisclosure#Options'}
						/>
					</div>

					<Paragraph>
						The options should be an Array of objects with
						properties as follows.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`{
	id: 1 // optional
	title: 'cristiano' // mandatory
	content: '2017 ronaldo was lit' // mandatory
	isOpen: false // default false, optional
}`}
					/>
					<Paragraph>
						isOpen is an optional property with which you can turn
						the disclosure option to open at initial load. Default
						value is false.
					</Paragraph>

					<Paragraph>
						A sample options array looks as follows.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`const option = [
	{
		title: 'ronaldo',
		content: 'this is the content',
		isOpen: false,
	},
	{
		title: 'messi',
		content: 'this is the content',
		isOpen: false,
	},
	...
];`}
					/>

					<CodeBlock
						lang={'javascript'}
						code={`<TiDisclosure
	options={option}
	...restProps 
/>`}
					/>
				</div>

				{/* Component props  */}
				<div>
					<div className="flex items-baseline mb-4">
						<h2
							id={'Component'}
							className="text-2xl font-bold font-mono pt-8"
						>
							Component
						</h2>
						<Breadcrums
							type={'linking'}
							url={'/docs/tidisclosure#Component'}
						/>
					</div>

					<Paragraph>
						You can customize the component that you want to be
						displayed as the arrow for disclosures.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`<TiDisclosure
	Component={MdKeyboardArrowDown}
	...restProps 
/>`}
					/>
				</div>

				{/* ClassName props  */}
				<div>
					<div className="flex items-baseline mb-4">
						<h2
							id={'ClassName'}
							className="text-2xl font-bold font-mono pt-8"
						>
							ClassName
						</h2>
						<Breadcrums
							type={'linking'}
							url={'/docs/tidisclosure#ClassName'}
						/>
					</div>

					<Paragraph>
						You can style the parent component to fit the needs of
						your sizing, responsiveness, themes and more.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`<TiDisclosure
	className={'p-3 bg-slate-300 border border-slate-800'}
	...restProps 
/>`}
					/>
				</div>

				{/* style props  */}
				<div>
					<div className="flex items-baseline mb-4">
						<h2
							id={'Style'}
							className="text-2xl font-bold font-mono pt-8"
						>
							Style
						</h2>
						<Breadcrums
							type={'linking'}
							url={'/docs/tidisclosure#Style'}
						/>
					</div>

					<Paragraph>
						An optional field that can be used to customize the
						component to your wish.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`<TiDisclosure
	style={{
		mode: 'dark',
	}}
	...restProps 
/>`}
					/>
				</div>
			</div>
			<Paragraph>Happy coding!</Paragraph>
		</div>
	);
}
