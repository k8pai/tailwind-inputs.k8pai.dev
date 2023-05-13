import React, { useState } from 'react';
import Quoted from '../../components/Quoted';
import CodeBlock from '../../components/Code';
import LiveCode from '../../components/LiveCode';
import Paragraph from '../../components/Paragraph';
import Highlight from '../../components/Highlight';
import InThisPage from '../../components/InThisPage';
import Breadcrums from '../../components/Breadcrums';
import { TiForm, TiPassword } from '@k8pai/tailwind-inputs';
import Note from '../../components/Note';
import Table from '../../components/Table';

export async function getStaticProps() {
	const data = [
		{
			props: 'name',
			type: 'String',
			definition:
				'Mandatory, a key of the form object that is returned at submission.',
		},
		{
			props: 'error',
			type: 'String',
			definition:
				"Error message if user doesn't follow validation criteria.",
		},
		{
			props: 'label',
			type: 'String',
			definition: 'Label of the input field.',
		},
		{
			props: 'style',
			type: 'Object',
			definition:
				'Contains a bunch of key and values, (values are of tailwind-utility-class types).',
		},
		{
			props: 'loader',
			type: 'Boolean',
			default: false,
			definition: 'A circular loader that spins at typing.',
		},
		{
			props: 'showPass',
			type: 'Boolean',
			default: true,
			definition:
				'when set to true, User can interact with an eye icon that shows/hidess password.',
		},
		{
			props: 'mandatory',
			type: 'Boolean',
			default: null,
			definition:
				'When set to true, A mandatory field label is Specified.',
		},
		{
			props: 'className',
			type: 'String',
			default: '',
			definition:
				'Accepts tailwind-utility-classes to style the Parent Node of TiPassword',
		},
		{
			props: 'placeholder',
			type: 'String',
			default: '',
			definition: "Placeholder of the Field when it's empty.",
		},
		{
			props: 'autoComplete',
			type: 'on | off',
			default: 'off',
			definition: 'Decides if you want to have autoComplete or not.',
		},
	];
	return {
		props: { data },
	};
}

