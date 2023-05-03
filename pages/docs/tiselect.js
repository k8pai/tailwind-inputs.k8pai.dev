import React, { useState } from 'react';
import Quoted from '../../components/Quoted';
import CodeBlock from '../../components/Code';
import LiveCode from '../../components/LiveCode';
import Paragraph from '../../components/Paragraph';
import Highlight from '../../components/Highlight';
import InThisPage from '../../components/InThisPage';
import Breadcrums from '../../components/Breadcrums';
import { TiForm, TiMail, TiSearch, TiSelect } from '@k8pai/tailwind-inputs';
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
			type: 'string',
			definition:
				'Mandatory, a key of the form object that is returned at submission.',
		},
		{
			props: 'value',
			type: 'string',
			definition: 'Default value of the select Component',
		},
		{
			props: 'indicator',
			type: 'boolean',
			default: false,
			definition:
				'An optional props, when set true indicates which value is selected.',
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

export default function timail({ tiselectProps: data, optionsKeyValue }) {
	const handleSubmit = (values) => {
		console.log(values);
	};
	return (
		<div className="h-fit flex flex-col space-y-2">
			<div>
				<div className="flex items-center justify-between mb-4">
					<h1 className="text-4xl font-extrabold font-mono">
						TiSelect
					</h1>
				</div>

				<Paragraph>
					A select type input which can select a single element from a
					couple of options. You can choose to go with the basic one
					liner, or maybe have more control with our{' '}
					<Link href={'/components/tiselect'}>
						<Quoted>tiselect</Quoted>
					</Link>{' '}
					component.
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
						<TiSelect
							name={'search'}
							options={[
								'ronaldo',
								'messi',
								'neymar',
								'mbappe',
								'haaland',
							]}
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
			<TiSelect
				name={'search'}
				options={[
					'ronaldo',
					'messi',
					'neymar',
					'mbappe',
					'haaland',
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
						<TiSelect
							name={'large'}
							options={[
								'ronaldo',
								'messi',
								'neymar',
								'mbappe',
								'haaland',
							]}
							style={{
								size: 'max-w-full',
							}}
							className={'space-y-2'}
						/>
						<TiSelect
							name={'medium'}
							options={[
								'ronaldo',
								'messi',
								'neymar',
								'mbappe',
								'haaland',
							]}
							style={{
								size: 'max-w-lg',
							}}
							className={'space-y-2'}
						/>
						<TiSelect
							name={'small'}
							options={[
								'ronaldo',
								'messi',
								'neymar',
								'mbappe',
								'haaland',
							]}
							style={{
								size: 'max-w-sm',
							}}
							className={'space-y-2'}
						/>
					</TiForm>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					code={`<TiSelect
	name={'large'}
	options={[
		'ronaldo',
		'messi',
		'neymar',
		'mbappe',
		'haaland',
	]}
	style={{
		size: 'max-w-full',
	}}
	className={'space-y-2'}
/>
<TiSelect
	name={'medium'}
	options={[
		'ronaldo',
		'messi',
		'neymar',
		'mbappe',
		'haaland',
	]}
	style={{
		size: 'max-w-lg',
	}}
	className={'space-y-2'}
/>
<TiSelect
	name={'small'}
	options={[
		'ronaldo',
		'messi',
		'neymar',
		'mbappe',
		'haaland',
	]}
	style={{
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
						url={'/docs/tiselect#Disabled'}
					/>
				</div>

				<Paragraph>
					The component supports disabled options. You&apos;re free to
					pass an array of string, numbers or objects. But when you
					are to have a disabled option, the only way to do it is
					using an array of objects.
				</Paragraph>

				<Paragraph>
					The objects should mandatorily have a key named{' '}
					<Quoted>value</Quoted> which represents the string that is
					the value of the element. An optional key{' '}
					<Quoted>name</Quoted> which will be displayed at the option.
					when provided none, the name will be same as the value. And
					the <Quoted>disable</Quoted> property that determines
					whether an option should be disabled or enabled.
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

				<LiveCode>
					<TiForm
						className="w-full bg-transparent"
						onSubmit={handleSubmit}
					>
						<TiSelect
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
					code={`<TiSelect
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
					<Breadcrums type={'linking'} url={'/docs/tiselect#Props'} />
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
							url={'/docs/tiselect#Name'}
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
							url={'/docs/tiselect#Value'}
						/>
					</div>

					<Paragraph>
						<Quoted>value</Quoted> contains the default value of the
						select field.
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
						code={`<TiSelect
	value={'ronaldo'}
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
							url={'/docs/tiselect#Indicator'}
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
						code={`<TiSelect
	indicator={false}
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
							url={'/docs/tiselect#Options'}
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
						code={`<TiSelect
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
							url={'/docs/tiselect#onChange'}
						/>
					</div>

					<Paragraph>
						A props that will accept a function which contains a
						parameter. This parameter will contain the value of the
						selected option when an option that is not currently
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
							url={'/docs/tiselect#Style'}
						/>
					</div>

					<Paragraph>
						An optional field that can be used to customize the
						component to your wish.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`<TiSelect
	style={{
		mode: 'dark',
	}}
	...restProps 
/>`}
					/>
				</div>

				<Paragraph>Happy coding!</Paragraph>
			</div>
		</div>
	);
}
