import React from 'react';

export default function Note({ children }) {
	return (
		<div
			className={`border border-slate-600 shadow-xl bg-[#151515] p-2 rounded-md my-6 `}
		>
			<h2 className="text-lg text-slate-300 font-bold p-2">Note: </h2>
			<p className="px-2 pb-2">{children}</p>
		</div>
	);
}
