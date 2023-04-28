import React from 'react';

export default function Quoted({ children }) {
	return (
		<span className="text-lg font-bold text-white italic rounded-lg px-1 py-px bg-[#1e1e1e]">{`'${children}'`}</span>
	);
}
