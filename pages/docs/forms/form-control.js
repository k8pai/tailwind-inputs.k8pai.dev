import Link from 'next/link';
import React, { useState } from 'react';
import CodeBlock from '../../../components/Code';
import LiveCode from '../../../components/LiveCode';
import { TiForm, TiText } from '@k8pai/tailwind-inputs';
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
						className="w-full bg-transparent"
						onSubmit={handleSubmit}
					>
						<TiText
							name={'username'}
							label={'Username'}
							mandatory
							theme={{
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
	<TiForm
		className="w-full bg-transparent"
		onSubmit={handleSubmit}
	>
		<TiText
			name={'username'}
			label={'Username'}
			mandatory
			theme={{
				label: 'text-white font-semibold tracking-wide ml-3',
			}}
			validate={'username'}
			error="This is not a valid username!"
			className={'space-y-2'}
		/>
	</TiForm>
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
						className="w-full bg-transparent space-y-6"
						onSubmit={handleSubmit}
					>
						<TiText
							name={'large'}
							placeholder={'large'}
							theme={{
								input: 'font-semibold tracking-wider text-3xl rounded-lg bg-transparent selection:select-none border-2',
							}}
							className={'text-'}
						/>
						<TiText
							name={'small'}
							placeholder={'small'}
							theme={{
								input: 'font-semibold tracking-wider text-lg rounded-lg bg-transparent selection:select-none border-2',
							}}
						/>
						<TiText
							name={'small'}
							placeholder={'small'}
							theme={{
								input: 'font-semibold tracking-wider text-xs rounded-lg bg-transparent selection:select-none border-2',
							}}
						/>
					</TiForm>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					code={`<TiText name={'large'} placeholder={'large'}
	theme={{
		input: 'font-semibold tracking-wider text-3xl rounded-lg bg-transparent selection:select-none border-2',
	}} />
<TiText name={'small'} placeholder={'small'}
	theme={{
		input: 'font-semibold tracking-wider text-lg rounded-lg bg-transparent selection:select-none border-2',
	}} />
<TiText name={'small'} placeholder={'small'}
	theme={{
		input: 'font-semibold tracking-wider text-xs rounded-lg bg-transparent selection:select-none border-2',
	}} />`}
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
						className="w-full bg-transparent"
						onSubmit={handleSubmit}
					>
						<TiText
							name={'disabled'}
							label={'Disabled Inputs'}
							placeholder={'Disabled Inputs'}
							theme={{
								label: 'text-white font-semibold tracking-wide ml-3',
							}}
							disabled
							className={'space-y-2'}
						/>
					</TiForm>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					code={`<TiText name={'disabled'} label={'Disabled Inputs'} placeholder={'Disabled Inputs'} className={'space-y-2'}
	disabled
	theme={{
		label: 'text-white font-semibold tracking-wide ml-3',
	}}
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
						url={'/docs/forms/form-control#Readonly'}
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
							theme={{
								label: 'text-white font-semibold tracking-wide ml-3',
							}}
							readOnly
							className={'space-y-2'}
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
						className="w-full bg-transparent"
						onSubmit={handleSubmit}
					>
						<TiText
							name={'name'}
							label={'readOnly Text'}
							theme={{
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
	defaultValue={"This text can't be changed."}
	theme={{
		label: 'text-white font-semibold tracking-wide ml-3',
	}}
	readOnlyText
/>`}
				/>
			</div>

			{/* <div>
				<div className="flex items-baseline mb-4">
					<h1
						id={'Files'}
						className="text-3xl font-bold font-mono pt-8"
					>
						File Inputs
					</h1>

					<Breadcrums
						type={'linking'}
						url={'/docs/forms/form-control#Files'}
					/>
				</div>

				<p className="font-semibold mb-4 text-lg tracking-wider">
					TiFiles can be used to easily create an input field for
					selecting a file from your local storage. Support for cloud
					storages are on the way!
				</p>

				<LiveCode>
					<TiFiles name="files" className={'mb-4 w-fit '}>
						<TiFiles.Label
							title={'Select A File'}
							className={'block text-lg ml-1 font-semibold mb-2'}
						/>
						<div className="flex items-center border-2 border-indigo-600 rounded-lg">
							<TiFiles.FileWrapper
								className={
									'cursor-pointer bg-white m-2 p-2 py-1 shadow rounded-md border border-indigo-600 font-medium'
								}
							>
								<TiFiles.File />
							</TiFiles.FileWrapper>

							<div className="ml-3 mr-5">
								<TiFiles.Info fallback="Cristiano ronaldo is the best" />
							</div>
						</div>
					</TiFiles>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					code={`import { TiFiles } from '@k8pai/tailwind-inputs';

const Usage = () => {
	return (
		<TiFiles name="files" className={'mb-4 w-fit '}>
			<TiFiles.Label
				title={'Select A File'}
				className={'block text-lg ml-1 font-semibold mb-2'}
			/>
			<div className="flex items-center border-2 border-indigo-600 rounded-lg">
				<TiFiles.FileWrapper
					className={
						'cursor-pointer bg-white m-2 p-2 py-1 shadow rounded-md border border-indigo-600 font-medium'
					}
				>
					<TiFiles.File />
				</TiFiles.FileWrapper>

				<div className="ml-3 mr-5">
					<TiFiles.Info fallback="Cristiano ronaldo is the best" />
				</div>
			</div>
		</TiFiles>
	);
};`}
				/>
			</div>

			<div>
				<div className="flex items-baseline mb-4">
					<h1
						id={'Files'}
						className="text-3xl font-bold font-mono pt-8"
					>
						Disabled File Inputs
					</h1>

					<Breadcrums
						type={'linking'}
						url={'/docs/forms/form-control#Files'}
					/>
				</div>

				<p className="font-semibold mb-4 text-lg tracking-wider">
					There is a <Highlight title={'isDisabled'} /> value that
					contains a boolean representation of whether the component
					is disabled or not. customize your component to your need
					for a disabled field, or go with the basic styles. It's
					totally your choice!
				</p>

				<LiveCode>
					<TiFiles name="files" className={'mb-4 w-fit '}>
						<TiFiles.Label
							title={'Select A File'}
							className={'block text-lg ml-1 font-semibold mb-2'}
						/>
						<div className="flex items-center border-2 border-indigo-600 rounded-lg">
							<TiFiles.FileWrapper
								className={
									'cursor-pointer bg-white m-2 p-2 py-1 shadow rounded-md border border-indigo-600 font-medium'
								}
							>
								<TiFiles.File />
							</TiFiles.FileWrapper>

							<div className="ml-3 mr-5">
								<TiFiles.Info fallback="Cristiano ronaldo is the best" />
							</div>
						</div>
					</TiFiles>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					code={`import { TiFiles } from '@k8pai/tailwind-inputs';

const Usage = () => {
	return (
		<TiFiles name="files" className={'mb-4 w-fit '}>
			{({ isDisabled }) => ( // Boolean value that can be used to customize classNames or conditonally render  
				<>
					<TiFiles.Label
						title={'Select A File'}
						className={'block text-lg ml-1 font-semibold mb-2'}
					/>
					<div
						className={'flex items-center border-2 border-indigo-600 rounded-lg}
					>
						<TiFiles.FileWrapper
							className={'m-2 p-2 py-1 shadow rounded-md border font-medium'}
						>
							<TiFiles.File disabled />
						</TiFiles.FileWrapper>

						<div className="ml-3 mr-5">
							<TiFiles.Info fallback="Cristiano ronaldo is the best" />
						</div>
					</div>
				</>
			)}
		</TiFiles>
	);
};`}
				/>
			</div> */}

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
						className="w-full bg-transparent text-white"
						onSubmit={handleSubmit}
					>
						<TiText
							name={'custom'}
							label={'customstyles'}
							mandatory
							validate={'username'}
							error={'This is not acceptable'}
							theme={{
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
	theme={{
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
						className="w-full bg-transparent space-y-1 text-white"
						onSubmit={handleSubmit}
					>
						<TiText
							label={'username'}
							name={'validateName'}
							validate={'username'}
							placeholder={'username'}
							error={'Check your username again.'}
							theme={{
								label: 'text-white font-semibold tracking-wide ml-1',
							}}
							className={'space-y-2'}
						/>
						<TiText
							name={'validatePassword'}
							label={'Password'}
							validate={'password'}
							placeholder={'Password'}
							error={
								'Should contain an uppercase, a lowercase, a special character, a number and min 8 characters.'
							}
							theme={{
								label: 'text-white font-semibold tracking-wide ml-1',
							}}
							className={'space-y-2'}
						/>
						<TiText
							name={'validatEmail'}
							label={'E Mail'}
							validate={'email'}
							placeholder={'Mail'}
							error={'This is not a valid email.'}
							theme={{
								label: 'text-white font-semibold tracking-wide ml-1',
							}}
							className={'space-y-2'}
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
		theme={{
			label: 'text-white font-semibold tracking-wide ml-1',
		}}
		className={'space-y-2'}
	/>
	<TiText
		name={'validatePassword'}
		label={'Password'}
		validate={'password'}
		placeholder={'Password'}
		error={
			'Should contain an uppercase, a lowercase, a special character, a number and min 8 characters.'
		}
		theme={{
			label: 'text-white font-semibold tracking-wide ml-1',
		}}
		className={'space-y-2'}
	/>
	<TiText
		name={'validatEmail'}
		label={'E Mail'}
		validate={'email'}
		placeholder={'Mail'}
		error={'This is not a valid email.'}
		theme={{
			label: 'text-white font-semibold tracking-wide ml-1',
		}}
		className={'space-y-2'}
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
