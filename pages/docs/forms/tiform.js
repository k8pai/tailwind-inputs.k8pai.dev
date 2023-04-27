import React from 'react';
import { TiForm, TiText, TiButton } from '@k8pai/tailwind-inputs';
import InThisPage from '../../../components/InThisPage';
import Breadcrums from '../../../components/Breadcrums';
import LiveCode from '../../../components/LiveCode';
import CodeBlock from '../../../components/Code';
import Highlight from '../../../components/Highlight';
import Paragraph from '../../../components/Paragraph';

export default function tiform() {
	const handleSubmit = (values) => {
		console.log(values);
	};
	return (
		<div className="h-fit flex flex-col space-y-10">
			<div>
				<div className="flex items-center justify-between mb-4">
					<h1 className="text-4xl text-white font-extrabold font-mono">
						TiForm
					</h1>
				</div>

				<Paragraph>
					TiForm is a parent Component of all the Ti components. It
					contains an optional props <Highlight title={'onSubmit'} />{' '}
					which takes in a function as it&apos;s value.
				</Paragraph>

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

				<CodeBlock
					lang={'javascript'}
					code={`const handleSubmit = (values) => {
	// do whatever you want with form values.
};`}
				/>

				<CodeBlock
					lang={'javascript'}
					code={` <TiForm
	className="w-full bg-transparent" // Use any tailwind utility classes here.
	onSubmit={handleSubmit}
>
	....
</TiForm>
`}
				/>

				<Paragraph>
					You can customize the <Highlight title={'TiForm'} /> like
					any other div tags with the className props.
				</Paragraph>
			</div>

			<div className="block xl:hidden">
				<InThisPage />
			</div>

			<div>
				<div className="flex items-baseline mb-4">
					<h1
						id={'usage'}
						className="text-3xl font-bold font-mono pt-8"
					>
						Usage
					</h1>
					<Breadcrums
						type={'linking'}
						url={'/docs/forms/tiform#usage'}
					/>
				</div>

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
		</div>
	);
}
