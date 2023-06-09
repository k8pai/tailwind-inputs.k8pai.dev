import React, { useState } from 'react';
import Quoted from '../../components/Quoted';
import CodeBlock from '../../components/Code';
import LiveCode from '../../components/LiveCode';
import Paragraph from '../../components/Paragraph';
import Highlight from '../../components/Highlight';
import InThisPage from '../../components/InThisPage';
import Breadcrums from '../../components/Breadcrums';
import { TiForm, TiMultiSelect } from '@k8pai/tailwind-inputs';
import Note from '../../components/Note';
import Table from '../../components/Table';
import Link from 'next/link';

export async function getStaticProps() {
	const optionsKeyValue = [
		{
			name: 'id',
			use: 'An unique idetifier for the value.',
			type: 'optional',
		},
		{ name: 'name', use: 'Displayed as the option.', type: 'optional' },
		{ name: 'value', use: 'Value of the options.', type: 'mandatory' },
		{
			name: 'disable',
			use: 'Determines if the value is disabled or not, default false.',
			type: 'optional',
		},
	];
	const tiselectProps = [
		{
			props: 'name',
			type: 'String',
			definition:
				'Mandatory, a key of the form object that is returned at submission.',
		},
		{
			props: 'label',
			type: 'String',
			definition: 'Label for the multiselect field.',
		},
		{
			props: 'value',
			type: 'String',
			definition: 'Default value of the select Component',
		},
		{
			props: 'options',
			type: 'Object',
			definition:
				'A mandatory field, that includes the options of the select component.',
		},
		{
			props: 'onChange',
			type: 'Function',
			definition: 'A Function that gets the value of the ',
		},
		{
			props: 'mandatory',
			type: 'Boolean',
			default: null,
			definition:
				'When set to true, A mandatory field label is Specified.',
		},
		{
			props: 'indicator',
			type: 'boolean',
			default: false,
			definition:
				'An optional props, when set true indicates which value is selected.',
		},
		{
			props: 'placeholder',
			type: 'string',
			default: '',
			definition: "Placeholder of the Field when it's empty.",
		},
		{
			props: 'style',
			type: 'Object',
			definition:
				'The object that can be used to pass values to some specified keys to customize the components with tailwid-utility-classes.',
		},
	];
	return {
		props: { tiselectProps, optionsKeyValue },
	};
}

