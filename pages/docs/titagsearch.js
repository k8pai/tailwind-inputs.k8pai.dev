import React from 'react';
import Quoted from '../../components/Quoted';
import CodeBlock from '../../components/Code';
import LiveCode from '../../components/LiveCode';
import Paragraph from '../../components/Paragraph';
import InThisPage from '../../components/InThisPage';
import Breadcrums from '../../components/Breadcrums';
import { TiSearchWithTag } from '@k8pai/tailwind-inputs';
import Table from '../../components/Table';
import Note from '../../components/Note';

export async function getStaticProps() {
	// name,
	// label = 'Categories',
	// style = {
	// 	mode: 'light',
	// },
	// infoNote = 'Space are not allowed for tags, try snake casing.',
	// splitter = ' ',
	// fallback = 'No Tags Selected',
	// buttonText = '',
	// placeholder = 'Tags realted to Categories',
	// autoComplete = 'off',
	// buttonComponent: Button = MdAdd,
	// fallbackComponent = CiShoppingTag,
	// getTags = () => {},
	const TiSearchWithTagProps = [
		{
			props: 'name',
			type: 'string',
			definition:
				'Mandatory, a key of the form object that is returned at submission.',
		},
		{
			props: 'label',
			type: 'string',
			definition:
				'A label that indicates the purpose or the type of data to be provided',
		},
		{
			props: 'infoNote',
			type: 'string',
			definition:
				'A short informational field below the input field, where you can provide an informational message on how to apply tags.',
		},
		{
			props: 'splitter',
			type: 'string',
			definition: 'A value that is used to split tags, used as a regex.',
		},
		{
			props: 'buttonText',
			type: 'string',
			definition:
				'The text to be displayed in the right side of the input field. default hidden, but you can give a text value to display it.',
		},
		{
			props: 'buttonComponent',
			type: 'IconType',
			definition:
				'An IconType value that can be used instead of button. default Icon is MdAdd from `react-icons`',
		},
		{
			props: 'fallbackComponent',
			type: 'IconType',
			definition:
				'An IconType value that can to indicate tag infront of the component. default Icon is MdAdd from `react-icons`',
		},
		{
			props: 'fallback',
			type: 'string',
			definition:
				'A field that holds value to be displayed if there are no tags selected.',
		},
		{
			props: 'placeholder',
			type: 'string',
			definition: 'A placeholder for the input field',
		},
		{
			props: 'autoComplete',
			type: 'boolean',
			definition: 'autocomplete property of the input field.',
		},
		{
			props: 'style',
			type: 'Object',
			definition:
				'The object that can be used to pass values to some specified keys to customize the components with tailwid-utility-classes.',
		},
		{
			props: 'getTags',
			type: 'Function',
			definition:
				'A function that can be used to get all the tags selected at the present instance.',
		},
	];
	return {
		props: { TiSearchWithTagProps },
	};
}

