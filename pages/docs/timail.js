import React, { useState } from 'react';
import Quoted from '../../components/Quoted';
import CodeBlock from '../../components/Code';
import LiveCode from '../../components/LiveCode';
import Paragraph from '../../components/Paragraph';
import Highlight from '../../components/Highlight';
import InThisPage from '../../components/InThisPage';
import Breadcrums from '../../components/Breadcrums';
import {
	TiForm,
	TiText,
	TiButton,
	TiSelect,
	TiMail,
} from '@k8pai/tailwind-inputs';
import Note from '../../components/Note';
import Table from '../../components/Table';

export async function getStaticProps() {
	const data = [
		{
			props: 'name',
			type: 'string',
			definition:
				'Mandatory, a key of the form object that is returned at submission.',
		},
		{
			props: 'error',
			type: 'string',
			definition:
				"Error message if user doesn't follow validation criteria.",
		},
		{
			props: 'label',
			type: 'string',
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
			props: 'disabled',
			type: 'Boolean',
			default: false,
			definition:
				'When set to true, User cannot interact with the field.',
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
				'Accepts tailwind-utility-classes to style the Parent Node of TiMail',
		},
		{
			props: 'placeholder',
			type: 'string',
			default: '',
			definition: "Placeholder of the Field when it's empty.",
		},
		{
			props: 'defaultValue',
			type: 'string',
			default: '',
			definition: 'Initial value of the field on page load.',
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

export default function timail({ data }) {
	const [validateType, setValidateType] = useState('username');

	const handleSubmit = (values) => {
		console.log(values);
	};
	return (
		<div className="h-fit flex flex-col space-y-2">
			<div>
				<div className="flex items-center justify-between mb-4">
					<h1 className="text-4xl font-extrabold font-mono">
						TiMail
					</h1>
				</div>

				<p className="font-semibold mb-4 text-lg tracking-wider">
					A dedicated text field type that only accepts values of mail
					type. You are free to enter any type of data, When not
					enclosed within <Quoted>&lt;TiForm /&gt;</Quoted>.
				</p>
				<Note>
					If during the submission of a form and is enclosed within{' '}
					&lt;TiForm /&gt; inbuilt component, it'll pass the value of
					the mail field inside the handler function as an empty
					string.
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
					<Breadcrums type={'linking'} url={'/docs/timail#Example'} />
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
						<TiMail
							name={'mail'}
							label={'E Mail'}
							mandatory
							style={{
								label: 'text-white font-semibold tracking-wide ml-3',
							}}
							error="This is not a valid Mail!"
							className={'space-y-2'}
						/>
					</TiForm>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					code={`import { TiForm, TiMail } from '@k8pai/tailwind-inputs';

const myComponent = () => {
	const handleSubmit = (values) => {
		console.log(values);
	};

	return (
		<TiForm
			className="w-full bg-transparent"
			onSubmit={handleSubmit}
		>
			<TiMail
				name={'mail'}
				label={'E Mail'}
				mandatory
				style={{
					label: 'text-white font-semibold tracking-wide ml-3',
				}}
				error="This is not a valid Mail!"
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

					<Breadcrums type={'linking'} url={'/docs/timail#Sizing'} />
				</div>

				<Paragraph>
					As similar to the TiText Component, TiMail supports
					customizing sizes from the tailwind-utility-classes.
				</Paragraph>

				<LiveCode>
					<TiForm
						className="w-full bg-transparent space-y-6"
						onSubmit={handleSubmit}
					>
						<TiMail
							name={'large'}
							placeholder={'large'}
							style={{
								size: 'max-w-full',
								input: 'font-semibold tracking-wider text-3xl rounded-lg bg-transparent selection:select-none border-2',
							}}
						/>
						<TiMail
							name={'medium'}
							placeholder={'medium'}
							style={{
								size: 'max-w-lg',
								input: 'font-semibold tracking-wider text-lg rounded-lg bg-transparent selection:select-none border-2',
							}}
						/>
						<TiMail
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
					code={`<TiMail
	name={'large'}
	placeholder={'large'}
	style={{
		size: 'max-w-full',
		input: 'font-semibold tracking-wider text-3xl rounded-lg bg-transparent selection:select-none border-2',
	}}
/>
<TiMail
	name={'small'}
	placeholder={'small'}
	style={{
		size: 'max-w-lg',
		input: 'font-semibold tracking-wider text-lg rounded-lg bg-transparent selection:select-none border-2',
	}}
/>
<TiMail
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
						id={'Disabled'}
						className="text-3xl font-bold font-mono pt-8"
					>
						Disabled
					</h1>

					<Breadcrums
						type={'linking'}
						url={'/docs/timail#Disabled'}
					/>
				</div>

				<Paragraph>
					TiMail component can also be disabled using the{' '}
					<Quoted>disabled</Quoted> props.
				</Paragraph>

				<LiveCode>
					<TiForm
						className="w-full bg-transparent"
						onSubmit={handleSubmit}
					>
						<TiMail
							name={'disabled'}
							label={'Disabled Inputs'}
							placeholder={'Disabled Inputs'}
							style={{
								label: 'text-white font-semibold tracking-wide ml-3',
							}}
							disabled
							className={'space-y-2'}
						/>
					</TiForm>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					code={`<TiMail
	name={'disabled'}
	label={'Disabled Inputs'}
	placeholder={'Disabled Inputs'}
	style={{
		label: 'text-white font-semibold tracking-wide ml-3',
	}}
	disabled
	className={'space-y-2'}
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
					<Breadcrums type={'linking'} url={'/docs/timail#Props'} />
				</div>
				<Paragraph>
					There are quiet useful props that you can use to customize
					fields, customize validation effects, even access values on
					change as well.
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
							url={'/docs/timail#Name'}
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
						code={`<TiMail
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
							url={'/docs/timail#Error'}
						/>
					</div>

					<Paragraph>
						error is one of the optional props, that may or may not
						be passed depending on your need.
					</Paragraph>

					<Paragraph>
						If you want the user to know what went wrong you may
						provide a simple error message to guide the user to a
						sampler version of what is to be provided.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`<TiMail
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
							url={'/docs/timail#Label'}
						/>
					</div>

					<Paragraph>
						An optional props that will be the label of the input
						field.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`<TiMail
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
							url={'/docs/timail#Loader'}
						/>
					</div>

					<Paragraph>
						A boolean type props that decides if a circular spinner
						is to be displayed at the end of the TiMail component
						while typing.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`<TiMail
	loader={true}
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
							url={'/docs/timail#Mandatory'}
						/>
					</div>

					<Paragraph>
						A boolean field that includes a * at the end of the
						label, to represent a mandatory field.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`<TiMail
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
							url={'/docs/timail#Placeholder'}
						/>
					</div>

					<Paragraph>
						Specifies a placeholder for <Quoted>TiMail</Quoted>{' '}
						component.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`<TiMail
	placeholder={'sample@gmail.com'}
	...restProps 
/>`}
					/>
				</div>

				{/* defaultValue props  */}
				<div>
					<div className="flex items-baseline mb-4">
						<h2
							id={'DefaultValue'}
							className="text-2xl font-bold font-mono pt-8"
						>
							Default Value
						</h2>
						<Breadcrums
							type={'linking'}
							url={'/docs/timail#DefaultValue'}
						/>
					</div>

					<Paragraph>
						Specifies the default value of <Quoted>TiMail</Quoted>{' '}
						component, if any. This props is an optional field.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`<TiMail
	defaultValue={'johndeo@gmail.com'}
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
							url={'/docs/timail#Autocomplete'}
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
						code={`<TiMail
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
							url={'/docs/timail#ClassName'}
						/>
					</div>

					<Paragraph>
						You can customize TiMail component&apos;s Parent Node to
						your hearts consent.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`<TiMail
	className="w-full bg-transparent any-tailwind-utiltiy-class customize-yourself"
	...restProps 
/>`}
					/>
				</div>

				<Paragraph>Happy coding!</Paragraph>
			</div>
		</div>
	);
}
