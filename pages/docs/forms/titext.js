import React, { useState } from 'react';
import InThisPage from '../../../components/InThisPage';
import Breadcrums from '../../../components/Breadcrums';
import LiveCode from '../../../components/LiveCode';
import CodeBlock from '../../../components/Code';
import Highlight from '../../../components/Highlight';
import {
	TiForm,
	TiText,
	TiPassword,
	TiMail,
	TiButton,
} from '@k8pai/tailwind-inputs';

export default function titext() {
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
						Text and Form Fields.
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
						url={'/docs/forms/titext#Example'}
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
						<TiText
							name={'username'}
							label={'Username'}
							mandatory
							style={{
								label: 'text-white font-semibold tracking-wide ml-3',
							}}
							validate={'username'}
							error="This is not a valid username!"
							className={'space-y-2'}
						/>
					</TiForm>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
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
				mandatory
				style={{
					label: 'text-white font-semibold tracking-wide ml-3',
				}}
				validate={'username'}
				error="This is not a valid username!"
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
						url={'/docs/forms/titext#Sizing'}
					/>
				</div>

				<p className="font-semibold mb-4 text-lg tracking-wider">
					There are bunch of different sizings that you can use for
					your tailwind-inputs field.
				</p>

				<LiveCode>
					<TiForm
						className="w-full bg-transparent space-y-6"
						onSubmit={handleSubmit}
					>
						<TiText
							name={'large'}
							placeholder={'large'}
							style={{
								size: 'max-w-full',
								input: 'font-semibold tracking-wider text-3xl rounded-lg bg-transparent selection:select-none border-2',
							}}
						/>
						<TiText
							name={'small'}
							placeholder={'small'}
							style={{
								size: 'max-w-lg',
								input: 'font-semibold tracking-wider text-lg rounded-lg bg-transparent selection:select-none border-2',
							}}
						/>
						<TiText
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
					code={`<TiText
	name={'large'}
	placeholder={'large'}
	style={{
		size: 'max-w-full',
		input: 'font-semibold tracking-wider text-3xl rounded-lg bg-transparent selection:select-none border-2',
	}}
/>
<TiText
	name={'small'}
	placeholder={'small'}
	style={{
		size: 'max-w-lg',
		input: 'font-semibold tracking-wider text-lg rounded-lg bg-transparent selection:select-none border-2',
	}}
/>
<TiText
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
						url={'/docs/forms/titext#Disabled'}
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
						<TiText
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
					code={`<TiText
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
						id={'Readonly'}
						className="text-3xl font-bold font-mono pt-8"
					>
						Readonly
					</h1>

					<Breadcrums
						type={'linking'}
						url={'/docs/forms/titext#Readonly'}
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
						<TiText
							name={'name'}
							defaultValue={'cristiano ronaldo'}
							label={'ReadOnly'}
							style={{
								label: 'text-white font-semibold tracking-wide ml-3',
							}}
							readOnly
							className={'space-y-2'}
						/>
					</TiForm>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					code={`<TiText
	name={'name'}
	defaultValue={'cristiano ronaldo'}
	label={'ReadOnly'}
	style={{
		label: 'text-white font-semibold tracking-wide ml-3',
	}}
	readOnly
	className={'space-y-2'}
/>`}
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
						url={'/docs/forms/titext#ReadonlyText'}
					/>
				</div>

				<p className="font-semibold mb-4 text-lg tracking-wider">
					Like the Readonly input field, you can have a readonly Text
					field, which look similar to a text, but indeed which isn't.
				</p>

				<LiveCode>
					<TiForm
						className="w-full bg-transparent"
						onSubmit={handleSubmit}
					>
						<TiText
							name={'name'}
							label={'readOnly Text'}
							style={{
								label: 'text-white font-semibold tracking-wide ml-3',
							}}
							defaultValue={"This text can't be changed."}
							readOnly
							readOnlyText
							className={'space-y-2'}
						/>
					</TiForm>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					code={`<TiText
	name={'name'}
	label={'readOnly Text'}
	style={{
		label: 'text-white font-semibold tracking-wide ml-3',
	}}
	defaultValue={"This text can't be changed."}
	readOnly
	readOnlyText
	className={'space-y-2'}
/>`}
				/>
			</div>

			{/* <div>
				<div className="flex items-baseline mb-4">
					<h1
						id={'customAndValid'}
						className="text-3xl font-bold font-mono pt-8"
					>
						Additionals
					</h1>
					<Breadcrums
						type={'linking'}
						url={'/docs/forms/titext#customAndValid'}
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
						url={'/docs/forms/titext#customization'}
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
						className="w-full bg-transparent text-white"
						onSubmit={handleSubmit}
					>
						<TiText
							name={'custom'}
							label={'customstyles'}
							mandatory
							validate={'username'}
							error={'This is not acceptable'}
							style={{
								label: 'text-white font-bold text-xl tracking-wide ml-2',
								input: 'font-semibold tracking-wider text-base rounded-lg bg-transparent selection:select-none border-2',
								default: 'border-indigo-500',
								valid: 'border-green-800',
								invalid: 'border-yellow-200',
								error: 'text-yellow-200 font-semibold tracking-wide',
							}}
							className={'space-y-2'}
						/>
					</TiForm>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					code={`<TiText
	name={'custom'}
	label={'customstyles'}
	mandatory
	validate={'username'}
	error={'This is not acceptable'}
	style={{
		label: 'text-white font-bold text-xl tracking-wide ml-2',
		input: 'font-semibold tracking-wider text-base rounded-lg bg-transparent selection:select-none border-2',
		default: 'border-indigo-500',
		valid: 'border-green-800',
		invalid: 'border-yellow-200',
		error: 'text-yellow-200 font-semibold tracking-wide',
	}}
	className={'space-y-2'}
/>`}
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
						url={'/docs/forms/titext#validations'}
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
						className="w-full bg-transparent space-y-1 text-white"
						onSubmit={handleSubmit}
					>
						<TiText
							label={'username'}
							name={'validateName'}
							validate={'username'}
							placeholder={'username'}
							error={'Check your username again.'}
							style={{
								label: 'text-white font-semibold tracking-wide ml-1',
							}}
							className={'space-y-2'}
						/>
						<TiPassword
							name={'validatePassword'}
							label={'Password'}
							validate={'password'}
							placeholder={'Password'}
							error={
								'Should contain an uppercase, a lowercase, a special character, a number and min 8 characters.'
							}
							style={{
								label: 'text-white font-semibold tracking-wide ml-1',
							}}
							className={'space-y-2'}
						/>
						<TiMail
							name={'validatEmail'}
							label={'E Mail'}
							validate={'email'}
							placeholder={'Mail'}
							error={'This is not a valid email.'}
							style={{
								label: 'text-white font-semibold tracking-wide ml-1',
							}}
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
					code={`<TiForm
	className="w-full bg-transparent space-y-1 text-white"
	onSubmit={handleSubmit}
>
	<TiText
		label={'username'}
		name={'validateName'}
		validate={'username'}
		placeholder={'username'}
		error={'Check your username again.'}
		style={{
			label: 'text-white font-semibold tracking-wide ml-1',
		}}
		className={'space-y-2'}
	/>
	<TiPassword
		name={'validatePassword'}
		label={'Password'}
		validate={'password'}
		placeholder={'Password'}
		error={
			'Should contain an uppercase, a lowercase, a special character, a number and min 8 characters.'
		}
		style={{
			label: 'text-white font-semibold tracking-wide ml-1',
		}}
		className={'space-y-2'}
	/>
	<TiMail
		name={'validatEmail'}
		label={'E Mail'}
		validate={'email'}
		placeholder={'Mail'}
		error={'This is not a valid email.'}
		style={{
			label: 'text-white font-semibold tracking-wide ml-1',
		}}
		className={'space-y-2'}
	/>
	<TiButton
		type={'submit'}
		title={'Submit'}
		className={
			'px-3 py-2 mt-2 rounded-lg text-white bg-green-500/90 '
		}
	/>
</TiForm>`}
				/>
			</div> */}
		</div>
	);
}
