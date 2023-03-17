import Link from 'next/link';
import React, { useState } from 'react';
import CodeBlock from '../../../components/Code';
import LiveCode from '../../../components/LiveCode';
import { TiText, TiForm } from '@k8pai/tailwind-inputs';
import Breadcrums from '../../../components/Breadcrums';
import Highlight from '../../../components/Highlight';
import InThisPage from '../../../components/InThisPage';

const formControls = () => {
	const [state, setState] = useState({
		username: '',
		password: '',
		mail: '',
	});

	const handleSubmit = (values) => {
		console.log(values);
	};

	return (
		<div className="h-fit flex flex-col space-y-10">
			<div>
				<div className="flex items-center justify-between mb-4">
					<h1 className="text-4xl font-extrabold font-mono">
						Form Inputs
					</h1>
				</div>

				<p className="font-semibold mb-4 text-lg tracking-wider"></p>
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
						url={'/docs/forms/form-control#Example'}
					/>
				</div>

				<p className="font-semibold mb-4 text-lg tracking-wider">
					Form inputs are input components, configured with tailwind,
					with a bunch of validations.
				</p>

				<LiveCode>
					<TiForm
						className="w-full rounded shadow-lg bg-transparent"
						onSubmit={handleSubmit}
					>
						<TiText
							name={'username'}
							label={'Username'}
							placeholder={'Username'}
							validate="username"
							errorMessage="This is not a valid username!"
						/>
					</TiForm>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					code={`import { TiForm, TiText } from '@k8pai/tailwind-inputs';

const myComponent = () => {
	<Form
		className="p-4 rounded shadow-lg w-full text-black"
		onSubmit={handleSubmit}
	>
		<TiText
			name={'username'}
			label={'Username'}
			placeholder={'Username'}
			validate="username"
			errorMessage="This is not a valid username!"
		/>
	</Form>
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
						url={'/docs/forms/form-control#Sizing'}
					/>
				</div>

				<p className="font-semibold mb-4 text-lg tracking-wider">
					There are bunch of different sizings that you can use for
					your tailwind-inputs field.
				</p>

				<LiveCode>
					<TiForm
						className="w-full rounded shadow-lg bg-transparent space-y-6"
						onSubmit={handleSubmit}
					>
						<TiText
							name={'large'}
							placeholder={'large'}
							customize={'px-5 py-4 text-2xl'}
						/>
						<TiText
							name={'default'}
							placeholder={'default'}
							customize={'px-4 py-3 text-lg'}
						/>
						<TiText
							name={'small'}
							placeholder={'small'}
							customize={'px-3 py-2 text-base'}
						/>
					</TiForm>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					code={`<TiText name={'large'} placeholder={'large'} customize={'px-5 py-4 text-2xl'} />
<TiText name={'default'} placeholder={'default'} customize={'px-4 py-3 text-lg'} />
<TiText name={'small'} placeholder={'small'} customize={'px-3 py-2 text-base'} />`}
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
						url={'/docs/forms/form-control#Disabled'}
					/>
				</div>

				<p className="font-semibold mb-4 text-lg tracking-wider">
					Form inputs are input components, configured with tailwind,
					with a bunch of validations.
				</p>

				<LiveCode>
					<TiForm
						className="w-full rounded shadow-lg bg-transparent"
						onSubmit={handleSubmit}
					>
						<TiText
							name={'disabled'}
							placeholder={'Disabled Inputs'}
							disabled
						/>
					</TiForm>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					code={`<TiText name={'disabled'} placeholder={'Disabled Inputs'} disabled />`}
				/>
			</div>

			<div>
				<div className="flex items-baseline mb-4">
					<h1
						id={'Readonly'}
						className="text-3xl font-bold font-mono pt-8"
					>
						Readonly
					</h1>

					<Breadcrums
						type={'linking'}
						url={'/docs/forms/form-control#Readonly'}
					/>
				</div>

				<p className="font-semibold mb-4 text-lg tracking-wider">
					Form inputs are input components, configured with tailwind,
					with a bunch of validations.
				</p>

				<LiveCode>
					<TiForm
						className="w-full rounded shadow-lg bg-transparent"
						onSubmit={handleSubmit}
					>
						<TiText
							name={'name'}
							value={'cristiano ronaldo'}
							readOnly
						/>
					</TiForm>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					code={`<TiText name={'name'} value={'cristiano ronaldo'} readOnly />`}
				/>
			</div>

			<div>
				<div className="flex items-baseline mb-4">
					<h1
						id={'ReadonlyText'}
						className="text-3xl font-bold font-mono pt-8"
					>
						Readonly Text
					</h1>

					<Breadcrums
						type={'linking'}
						url={'/docs/forms/form-control#ReadonlyText'}
					/>
				</div>

				<p className="font-semibold mb-4 text-lg tracking-wider">
					Like the Readonly input field, you can have a readonly Text
					field, which look similar to a text, but indeed which isn't.
				</p>

				<LiveCode>
					<TiForm
						className="w-full rounded shadow-lg bg-transparent"
						onSubmit={handleSubmit}
					>
						<TiText
							name={'name'}
							readOnly
							customize={'border-0'}
							readOnlyText={'cristiano ronaldo'}
						/>
					</TiForm>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					code={`<TiText name={'name'} customize={'border-0'} readOnlyText={'cristiano ronaldo'} readOnly />`}
				/>
			</div>

			<div>
				<div className="flex items-baseline mb-4">
					<h1
						id={'customAndValid'}
						className="text-3xl font-bold font-mono pt-8"
					>
						Additionals
					</h1>
					<Breadcrums
						type={'linking'}
						url={'/docs/forms/form-control#customAndValid'}
					/>
				</div>

				<div className="flex items-baseline mb-4 group">
					<h2
						id="customization"
						className="text-xl font-bold font-mono text-cyan-100 pt-8"
					>
						Customizations
					</h2>
					<Breadcrums
						type={'linking'}
						url={'/docs/forms/form-control#customization'}
					/>
				</div>

				<p className="font-semibold mb-4 text-lg tracking-wider">
					For using custom styles for your input fields, you can use{' '}
					<Highlight title={`customize`} /> props to have tailwind
					utility classes that reflects your styles.
				</p>

				<div className="font-semibold mb-4 text-lg tracking-wider flex items-start">
					<Breadcrums />{' '}
					<p>
						You can generalize styles for both labels and inputs for
						by styling <Highlight title={`<TiForm>`} /> with passing
						className props with custom tailwind utility classes.
					</p>
				</div>

				<LiveCode>
					<TiForm
						className="w-full rounded shadow-lg bg-transparent text-white"
						onSubmit={handleSubmit}
					>
						<TiText
							name={'custom'}
							label={'customstyles'}
							customize={
								'px-4 py-3 border-2 rounded-xl border-cyan-300 text-xl text-cyan-300 focus:shadow-2xl'
							}
						/>
					</TiForm>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					code={`<TiForm
	className="p-4 w-full text-white"
	onSubmit={handleSubmit}
>
	<TiText
		name={'custom'}
		label={'customstyles'}
		customize={
			'px-4 py-3 border-2 rounded-xl border-cyan-300 text-xl text-cyan-300 focus:shadow-2xl'
		}
	/>
</TiForm>`}
				/>

				<div className="flex items-baseline mb-4 group">
					<h2
						id="validations"
						className="text-xl font-bold font-mono text-cyan-100 pt-8"
					>
						Validations
					</h2>
					<Breadcrums
						type={'linking'}
						url={'/docs/forms/form-control#validations'}
					/>
				</div>
				<div className="font-semibold mb-4 text-lg tracking-wider flex items-start">
					<Breadcrums />{' '}
					<p>
						There are a bunch of validations that will get you
						started with some basic configured styles.
					</p>
				</div>
				<div className="font-semibold mb-4 text-lg tracking-wider flex items-start">
					<Breadcrums type="arrow" />{' '}
					<p>
						support for more validations and customizing validation
						styles are on the way...
					</p>
				</div>
				<div className="font-semibold mb-4 text-lg tracking-wider flex items-start">
					<Breadcrums type="idea" />{' '}
					<p>
						some of the basic validations that you probably will
						need for the form fields are{' '}
						<Highlight title={`'email'`} />,{' '}
						<Highlight title={`'username'`} />, and{' '}
						<Highlight title={`'password'`} />.
					</p>
				</div>

				<LiveCode>
					<TiForm
						className="w-full rounded shadow-lg bg-transparent space-y-6 text-white"
						onSubmit={handleSubmit}
					>
						<TiText
							name={'validatename'}
							label={'name'}
							validate={'username'}
							placeholder={'username'}
							errorMessage={'Check your username again.'}
						/>
						<TiText
							name={'validatepassword'}
							label={'Password'}
							validate={'password'}
							placeholder={'Password'}
							errorMessage={
								'Should contain an uppercase, a lowercase, a special character, a number and min 8 characters.'
							}
						/>
						<TiText
							name={'validatemail'}
							label={'E Mail'}
							validate={'email'}
							placeholder={'Mail'}
							errorMessage={'This is not a valid email.'}
						/>
					</TiForm>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					code={`<TiForm
	className="p-4 w-full space-y-6 text-white"
	onSubmit={handleSubmit}
>
	<TiText
		name={'validatename'}
		label={'name'}
		validate={'username'}
		placeholder={'username'}
		errorMessage={'Check your username again.'}
	/>
	<TiText
		name={'validatepassword'}
		label={'Password'}
		validate={'password'}
		placeholder={'Password'}
		errorMessage={
			'Should contain an uppercase, a lowercase, a special character, a number and min 8 characters.'
		}
	/>
	<TiText
		name={'validatemail'}
		label={'E Mail'}
		validate={'email'}
		placeholder={'Mail'}
		errorMessage={'This is not a valid email.'}
	/>
</TiForm>`}
				/>
			</div>

			{/* <div>
				<div className="flex items-center justify-between mb-4">
					<h1 className="text-3xl font-bold font-mono">Colors</h1>
				</div>

				<p className="font-semibold mb-4 text-lg tracking-wider">
					Form inputs are input components, configured with tailwind,
					with a bunch of validations.
				</p>

				<LiveCode>
					<TiText name={'username'} label={'Username'} />
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					code={
						// prettier-ignore
						`import { TiText } from '@k8pai/tailwind-inputs';

<TiText
	name={'username'}
	label={'Username'}
	value={state.username}
/>`
					}
				/>
			</div> */}

			{/* <div>
				<div className="flex items-center justify-between mb-4">
					<h1 className="text-3xl font-bold font-mono">Datalist</h1>
				</div>

				<p className="font-semibold mb-4 text-lg tracking-wider">
					Form inputs are input components, configured with tailwind,
					with a bunch of validations.
				</p>

				<LiveCode>
					<TiText name={'username'} label={'Username'} />
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					code={
						// prettier-ignore
						`import { TiText } from '@k8pai/tailwind-inputs';

<TiText
	name={'username'}
	label={'Username'}
	value={state.username}
/>`
					}
				/>
			</div> */}
		</div>
	);
};

export default formControls;

{
	/* <CodeBlock
					code={
						// prettier-ignore
						`import React, { useEffect, useState } from 'react';
import { TiText } from '@k8pai/tailwind-inputs';

export default function Home() {
	const [state, setState] = useState({
		username: '',
		password: '',
		mail: '',
	});
	
	const changeHandler = (event) => {
		const { name, value } = event.target;

		setState((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen w-full">
			<form
				className="bg-white p-10 rounded shadow-lg max-w-2xl w-full"
				onSubmit={handleSubmit}
			>
				<TiText
					name={'username'}
					label={'Username'}
					value={state.username}
					onChange={changeHandler}
				/>
				
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold
					py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				>
					Sign In
				</button>
			</form>
		</div>
	);
};`
					}
				/> */
}
