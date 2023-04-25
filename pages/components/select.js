import { TiForm, TiSelect } from '@k8pai/tailwind-inputs';
import React from 'react';
import Breadcrums from '../../components/Breadcrums';
import CodeBlock from '../../components/Code';
import Highlight from '../../components/Highlight';
import InThisPage from '../../components/InThisPage';
import LiveCode from '../../components/LiveCode';

const select = () => {
	const handleSubmit = (values) => {
		console.log(values);
	};

	const options = [
		{ id: 1, name: 'Lionel Messi', value: 'messi' },
		{ id: 2, name: 'Cristiano Ronaldo', value: 'ronaldo' },
		{ id: 3, name: 'Neymar Jr.', value: 'neymar' },
		{ id: 4, name: 'Kylian Mbappé', value: 'mbappé' },
		{ id: 5, name: 'Erling Haaland', value: 'haaland' },
	];

	const optionsArr = [
		'Lionel Messi',
		'Cristiano Ronaldo',
		'Neymar Jr.',
		'Kylian Mbappé',
		'Kevin De Bruyne',
	];

	const disabledOptions = [
		{ id: 1, value: 'Lionel Messi', disable: true },
		{ id: 2, value: 'Cristiano Ronaldo', disable: false },
		{ id: 3, value: 'Neymar Jr.', disable: false },
		{ id: 4, value: 'Kylian Mbappé', disable: true },
		{ id: 5, value: 'Kevin De Bruyne', disable: false },
	];

	const getChanges = (value) => {
		console.log(value);
	};

	return (
		<div className="h-fit flex flex-col space-y-10">
			<div>
				<div className="flex items-center justify-between mb-4">
					<h1 className="text-4xl font-extrabold font-mono">
						Dropdowns | Selects
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
						url={'/components/select#Example'}
					/>
				</div>

				<p className="font-semibold mb-4 text-lg tracking-wider">
					Selects or Dropdowns provides a bunch of options from which
					an option is to be selected. A simple modified version with
					less code and basic customized dropdowns.
				</p>

				<LiveCode>
					<TiForm
						className="w-full bg-transparent"
						onSubmit={handleSubmit}
					>
						<TiSelect name={'select'} options={options} />
					</TiForm>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					code={`import { TiForm, TiSelect } from '@k8pai/tailwind-inputs';

const myComponent = () => {
	<TiForm
		className="w-full bg-transparent"
		onSubmit={handleSubmit}
	>
		<TiSelect name={'select'} options={options} />
	</TiForm>
}

export default myComponent;`}
				/>
			</div>

			<div>
				<div className="flex items-baseline mb-4">
					<h1
						id={'value'}
						className="text-3xl font-bold font-mono pt-8"
					>
						Default value
					</h1>
					<Breadcrums
						type={'linking'}
						url={'/components/select#value'}
					/>
				</div>

				<p className="font-semibold mb-4 text-lg tracking-wider">
					Selects or Dropdowns provides a bunch of options from which
					an option is to be selected. A simple modified version with
					less code and basic customized dropdowns.
				</p>

				<LiveCode>
					<TiForm
						className="w-full bg-transparent"
						onSubmit={handleSubmit}
					>
						<TiSelect
							name={'select'}
							value={'Neymar Jr.'}
							options={options}
						/>
					</TiForm>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					code={`import { TiForm, TiSelect } from '@k8pai/tailwind-inputs';

const myComponent = () => {
	<TiForm
		className="w-full bg-transparent"
		onSubmit={handleSubmit}
	>
		<TiSelect name={'select'} value={'Neymar Jr.'} options={options} />
	</TiForm>
}

export default myComponent;`}
				/>
			</div>

			<div>
				<div className="flex items-baseline mb-4">
					<h1
						id={'changes'}
						className="text-3xl font-bold font-mono pt-8"
					>
						Changes
					</h1>
					<Breadcrums
						type={'linking'}
						url={'/components/select#changes'}
					/>
				</div>

				<p className="font-semibold mb-4 text-lg tracking-wider">
					Selects or Dropdowns provides a bunch of options from which
					an option is to be selected. A simple modified version with
					less code and basic customized dropdowns.
				</p>

				<LiveCode>
					<TiForm
						className="w-full bg-transparent"
						onSubmit={handleSubmit}
					>
						<TiSelect
							name={'select'}
							options={options}
							onChange={getChanges}
						/>
					</TiForm>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					code={`import { TiForm, TiSelect } from '@k8pai/tailwind-inputs';

const myComponent = () => {
	const getChanges = (value) => {
		console.log(value);
	};
	return (
		<TiForm
			className="w-full bg-transparent"
			onSubmit={handleSubmit}
		>
			<TiSelect name={'select'} options={options} />
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
						url={'/components/select#Sizing'}
					/>
				</div>

				<p className="font-semibold mb-4 text-lg tracking-wider">
					There are bunch of different sizings that you can use for
					your tailwind-inputs field.
				</p>

				<LiveCode>
					<TiForm
						className="w-full bg-transparent space-y-4"
						onSubmit={handleSubmit}
					>
						<TiSelect
							name={'extralarge'}
							options={options}
							style={{ size: 'max-w-4xl' }}
						/>
						<TiSelect
							name={'default'}
							options={options}
							style={{ size: 'max-w-lg' }}
						/>
						<TiSelect
							name={'small'}
							options={options}
							style={{ size: 'max-w-xs' }}
						/>
					</TiForm>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					code={`<TiSelect name={'extralarge'} options={options} style={{ size: 'max-w-4xl' }} />
<TiSelect name={'default'} options={options} style={{ size: 'max-w-lg' }} />
<TiSelect name={'small'} options={options} style={{ size: 'max-w-xs' }} />`}
				/>
			</div>

			<div>
				<div className="flex items-baseline mb-4">
					<h1
						id={'Disabled'}
						className="text-3xl font-bold font-mono pt-8"
					>
						Disabled Fields
					</h1>

					<Breadcrums
						type={'linking'}
						url={'/components/select#Disabled'}
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
						<TiSelect
							name={'disabledSelects'}
							options={disabledOptions}
						/>
					</TiForm>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					code={`<TiSelect name={'disabledSelects'} options={disabledOptions} />`}
				/>

				<p className="font-semibold mb-4 text-lg tracking-wider">
					Form inputs are input components, configured with tailwind,
					with a bunch of validations.
				</p>
				<CodeBlock
					lang={'javascript'}
					code={`const disabledOptions = [
	{ id: 1, value: 'Lionel Messi', disable: true },
	{ id: 2, value: 'Cristiano Ronaldo', disable: false },
	{ id: 3, value: 'Neymar Jr.', disable: false },
	{ id: 4, value: 'Kylian Mbappé', disable: true },
	{ id: 5, value: 'Kevin De Bruyne', disable: false },
];`}
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
						url={'/components/select#customAndValid'}
					/>
				</div>

				<div className="flex items-baseline mb-4 group">
					<h2
						id="themes"
						className="text-xl font-bold font-mono text-cyan-100 pt-8"
					>
						Themes
					</h2>
					<Breadcrums
						type={'linking'}
						url={'/components/select#themes'}
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
						className="w-full bg-transparent"
						onSubmit={handleSubmit}
					>
						<TiSelect
							name={'lightSelect'}
							options={options}
							style={{ size: 'max-w-xs', mode: 'light' }}
						/>
						<TiSelect
							name={'darkSelect'}
							options={options}
							style={{ size: 'max-w-xs', mode: 'dark' }}
						/>
					</TiForm>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					code={`<TiSelect
	name={'lightSelect'}
	options={options}
	style={{ mode: 'light' }}
/>
<TiSelect
	name={'darkSelect'}
	options={options}
	style={{ mode: 'dark' }}
/>`}
				/>

				<div className="flex items-baseline mb-4 group">
					<h2
						id="flexibility"
						className="text-xl font-bold font-mono text-cyan-100 pt-8"
					>
						Flexibility
					</h2>
					<Breadcrums
						type={'linking'}
						url={'/components/select#flexibility'}
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

				<div className="font-semibold mb-4 text-lg tracking-wider flex items-start">
					<Breadcrums />{' '}
					<p>
						For non sensitive data, you don't need to worry about
						anything. You can pass in an{' '}
						<Highlight title={'array'} /> of options. for eg:
					</p>
				</div>
				<CodeBlock
					lang={'javascript'}
					code={`const optionsArr = [
	'Lionel Messi',
	'Cristiano Ronaldo',
	'Neymar Jr.',
	'Kylian Mbappé',
	'Kevin De Bruyne',
];`}
				/>

				<div className="font-semibold mb-4 text-lg tracking-wider flex items-start">
					<Breadcrums />{' '}
					<p>
						For sensitive data, you may need to pass in an{' '}
						<Highlight title={'array of object in a format'} />. The
						object should be as follows.
					</p>
				</div>
				<CodeBlock
					lang={'javascript'}
					code={`{ 
	id: // optional, default is the index of the object.
	name: // displayed on the screen as options, when not provided takes the same as that of value,
	value: // mandatory field *.
	disable: // optional, default is false.
}`}
				/>

				<div className="font-semibold mb-4 text-lg tracking-wider flex items-start">
					<Breadcrums />{' '}
					<p>For quick start you can try this boilerplate.</p>
				</div>
				<CodeBlock
					lang={'javascript'}
					code={`const options = [
	{ id: 1, name: 'Lionel Messi', value: 'messi' },
	{ id: 2, name: 'Cristiano Ronaldo', value: 'ronaldo' },
	{ id: 3, name: 'Neymar Jr.', value: 'neymar' },
	{ id: 4, name: 'Kylian Mbappé', value: 'mbappé' },
	{ id: 5, name: 'Erling Haaland', value: 'haaland' },
];`}
				/>
			</div>
		</div>
	);
};

export default select;