export default function Titagsearch({ TiSearchWithTagProps }) {
	return (
		<div className="h-fit flex flex-col space-y-2">
			<div>
				<div className="flex items-center justify-between mb-4">
					<h1 className="text-4xl font-extrabold font-mono">
						TiSearchWithTag
					</h1>
				</div>

				<Paragraph>
					A Complicated Search Bar section that can include tags for
					Searching queries. Further updates will include fields and
					sections that can be modifiable.
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
						url={'/docs/titagsearch#Example'}
					/>
				</div>

				<Paragraph>
					Search With Tag helps you to deal with components where you
					can select a tag and then search related to the tags, or do
					whatever you like with a couple of values known as Tags.
				</Paragraph>

				<LiveCode>
					<TiSearchWithTag
						name={'search'}
						style={{
							mode: 'dark',
						}}
					/>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					copy
					code={`import { TiForm, TiDisclosure } from '@k8pai/tailwind-inputs';

const myComponent = () => {
	const handleSubmit = (values) => {
		console.log(values);
	};

	return (
		<TiForm
			className="w-full bg-transparent"
			onSubmit={handleSubmit}
		>
			<TiSearchWithTag
				name={'search'}
				style={{
					mode: 'dark',
				}}
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
						url={'/docs/titagsearch#Sizing'}
					/>
				</div>

				<Paragraph>
					Sizes are of default for now, but you can customize with the{' '}
					<Quoted>max-w-</Quoted> property to meet your needs.
				</Paragraph>

				<LiveCode>
					<TiSearchWithTag
						name={'search'}
						style={{
							mode: 'dark',
							size: 'max-w-full',
						}}
					/>
				</LiveCode>
				<CodeBlock
					lang={'javascript'}
					code={`<TiSearchWithTag
	name={'search'}
	style={{
		mode: 'dark',
		size: 'max-w-full',
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
						url={'/docs/titagsearch#Props'}
					/>
				</div>
				<Paragraph>
					There are a list of props that will quiet be useful to
					handle values, customize the components and access selected
					values. The list of the props and their use is given below.
				</Paragraph>

				<Table data={TiSearchWithTagProps} />

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
							url={'/docs/titagsearch#Name'}
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
						code={`<TiSearchWithTag
	name='searchTag'
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
							url={'/docs/titagsearch#Label'}
						/>
					</div>

					<Paragraph>
						The <Quoted>label</Quoted> props is an optional props,
						that basically acts similar to the label tag in html.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`<TiSearchWithTag
	label='Search With Tags'
	...restProps 
/>`}
					/>
				</div>

				{/* infoNote props  */}
				<div>
					<div className="flex items-baseline mb-4">
						<h2
							id={'InfoNote'}
							className="text-2xl font-bold font-mono pt-8"
						>
							infoNote
						</h2>
						<Breadcrums
							type={'linking'}
							url={'/docs/titagsearch#InfoNote'}
						/>
					</div>

					<Paragraph>
						The <Quoted>infoNote</Quoted> props is an optional props
						that will let you provide additional information on what
						tags are to be included, or how can tags be added, or
						any custom messge as well.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`<TiSearchWithTag
	infoNote='Space are not allowed for tags, try snake casing.'
	...restProps 
/>`}
					/>
				</div>

				{/* splitter props  */}
				<div>
					<div className="flex items-baseline mb-4">
						<h2
							id={'Splitter'}
							className="text-2xl font-bold font-mono pt-8"
						>
							Splitter
						</h2>
						<Breadcrums
							type={'linking'}
							url={'/docs/titagsearch#Splitter'}
						/>
					</div>

					<Paragraph>
						This is a regex type that is used to seperate tags from
						each other. You can specify the character that is used
						to split the tags. Some of the reccomended and top most
						used tag splitting characters are as follows.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`splitters = [' ', '-', ',', ....]`}
					/>

					<Note>
						Default value of splitter is &apos; &apos; and without
						providing a value to it, the tags will not be able to
						include spaces between them.
					</Note>

					<CodeBlock
						lang={'javascript'}
						code={`<TiSearchWithTag
	splitter=' '
	...restProps 
/>`}
					/>
				</div>

				{/* buttonText props  */}
				<div>
					<div className="flex items-baseline mb-4">
						<h2
							id={'ButtonText'}
							className="text-2xl font-bold font-mono pt-8"
						>
							buttonText
						</h2>
						<Breadcrums
							type={'linking'}
							url={'/docs/titagsearch#ButtonText'}
						/>
					</div>

					<Paragraph>
						An alternative for the default{' '}
						<Quoted>buttonComponent</Quoted> props that is used for
						the additional button in the input field for more
						interactive user experience.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`<TiSearchWithTag
	buttonText='add'
	...restProps 
/>`}
					/>
				</div>

				{/* buttonComponent props  */}
				<div>
					<div className="flex items-baseline mb-4">
						<h2
							id={'ButtonComponent'}
							className="text-2xl font-bold font-mono pt-8"
						>
							buttonComponent
						</h2>
						<Breadcrums
							type={'linking'}
							url={'/docs/titagsearch#ButtonComponent'}
						/>
					</div>

					<Paragraph>
						An <Quoted>IconType</Quoted> submit button to add tags.
						Default Icon is <Quoted>MdAdd</Quoted> from{' '}
						<Quoted>react-icons</Quoted>.
					</Paragraph>

					<Note>
						<Quoted>tailwind-inputs</Quoted> syncs in good with{' '}
						<Quoted>react-icons</Quoted>. Custom icons works as
						well, a small sample for the Icon Component will be
						added soon.
					</Note>

					<CodeBlock
						lang={'javascript'}
						code={`<TiSearchWithTag
	buttonComponent='MdAdd'
	...restProps 
/>`}
					/>
				</div>

				{/* fallbackComponent props  */}
				<div>
					<div className="flex items-baseline mb-4">
						<h2
							id={'FallbackComponent'}
							className="text-2xl font-bold font-mono pt-8"
						>
							fallbackComponent
						</h2>
						<Breadcrums
							type={'linking'}
							url={'/docs/titagsearch#FallbackComponent'}
						/>
					</div>

					<Paragraph>
						An <Quoted>IconType</Quoted> for the fallback component
						that shows up when there are no tags selected. Default
						Icon is <Quoted>CiShoppingTag</Quoted> from{' '}
						<Quoted>react-icons</Quoted>.
					</Paragraph>

					<Note>
						<Quoted>tailwind-inputs</Quoted> syncs in good with{' '}
						<Quoted>react-icons</Quoted>. Custom icons works as
						well, a small sample for the Icon Component will be
						added soon.
					</Note>

					<CodeBlock
						lang={'javascript'}
						code={`<TiSearchWithTag
	fallbackComponent='CiShoppingTag'
	...restProps 
/>`}
					/>
				</div>

				{/* fallback props  */}
				<div>
					<div className="flex items-baseline mb-4">
						<h2
							id={'Fallback'}
							className="text-2xl font-bold font-mono pt-8"
						>
							Fallback
						</h2>
						<Breadcrums
							type={'linking'}
							url={'/docs/titagsearch#Fallback'}
						/>
					</div>

					<Paragraph>
						The <Quoted>fallback</Quoted> props represents the
						message that appears to be when no tags are selected.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`<TiSearchWithTag
	fallback='No Tags selected.'
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
							url={'/docs/titagsearch#Placeholder'}
						/>
					</div>

					<Paragraph>
						<Quoted>placeholder</Quoted> is the placeholder that you
						can customize with string values for displaying info on
						type of tags user is to select. Same as that of
						placeholder attribute of input fields.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`<TiSearchWithTag
	placeholder='tech skills seperated by comma'
	...restProps 
/>`}
					/>
				</div>

				{/* autocomplete props  */}
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
							url={'/docs/titagsearch#Autocomplete'}
						/>
					</div>

					<Paragraph>
						When turned on, gives suggestions in the input field.
						Default value is <Quoted>Off</Quoted>.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`<TiSearchWithTag
	autoComplete="on"
	...restProps 
/>`}
					/>
				</div>

				{/* getTags props  */}
				<div>
					<div className="flex items-baseline mb-4">
						<h2
							id={'GetTags'}
							className="text-2xl font-bold font-mono pt-8"
						>
							getTags
						</h2>
						<Breadcrums
							type={'linking'}
							url={'/docs/titagsearch#GetTags'}
						/>
					</div>

					<Paragraph>
						<Quoted>getTags</Quoted> is a function that can be used
						to get all the selected tags, at the current instance.
						You can deal with the values to perform custom
						operations, fetch data depending on what the user has
						selected.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`<TiSearchWithTag
	getTags={handleTags}
	...restProps 
/>`}
					/>

					<CodeBlock
						lang={'javascript'}
						code={`const handleTags = (values) => {
	console.log(values)
	// or perform any operations that you want with this tags.
}`}
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
							url={'/docs/titagsearch#Style'}
						/>
					</div>

					<Paragraph>
						An optional field that can be used to customize the
						component to your wish.
					</Paragraph>

					<CodeBlock
						lang={'javascript'}
						code={`<TiDisclosure
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