export default function timultiselect({
	tiselectProps: data,
	optionsKeyValue,
}) {
	const handleSubmit = (values) => {
		console.log(values);
	};
	return (
		<div className="h-fit flex flex-col space-y-2">
			<div>
				<div className="flex items-center justify-between mb-4">
					<h1 className="text-4xl font-extrabold font-mono">
						TiMultiSelect
					</h1>
				</div>

				<Paragraph>
					A select type input which can select multiple elements from
					a couple of options. You can use our basic{' '}
					<Quoted>TiMultiSelect</Quoted> with options for
					customizations and nearly no worries about state management,
					or just go with the fully customizable, state managable
					component version that comes with compositions and more
					features.
				</Paragraph>

				<Note>
					Components are not a part of the TiMultiSelect fields.
					versions and updates may vary. Try to use the most latest
					version to have more rich features. Know more about
					components in{' '}
					<Link href={'/components/timultiselect'}>here</Link>.
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
						url={'/docs/timultiselect#Example'}
					/>
				</div>

				<Paragraph>
					A Multiselect field that can be used to give user control of
					a selection field with a checkbox type feature.
				</Paragraph>

				<LiveCode>
					<TiForm
						className="w-full bg-transparent"
						onSubmit={handleSubmit}
					>
						<TiMultiSelect
							name={'multiselect'}
							options={[
								{ value: 'ronaldo' },
								{ value: 'messi' },
								{ value: 'neymar' },
								{ value: 'mbappe' },
								{ value: 'haaland' },
							]}
							className={'space-y-2'}
						/>
					</TiForm>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					code={`import { TiForm, TiMultiSelect } from '@k8pai/tailwind-inputs';

const myComponent = () => {
	const handleSubmit = (values) => {
		console.log(values);
	};

	return (
		<TiForm
			className="w-full bg-transparent"
			onSubmit={handleSubmit}
		>
			<TiMultiSelect
				name={'multiselect'}
				options={[
					{ value: 'ronaldo' },
					{ value: 'messi' },
					{ value: 'neymar' },
					{ value: 'mbappe' },
					{ value: 'haaland' },
				]}
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
						url={'/docs/timultiselect#Sizing'}
					/>
				</div>

				<Paragraph>
					Custom sizes and user defined widths can be provided for
					this component with the help of tailwindcss utility classes.
				</Paragraph>

				<LiveCode>
					<TiForm
						className="w-full bg-transparent space-y-6"
						onSubmit={handleSubmit}
					>
						<TiMultiSelect
							name={'large'}
							options={[
								{ value: 'ronaldo' },
								{ value: 'messi' },
								{ value: 'neymar' },
								{ value: 'mbappe' },
								{ value: 'haaland' },
							]}
							style={{
								mode: 'dark',
								size: 'max-w-full',
							}}
							className={'space-y-2'}
						/>
						<TiMultiSelect
							name={'medium'}
							options={[
								{ value: 'ronaldo' },
								{ value: 'messi' },
								{ value: 'neymar' },
								{ value: 'mbappe' },
								{ value: 'haaland' },
							]}
							style={{
								mode: 'dark',
								size: 'max-w-lg',
							}}
							className={'space-y-2'}
						/>
						<TiMultiSelect
							name={'small'}
							options={[
								{ value: 'ronaldo' },
								{ value: 'messi' },
								{ value: 'neymar' },
								{ value: 'mbappe' },
								{ value: 'haaland' },
							]}
							style={{
								mode: 'dark',
								size: 'max-w-sm',
							}}
							className={'space-y-2'}
						/>
					</TiForm>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					code={`<TiMultiSelect
	name={'large'}
	options={[
		{ value: 'ronaldo' },
		{ value: 'messi' },
		{ value: 'neymar' },
		{ value: 'mbappe' },
		{ value: 'haaland' },
	]}
	style={{
		mode: 'dark',
		size: 'max-w-full',
	}}
	className={'space-y-2'}
/>
<TiMultiSelect
	name={'medium'}
	options={[
		{ value: 'ronaldo' },
		{ value: 'messi' },
		{ value: 'neymar' },
		{ value: 'mbappe' },
		{ value: 'haaland' },
	]}
	style={{
		mode: 'dark',
		size: 'max-w-lg',
	}}
	className={'space-y-2'}
/>
<TiMultiSelect
	name={'small'}
	options={[
		{ value: 'ronaldo' },
		{ value: 'messi' },
		{ value: 'neymar' },
		{ value: 'mbappe' },
		{ value: 'haaland' },
	]}
	style={{
		mode: 'dark',
		size: 'max-w-sm',
	}}
	className={'space-y-2'}
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
						url={'/docs/timultiselect#Disabled'}
					/>
				</div>

				<Paragraph>
					Like TiSelect components, TiMultiSelect also supports
					disabled options. You are free to pass an array of string,
					numbers or objects. But when you are to have a disabled
					option, the only way to do it is using an array of objects
					with a <Quoted>disable</Quoted> property set to true.
				</Paragraph>

				<Note>
					If Array contains type of Objects, then these objects should
					mandatorily have a key named <Quoted>value</Quoted> which
					represents the string that is the value of the element. An
					optional key, <Quoted>name</Quoted> , which will be
					displayed as the option. When nothing is passed in for name,
					name will be the same as that of value. And then, the last,{' '}
					<Quoted>disable</Quoted> property that determines whether an
					option should be disabled or enabled, with a default value
					of false.
				</Note>

				<CodeBlock
					lang={'javascript'}
					code={`const arr = [
	{value: 'ronaldo', disable: false, },
	{value: 'messi', disable: true, },
	{value: 'neymar', disable: false, },
	{value: 'mbappe', disable: false, },
	{value: 'haaland', disable: false, },
]`}
				/>

				<LiveCode>
					<TiForm
						className="w-full bg-transparent"
						onSubmit={handleSubmit}
					>
						<TiMultiSelect
							name={'small'}
							options={[
								{ value: 'ronaldo', disable: false },
								{ value: 'messi', disable: true },
								{ value: 'neymar', disable: false },
								{ value: 'mbappe', disable: false },
								{ value: 'haaland', disable: false },
							]}
							className={'space-y-2'}
						/>
					</TiForm>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					code={`<TiMultiSelect
	name={'small'}
	options={arr}
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
					<Breadcrums
						type={'linking'}
						url={'/docs/timultiselect#Props'}
					/>
				</div>
				<Paragraph>
					There are a list of props that will quiet be useful to
					handle values, customize the components and access selected
					values. The list of the props and their use is given below.
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
							url={'/docs/timultiselect#Name'}
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
						code={`<TiSelect
	name='selectPlayer'
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
							url={'/docs/timultiselect#Label'}
						/>
					</div>

					<Paragraph>
						The label of the TiMultiSelect field, that indicates the
						purpose of the field, or whatever.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`<TiMultiSelect
value={'ronaldo'}
...restProps 
/>`}
					/>
				</div>

				{/* value props  */}
				<div>
					<div className="flex items-baseline mb-4">
						<h2
							id={'Value'}
							className="text-2xl font-bold font-mono pt-8"
						>
							Value
						</h2>
						<Breadcrums
							type={'linking'}
							url={'/docs/timultiselect#Value'}
						/>
					</div>

					<Paragraph>
						<Quoted>value</Quoted> contains the default values of
						the multiselect field.
					</Paragraph>

					<Note>
						As of version 1.2.55 the the value is not mandatory to
						be included inside the options array. But if you
						don&apos;t include it inside the options array then
						selecting another value from the options will result in
						a permanent unaccess to the initial value. Try to
						include value as the same as that of a value inside the
						options array so as to avoid conflicts.
					</Note>

					<CodeBlock
						lang={'javascript'}
						code={`<TiMultiSelect
	value={'ronaldo'}
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
							url={'/docs/timultiselect#Options'}
						/>
					</div>

					<Paragraph>
						This field is a mandatory field, that will contain an
						array of values that acts as the options of the select
						field. Values maybe of type number, string or objects.
					</Paragraph>

					<Note>
						It is a better practice to provide an array of objects
						in the options props, since you can customize the name
						to be displayed and the value to not be visible to
						others.
					</Note>

					<Paragraph>
						If the type of array passed to the options props is an
						array of objects then the objects may contain following
						keys value pairs.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`const arr = [
	{value: 'ronaldo', disable: false, },
	{value: 'messi', disable: true, },
	{value: 'neymar', disable: false, },
	{value: 'mbappe', disable: false, },
	{value: 'haaland', disable: false, },
]`}
					/>
					<CodeBlock
						lang={'javascript'}
						code={`<TiMultiSelect
	options={arr}
	...restProps 
/>`}
					/>
				</div>

				{/* onChange props  */}
				<div>
					<div className="flex items-baseline mb-4">
						<h2
							id={'onChange'}
							className="text-2xl font-bold font-mono pt-8"
						>
							onChange
						</h2>
						<Breadcrums
							type={'linking'}
							url={'/docs/timultiselect#onChange'}
						/>
					</div>

					<Paragraph>
						A props that will accept a function which contains a
						parameter. This parameter will contain the value of the
						selected options when an option that is not currently
						selected is selected.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`const getChanges = (currSelection) => {
	// currSelection contains the selected value.
	// you can do anything with it.
}`}
					/>

					<CodeBlock
						lang={'javascript'}
						code={`<TiSelected
	onChange={getChanges}
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
							url={'/docs/timultiselect#Mandatory'}
						/>
					</div>

					<Paragraph>
						A boolean field that includes a * at the end of the
						label, to represent a mandatory field.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`<TiMultiSelect
	mandatory
	...restProps 
/>`}
					/>
				</div>

				{/* Indicator props  */}
				<div>
					<div className="flex items-baseline mb-4">
						<h2
							id={'Indicator'}
							className="text-2xl font-bold font-mono pt-8"
						>
							Indicator
						</h2>
						<Breadcrums
							type={'linking'}
							url={'/docs/timultiselect#Indicator'}
						/>
					</div>

					<Paragraph>
						A boolean type props that decides if an indicator for
						representing the selected value is needed or not. The
						default value is true, and you can set the indicator of
						with providing a false value to it.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`<TiMultiSelect
	indicator={false}
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
							url={'/docs/timultiselect#Style'}
						/>
					</div>

					<Paragraph>
						An optional field that can be used to customize the
						component to your wish.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`<TiMultiSelect
	style={{
		mode: 'dark',
	}}
	...restProps 
/>`}
					/>
				</div>
			</div>

			<div>
				<div className="flex items-baseline mb-4">
					<h1
						id={'Additionals'}
						className="text-3xl font-bold font-mono pt-8"
					>
						Additionals
					</h1>
					<Breadcrums
						type={'linking'}
						url={'/docs/timultiselect#Additionals'}
					/>
				</div>
				<Paragraph>
					Handle some edgecases and exceptions that may seem to be
					missing in the docs.
				</Paragraph>

				{/* name props  */}
				<div>
					<div className="flex items-baseline mb-4">
						<h2
							id={'Scrollbar'}
							className="text-2xl font-bold font-mono pt-8"
						>
							Scrollbar
						</h2>
						<Breadcrums
							type={'linking'}
							url={'/docs/timultiselect#Scrollbar'}
						/>
					</div>

					<Paragraph>
						Selecting a large number of options within a smaller
						width multiselect component may lead to a scrollbar that
						you may or maynot be annoyed with. Here&apos;s a quick
						tip to make changes if you feel like having any.
					</Paragraph>

					<Paragraph>
						Below you tailwindcss imports in your css file, you may
						customize the scrollbar to your need.
					</Paragraph>
					<CodeBlock
						copy
						lang={'javascript'}
						code={`@tailwind base;
@tailwind components;
@tailwind utilities;

/* For Webkit-based browsers (Chrome, .Safari) */
.scrollbar::-webkit-scrollbar {
	/* customize your scrollbar */
	/* or hide it with display: none; */
}

.scrollbar::-webkit-scrollbar-thumb {
	/* customize your scrollbar thumb */
}

.scrollbar::-webkit-scrollbar-track {
	/* customize your scrollbar track */
}

/* For Firefox */
* {
	/* for firefox do something like ... */
	/* scrollbar-width: thin; */
	/* scrollbar-color: #4a5568 #edf2f7; */
}

/* For Edge and IE */
.scrollbar::-ms-scrollbar {
	/* customize your scrollbar */
	/* or hide it with display: none; */
}

.scrollbar::-ms-scrollbar-thumb {
	/* customize your scrollbar thumb */
}

.scrollbar::-ms-scrollbar-track {
	/* customize your scrollbar track */
}`}
					/>
				</div>
			</div>

			<Paragraph>Happy coding!</Paragraph>
		</div>
	);
}
