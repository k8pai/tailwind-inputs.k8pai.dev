import React from 'react';
import { TiForm, TiText, TiButton } from '@k8pai/tailwind-inputs';
import InThisPage from '../../components/InThisPage';
import Breadcrums from '../../components/Breadcrums';
import LiveCode from '../../components/LiveCode';
import CodeBlock from '../../components/Code';
import Highlight from '../../components/Highlight';
import Paragraph from '../../components/Paragraph';
import Table from '../../components/Table';
import Link from 'next/link';
import Quoted from '../../components/Quoted';

export async function getStaticProps() {
	const data = [
		{
			props: 'className',
			type: 'string',
			definition: 'Tailwindcss utility classes.',
		},
		{
			props: 'onSubmit',
			type: 'Function',
			definition:
				'Function to be called when submission. contains a parameter (Object type) that contains values of form fields.',
		},
		{
			props: 'method',
			type: 'string',
			definition: 'The method type of submitting values.',
		},
		{
			props: 'action',
			type: 'string',
			definition: 'The endpoint where data is to be sent.',
		},
	];

	return {
		props: {
			data,
		},
	};
}

export default function tiform({ data }) {
	const handleSubmit = (values) => {
		console.log(values);
	};

	return (
		<div className="h-fit flex flex-col space-y-2">
			<div>
				<div className="flex items-center justify-between mb-4">
					<h1 className="text-4xl text-white font-extrabold font-mono">
						TiForm
					</h1>
				</div>

				<Paragraph>
					TiForm is a parent Component of all the Ti Form Field
					components. It contains a bunch of props, that can be passed
					as the form attributes.
				</Paragraph>

				<Paragraph>
					The list of props are listed{' '}
					<Link
						href={'#Props'}
						className={`text-highlight hover:text-cyan-400`}
					>
						here
					</Link>
				</Paragraph>
			</div>

			<div className="block xl:hidden">
				<InThisPage />
			</div>

			<div>
				<div className="flex items-baseline mb-4">
					<h1
						id={'Usage'}
						className="text-3xl font-bold font-mono pt-8"
					>
						Usage
					</h1>
					<Breadcrums type={'linking'} url={'/docs/tiform#Usage'} />
				</div>
				<Paragraph>
					This is a basic use-case of the TiForm component with which
					on submission of the form, we can get the values of the form
					fields, enclosed within the{' '}
					<Highlight title={'<TiForm />'} /> component.
				</Paragraph>

				<LiveCode>
					<TiForm
						className="w-full bg-transparent"
						onSubmit={handleSubmit}
					>
						<TiText
							name={'username'}
							label={'Username'}
							placeholder={'Enter Your Username'}
							mandatory
							style={{
								mode: 'dark',
								label: 'text-white font-semibold tracking-wide ml-3',
								size: 'max-w-full',
							}}
							validate={'username'}
							error="This is not a valid username!"
							className={'space-y-2'}
						/>
						<TiButton
							type={'submit'}
							title={'Submit'}
							className={
								'px-3 py-2 mt-2 rounded-lg text-white bg-green-500/90 '
							}
						/>
					</TiForm>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					copy
					code={`import { TiForm, TiText } from '@k8pai/tailwind-inputs';

const myComponent = () => {
	const handleSubmit = (values) => {
		console.log(values);
	};

	return (
		<TiForm
			className="w-full bg-transparent"
			onSubmit={handleSubmit}
		>
			<TiText
				name={'username'}
				label={'Username'}
				placeholder={'Enter Your Username'}
				mandatory
				style={{
					label: 'text-white font-semibold tracking-wide ml-3',
					size: 'max-w-full',
				}}
				validate={'username'}
				error="This is not a valid username!"
				className={'space-y-2'}
			/>
			<TiButton
				type={'submit'}
				title={'Submit'}
				className={
					'px-3 py-2 mt-2 rounded-lg text-white bg-green-500/90 '
				}
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
						id={'Props'}
						className="text-3xl font-bold font-mono pt-8"
					>
						Props
					</h1>
					<Breadcrums type={'linking'} url={'/docs/tiform#Props'} />
				</div>
				<Paragraph>
					As that of a simple <Highlight title={'<form>'} /> tag,{' '}
					<Highlight title={'<TiForm>'} /> component accepts props
					such as... <Quoted>className</Quoted>,{' '}
					<Quoted>onSubmit</Quoted>, <Quoted>action</Quoted>,{' '}
					<Quoted>method</Quoted>.
				</Paragraph>

				<Table data={data} />

				<div className="flex items-baseline mb-4">
					<h2
						id={'ClassName'}
						className="text-2xl font-bold font-mono pt-8"
					>
						ClassName
					</h2>
					<Breadcrums
						type={'linking'}
						url={'/docs/tiform#ClassName'}
					/>
				</div>

				<Paragraph>
					You can customize the form The way you like with the
					taiwind-inbuilt utility classes. If you feel like Adding
					that extra bit of color, order, spacing, width, deal with
					psuedo classes and so on.
				</Paragraph>

				<CodeBlock
					lang={'javascript'}
					code={`<TiForm
	className="w-full bg-transparent any-tailwind-utiltiy-class customize-yourself."
>
	...
</TiForm>`}
				/>

				<div className="flex items-baseline mb-4">
					<h2
						id={'onSubmit'}
						className="text-2xl font-bold font-mono pt-8"
					>
						onSubmit
					</h2>
					<Breadcrums
						type={'linking'}
						url={'/docs/tiform#onSubmit'}
					/>
				</div>

				<Paragraph>
					There is an optional onSubmit props, that you may or may not
					choose to provide, depending on how you would like to access
					data from the form fields.
				</Paragraph>

				<CodeBlock
					lang={'javascript'}
					code={`<TiForm onSubmit={handleSubmit} >
	<TiText
		name={'username'}
		validate={'username'}
	/>
	....
</TiForm>`}
				/>
				<Paragraph>
					The function in the <Highlight title={'onSubmit props'} />,
					gets called during the submission of the form.{' '}
				</Paragraph>

				<CodeBlock
					lang={'javascript'}
					code={`const handleSubmit = (values) => {
	// do whatever you want with form values.
};`}
				/>

				<Paragraph>
					The props <Highlight title={'name'} /> of{' '}
					<Highlight title={'TiText'} /> is a key, of the{' '}
					<Highlight title={'values'} /> parameter in the{' '}
					<Highlight title={'handleSubmit'} /> function.
				</Paragraph>

				<Paragraph>
					You can access the form values, with the respective names
					that are passed as props. ie,{' '}
					<Highlight title={'values.username'} /> will give you the
					value of the username field.
				</Paragraph>

				<Paragraph>
					If a property of the object that is passed back to the{' '}
					<Highlight title={'handleSubmit'} /> function, is empty,
					then it's because the value that is inserted in the field
					doesn&apos;t satisfy the validation criteria.
				</Paragraph>

				<Paragraph>
					For ex: A <Highlight title={'validate={"username"}'} />{' '}
					refers to <Quoted>no spaces</Quoted> and{' '}
					<Quoted>4 to 19 characters</Quoted>. During the submission
					of the form, if the value inside{' '}
					<Highlight title={'<TiText name={"username"} />'} /> did not
					match the specific criteria then, the value returned to the{' '}
					<Highlight title={'handleSubmit'} /> function will be...
				</Paragraph>

				<CodeBlock lang={'javascript'} code={`{ username: '' }`} />

				<Paragraph>
					Now that you know, a field with the{' '}
					<Highlight title={'validate'} /> property, when returns an
					empty string, values are not valid enough.
				</Paragraph>
			</div>
			<Paragraph>Happy coding!</Paragraph>
		</div>
	);
}
