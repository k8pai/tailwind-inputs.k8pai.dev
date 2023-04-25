import React from 'react';

const files = () => {
	const handleSubmit = (values) => {
		console.log(values);
	};

	const options = [
		{ id: 1, name: 'Durward Reynolds', disable: false },
		{ id: 2, name: 'Kenton Towne', disable: false },
		{ id: 3, name: 'Therese Wunsch', disable: false },
		{ id: 4, name: 'Benedict Kessler', disable: false },
		{ id: 5, name: 'Katelyn Rohan', disable: false },
	];

	return (
		<div className="h-fit flex flex-col">
			<div>
				<div className="flex items-center justify-between mb-4">
					<h1 className="text-4xl font-extrabold font-mono">
						TiFiles
					</h1>
				</div>

				<p className="font-semibold mb-4 text-lg tracking-wider">
					TiFiles can be used in your React applications to easily
					create an input field for selecting a file from your local
					storage. Support for cloud storages are on the way.
				</p>
			</div>

			<div className="block xl:hidden">
				<InThisPage />
			</div>

			<Installation />

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
					To use the TiFiles component in your React application, you
					need to import it and then use it like any other React
					component.
				</p>

				<LiveCode bg="white">
					<TiForm
						className="w-full rounded text-black "
						onSubmit={handleSubmit}
					>
						<TiMultiselect
							name={'multiselect'}
							value={options[0].name}
							label={'Select Names'}
						>
							{options.map((option, optionIdx) => (
								<TiMultiselect.Option
									key={optionIdx}
									value={option.name}
									disable={option.disable}
								>
									{option.name}
								</TiMultiselect.Option>
							))}
						</TiMultiselect>
					</TiForm>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					code={`import { TiMultiselect } from '@k8pai/tailwind-inputs';

const Example = () => {
	const options = [
		{ id: 1, name: 'Durward Reynolds', disable: false },
		{ id: 2, name: 'Kenton Towne', disable: false },
		{ id: 3, name: 'Therese Wunsch', disable: false },
		{ id: 4, name: 'Benedict Kessler', disable: false },
		{ id: 5, name: 'Katelyn Rohan', disable: false },
	];

	return (
		<TiForm
			className="w-full rounded"
			onSubmit={handleSubmit}
		>
			<TiMultiselect
				name={'multiselect'}
				value={options[0].name}
				label={'Select Names'}
			>
				{options.map((option, optionIdx) => (
					<TiMultiselect.Option
						key={optionIdx}
						value={option.name}
						disable={option.disable}
					>
						{option.name}
					</TiMultiselect.Option>
				))}
			</TiMultiselect>
		</TiForm>
	)
}`}
				/>
			</div>
		</div>
	);
};

export default files;
