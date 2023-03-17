import { useEffect, useState } from 'react';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	const [state, setState] = useState({ username: '' });

	useEffect(() => {
		console.log('username : ', state.username);
	}, [state]);

	const handleChange = (event) => {
		console.log(event.target);
		const { name, value } = event.target;
		console.log('name = ', name);
		console.log('value = ', value);
		console.log('state.username = ', state.username);
		setState((prev) => ({ ...prev, [name]: value }));
	};
	return (
		<div className="w-full max-w-7xl mx-auto">
			<div className="">
				<div></div>
				<h1>cristiano ronaldo</h1>
				<h1>{state.username}</h1>
				<input
					type="text"
					name="username"
					value={state.username}
					onChange={handleChange}
				/>
				{/* <button
					onClick={() => {
						setState((val) => val + 1);
					}}
				>
					increment
				</button> */}
			</div>
			{/* <Code /> */}
		</div>
	);
}

Home.getLayout = function PageLayout(page) {
	return <>{page}</>;
};