export default function tipassword({ data }) {
	const handleSubmit = (values) => {
		console.log(values);
	};
	return (
		<div className="h-fit flex flex-col space-y-2">
			<div>
				<div className="flex items-center justify-between mb-4">
					<h1 className="text-4xl font-extrabold font-mono">
						TiPassword
					</h1>
				</div>

				<p className="font-semibold mb-4 text-lg tracking-wider">
					A special field that is only used to accept Password type
					values.
				</p>
				<Note>
					If the component is not passed inside the &gt;TiForm /&lt;
					component, then during the submission of the form, an empty
					string will be passed as the value of the password field.
				</Note>
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
						url={'/docs/tipassword#Example'}
					/>
				</div>

				<p className="font-semibold mb-4 text-lg tracking-wider">
					Form inputs are input components, configured with tailwind,
					with a bunch of validations.
				</p>

				<LiveCode>
					<TiForm
						className="w-full bg-transparent"
						onSubmit={handleSubmit}
					>
						<TiPassword
							name={'password'}
							label={'Password'}
							mandatory
							style={{
								label: 'text-white font-semibold tracking-wide ml-3',
							}}
							error="This is not a valid Password!"
							className={'space-y-2'}
						/>
					</TiForm>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					copy
					code={`import { TiForm, TiPassword } from '@k8pai/tailwind-inputs';

const myComponent = () => {
	const handleSubmit = (values) => {
		console.log(values);
	};

	return (
		<TiForm
			className="w-full bg-transparent"
			onSubmit={handleSubmit}
		>
			<TiPassword
				name={'password'}
				label={'Password'}
				mandatory
				style={{
					label: 'text-white font-semibold tracking-wide ml-3',
				}}
				error="This is not a valid Password!"
				className={'space-y-2'}
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
						url={'/docs/tipassword#Sizing'}
					/>
				</div>

				<Paragraph>
					As similar to the TiText Component, TiPassword supports
					customizing sizes with the tailwindcss{' '}
					<Quoted>max-w-...</Quoted> utility-classes.
				</Paragraph>

				<LiveCode>
					<TiForm
						className="w-full bg-transparent space-y-6"
						onSubmit={handleSubmit}
					>
						<TiPassword
							name={'large'}
							placeholder={'large'}
							style={{
								size: 'max-w-full',
								input: 'font-semibold tracking-wider text-3xl rounded-lg bg-transparent selection:select-none border-2',
							}}
						/>
						<TiPassword
							name={'medium'}
							placeholder={'medium'}
							style={{
								size: 'max-w-lg',
								input: 'font-semibold tracking-wider text-lg rounded-lg bg-transparent selection:select-none border-2',
							}}
						/>
						<TiPassword
							name={'small'}
							placeholder={'small'}
							style={{
								size: 'max-w-xs',
								input: 'font-semibold tracking-wider text-xs rounded-lg bg-transparent selection:select-none border-2',
							}}
						/>
					</TiForm>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					code={`<TiPassword
	name={'large'}
	placeholder={'large'}
	style={{
		size: 'max-w-full',
		input: 'font-semibold tracking-wider text-3xl rounded-lg bg-transparent selection:select-none border-2',
	}}
/>
<TiPassword
	name={'small'}
	placeholder={'small'}
	style={{
		size: 'max-w-lg',
		input: 'font-semibold tracking-wider text-lg rounded-lg bg-transparent selection:select-none border-2',
	}}
/>
<TiPassword
	name={'small'}
	placeholder={'small'}
	style={{
		size: 'max-w-xs',
		input: 'font-semibold tracking-wider text-xs rounded-lg bg-transparent selection:select-none border-2',
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
					<Breadcrums
						type={'linking'}
						url={'/docs/tipassword#Props'}
					/>
				</div>
				<Paragraph>
					There are a bunch of quiet useful props that you can use to
					customize password field, customize validation effects and
					even access values on change as well.
				</Paragraph>

				<Table data={data} />

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
							url={'/docs/tipassword#Name'}
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
						code={`<TiPassword
	name='mailInput'
	...restProps 
/>`}
					/>
				</div>

				{/* error props  */}
				<div>
					<div className="flex items-baseline mb-4">
						<h2
							id={'Error'}
							className="text-2xl font-bold font-mono pt-8"
						>
							Error
						</h2>
						<Breadcrums
							type={'linking'}
							url={'/docs/tipassword#Error'}
						/>
					</div>

					<Paragraph>
						One of the optional props, that may or may not be passed
						depending on your need.
					</Paragraph>

					<Paragraph>
						If you want the user to know what went wrong you may
						provide a simple error message to guide the user to an
						example type of what is to be provided.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`<TiPassword
	error={'ooops! Try something like sample@gmail.com'}
	...restProps 
/>`}
					/>
				</div>

				{/* label props  */}
				<div>
					<div className="flex items-baseline mb-4">
						<h2
							id={'Label'}
							className="text-2xl font-bold font-mono pt-8"
						>
							Label
						</h2>
						<Breadcrums
							type={'linking'}
							url={'/docs/tipassword#Label'}
						/>
					</div>

					<Paragraph>
						An optional props that will be the label of the input
						field.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`<TiPassword
	label={'Your Mail ID'}
	...restProps 
/>`}
					/>
				</div>

				{/* loader props  */}
				<div>
					<div className="flex items-baseline mb-4">
						<h2
							id={'Loader'}
							className="text-2xl font-bold font-mono pt-8"
						>
							Loader
						</h2>
						<Breadcrums
							type={'linking'}
							url={'/docs/tipassword#Loader'}
						/>
					</div>

					<Paragraph>
						A boolean type props that decides if a circular spinner
						is to be displayed at the end of the TiMail component
						while typing.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`<TiPassword
	loader={true}
	...restProps 
/>`}
					/>
				</div>

				{/* showPass props  */}
				<div>
					<div className="flex items-baseline mb-4">
						<h2
							id={'showPass'}
							className="text-2xl font-bold font-mono pt-8"
						>
							Show Pass
						</h2>
						<Breadcrums
							type={'linking'}
							url={'/docs/tipassword#showPass'}
						/>
					</div>

					<Paragraph>
						Allows users to switch between * characters and text
						characters to crosscheck the password they have entered.
					</Paragraph>
					<Note>
						Default value is <Quoted>true</Quoted>. To restrict
						users from checking what they have entered, set this to
						false.
					</Note>

					<CodeBlock
						lang={'javascript'}
						code={`<TiPassword
	showPass={true}
	...restProps 
/>`}
					/>
				</div>

				{/* mandatory props  */}
				<div>
					<div className="flex items-baseline mb-4">
						<h2
							id={'Mandatory'}
							className="text-2xl font-bold font-mono pt-8"
						>
							Mandatory
						</h2>
						<Breadcrums
							type={'linking'}
							url={'/docs/tipassword#Mandatory'}
						/>
					</div>

					<Paragraph>
						A boolean field that includes a * at the end of the
						label, to represent a mandatory field.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`<TiPassword
	mandatory
	...restProps 
/>`}
					/>
				</div>

				{/* placeholder props  */}
				<div>
					<div className="flex items-baseline mb-4">
						<h2
							id={'Placeholder'}
							className="text-2xl font-bold font-mono pt-8"
						>
							Placeholder
						</h2>
						<Breadcrums
							type={'linking'}
							url={'/docs/tipassword#Placeholder'}
						/>
					</div>

					<Paragraph>
						Specifies a placeholder for <Quoted>TiPassword</Quoted>{' '}
						component.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`<TiPassword
	placeholder={'Pass1234$'}
	...restProps 
/>`}
					/>
				</div>

				{/* autoComplete props  */}
				<div>
					<div className="flex items-baseline mb-4">
						<h2
							id={'Autocomplete'}
							className="text-2xl font-bold font-mono pt-8"
						>
							Autocomplete
						</h2>
						<Breadcrums
							type={'linking'}
							url={'/docs/tipasswordAutocomplete'}
						/>
					</div>

					<Paragraph>
						An optional field with a default value of{' '}
						<Quoted>off</Quoted>, which can be set to true, for
						getting autocomplete option. Leave it as it is if you
						don&apos;t wan&apos;t users to be interrupted with
						random suggestions.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`<TiPassword
	autoComplete={'on'}
	...restProps 
/>`}
					/>
				</div>

				{/* className props  */}
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
							url={'/docs/tipassword#ClassName'}
						/>
					</div>

					<Paragraph>
						You can customize TiPassword component&apos;s Parent
						Node to your hearts consent.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`<TiPassword
	className="w-full bg-transparent any-tailwind-utiltiy-class customize-yourself"
	...restProps 
/>`}
					/>
				</div>
			</div>
			<Paragraph>Happy coding!</Paragraph>
		</div>
	);
}
